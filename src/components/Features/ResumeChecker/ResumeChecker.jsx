import React, { useState } from 'react';
import axios from 'axios';
import "./ResumeChecker.css";

const ResumeChecker = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [inputText, setInputText] = useState('');
  const [action, setAction] = useState('');
  const [inputPrompt, setInputPrompt] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file || !file.type.match(/^(application\/pdf|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document)$/)) {
      setError('Please upload a valid PDF or DOCX file.');
      return;
    }
    setUploadedFile(file);
    setError(null);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('input_text', inputText);
    formData.append('uploaded_file', uploadedFile);
    formData.append('action', action);

    if (action === "Answer My Query") {
      formData.append('input_prompt', inputPrompt);
    }

    try {
      const res = await axios.post('http://localhost:5000/api/data', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      setResponse(res.data.response);
      setCurrentPage(3); // Move to response page after successful submission
    } catch (error) {
      console.error('Error:', error.response?.data?.error);
      setError(error.response?.data?.error || 'An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const nextPage = () => {
    if (currentPage === 1 && uploadedFile) {
      setCurrentPage(2);
    }
  };

  const prevPage = () => {
    setCurrentPage(currentPage === 3 ? 2 : 1);
  };

  return (
    <div className='resume-body'>
      <div className="container">
        <h1 className="resume-checker-header">Resume Checker</h1>
        <div className="resume-container">
          {currentPage === 1 && (
            <div className="resume-checker-container">
              <h2>Step 1: Upload File</h2>
              <div className="resume-checker-form-group">
                <label className="resume-checker-label">Upload File:</label><br/>
                <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
                {error && <div className="resume-checker-error">Error: {error}</div>}<br/>
                <button className="resume-checker-button" onClick={nextPage} disabled={!uploadedFile}>Next</button>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="resume-checker-step">
              <h2>Step 2 : Enter Job Description</h2>
              <div className="resume-checker-form-group">
                <label className="resume-checker-label">Input Text:</label>
                <textarea className="resume-checker-textarea" value={inputText} onChange={(e) => setInputText(e.target.value)} />
              </div>
              <div className="resume-checker-form-group">
                <label className="resume-checker-label">Action:</label>
                <select className="resume-checker-select" value={action} onChange={(e) => setAction(e.target.value)}>
                  <option value="">Select Action</option>
                  <option value="Tell Me About the Resume">Tell Me About the Resume</option>
                  <option value="How Can I Improve my Skills">How Can I Improve my Skills</option>
                  <option value="What are the Keywords That are Missing">What are the Keywords That are Missing</option>
                  <option value="Percentage match">Percentage match</option>
                 
                </select>
              </div>
              {action === "Answer My Query" && (
                <div className="resume-checker-form-group">
                  <label className="resume-checker-label">Input Prompt:</label>
                  <textarea className="resume-checker-textarea" value={inputPrompt} onChange={(e) => setInputPrompt(e.target.value)} />
                </div>
              )}
              <button className="resume-checker-button" onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
              {error && <div className="resume-checker-error">Error: {error}</div>}
              <button className="resume-checker-button" onClick={prevPage}>Previous</button>
            </div>
          )}

          {currentPage === 3 && (
            <div className="resume-checker-response">
              {response ? (
                <>
                  <strong>Response:</strong>
                  <pre>{response}</pre>
                </>
              ) : (
                <div>No response received.</div>
              )}
              <button className="resume-checker-button" onClick={() => setCurrentPage(2)}>Back</button>
              <button className="resume-checker-button" onClick={() => setCurrentPage(1)}>Start Over</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeChecker;
