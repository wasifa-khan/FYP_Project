from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import google.generativeai as genai
import fitz
from docx import Document
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from collections import Counter
import re
import io
import win32com.client  # Required for DOC file handling

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_gemini_response(input_text, document_content, prompt):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content([input_text, document_content, prompt])
    return response.text

def input_document_setup(uploaded_file, file_type):
    if file_type == "application/pdf":
        document = fitz.open(stream=uploaded_file, filetype="pdf")
        text_parts = [page.get_text() for page in document]
        document_content = " ".join(text_parts)
    elif file_type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        docx = Document(io.BytesIO(uploaded_file))
        paragraphs = [p.text for p in docx.paragraphs]
        document_content = "\n".join(paragraphs)
    elif file_type == "application/msword":
        # Handle .doc files
        doc_file = io.BytesIO(uploaded_file)
        document_content = read_doc_file(doc_file)
    else:
        raise FileNotFoundError("Unsupported file type")
    return document_content

def read_doc_file(doc_file):
    # Function to read DOC files using win32com.client
    word = win32com.client.Dispatch("Word.Application")
    doc = word.Documents.Open(doc_file.name)
    text = doc.Content.Text
    doc.Close()
    word.Quit()
    return text

def preprocess_text(text):
    text = text.lower()  # Convert to lowercase
    text = re.sub(r'\W+', ' ', text)  # Remove non-alphabetic characters
    tokens = word_tokenize(text)
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word not in stop_words]
    return tokens

def calculate_at_score(job_description, resume_content):
    # Preprocess and tokenize texts
    job_description_tokens = preprocess_text(job_description)
    resume_tokens = preprocess_text(resume_content)

    # Create frequency distributions
    job_description_freq = Counter(job_description_tokens)
    resume_freq = Counter(resume_tokens)

    # Debugging output
    print(f"Job Description Tokens: {job_description_tokens}")
    print(f"Resume Tokens: {resume_tokens}")
    print(f"Job Description Frequency: {job_description_freq}")
    print(f"Resume Frequency: {resume_freq}")

    # Calculate the total number of unique keywords in the job description
    total_keywords = len(job_description_freq)

    # Calculate the score
    match_count = 0
    for word in job_description_freq:
        if word in resume_freq:
            match_count += 1

    # Calculate the percentage match
    percentage = (match_count / total_keywords) * 100 if total_keywords > 0 else 0

    return percentage

@app.route('/api/data', methods=['POST'])
def handle_data():
    input_text = request.form.get('input_text')
    action = request.form.get('action')
    input_prompt = request.form.get('input_prompt', '')

    uploaded_file = request.files.get('uploaded_file')
    file_type = uploaded_file.content_type if uploaded_file else None

    if not uploaded_file:
        return jsonify({'error': 'No file uploaded'}), 400

    try:
        document_content = input_document_setup(uploaded_file.read(), file_type)
    except FileNotFoundError as e:
        return jsonify({'error': str(e)}), 400

    prompts = {
        "Tell Me About the Resume": """
            You are an experienced Technical Human Resource Manager, your task is to review the provided resume against the job description. 
            Please share your professional evaluation on whether the candidate's profile aligns with the role. 
            Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements.
        """,
        "How Can I Improve my Skills": """
            You are a Technical Human Resource Manager with expertise in data science, 
            your role is to scrutinize the resume in light of the job description provided. 
            Share your insights on the candidate's suitability for the role from an HR perspective. 
            Additionally, offer advice on enhancing the candidate's skills and identify areas where improvement is needed.
        """,
        "What are the Keywords That are Missing": """
            You are a skilled ATS (Applicant Tracking System) scanner with a deep understanding of data science and ATS functionality, 
            your task is to evaluate the resume against the provided job description. As a Human Resource manager,
            assess the compatibility of the resume with the role. Give me what are the keywords that are missing
            Also, provide recommendations for enhancing the candidate's skills and identify which areas require further development.
        """,
        "Percentage match": """
            You are a skilled ATS (Applicant Tracking System) scanner with a deep understanding of data science and ATS functionality, 
            your task is to evaluate the resume against the provided job description. 
            To calculate the percentage match, first extract the keywords from the job description and count the number of times they appear in the resume.
            Then, divide the number of keyword matches by the total number of keywords in the job description and multiply by 100 to get the percentage match.
            Return the percentage match, followed by any missing keywords and final thoughts.
        """,
       
    }

    prompt = prompts.get(action)
    if not prompt:
        return jsonify({'error': 'Invalid action'}), 400

    try:
        response_text = get_gemini_response(input_text, document_content, prompt)
        if action == "Percentage match":
            job_description = input_text
            resume_content = document_content
            score_percentage = calculate_at_score(job_description, resume_content)
            response_text = f"Percentage match: {score_percentage:.2f}%"
        return jsonify({'response': response_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
