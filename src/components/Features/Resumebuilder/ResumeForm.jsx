import React, { useState, useEffect } from 'react';
import Resume from './Resume';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ResumeForm.css'; // Import the CSS file

function ResumeForm() {
    const [data, setData] = useState({
        name: "",
        passion: "",
        contact: {
            phone: "",
            email: "",
            website: "",
            address: ""
        },
        education: [
            {
                school: "",
                degree: "",
                years: "",
                gpa: ""
            }
        ],
        expertise: [],
        about: "",
        experience: [
            {
                title: "",
                company: "",
                years: "",
                description: ""
            }
        ],
        certification: {
            title: "",
            institution: "",
            years: "",
            description: ""
        }
    });

    useEffect(() => {
        const storedData = localStorage.getItem('resumeData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(data));
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
            contact: {
                ...prevData.contact,
                [name]: value
            }
        }));
    }

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const newEducation = [...data.education];
        newEducation[index][name] = value;
        setData(prevData => ({
            ...prevData,
            education: newEducation
        }));
    }

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const newExperience = [...data.experience];
        newExperience[index][name] = value;
        setData(prevData => ({
            ...prevData,
            experience: newExperience
        }));
    }

    const handleCertificationChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            certification: {
                ...prevData.certification,
                [name]: value
            }
        }));
    }

    const downloadPDF = () => {
        const input = document.getElementById('resume');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save('resume.pdf');
            });
    };

    return (
        <div className="outer-container">
            <div className="form-container">
                <div className="form">
                <h2>Name</h2>
                    <input type="text"  name="name" placeholder="Name" value={data.name} onChange={handleChange} />

                    <h2>Passion</h2>
                    <input type="text" name="passion" placeholder="Passion" value={data.passion} onChange={handleChange} />

                    <h2>Contact</h2>
                    <input type="text" name="phone" placeholder="Phone" value={data.contact.phone} onChange={handleChange} />
                    <input type="text" name="email" placeholder="Email" value={data.contact.email} onChange={handleChange} />
                    <input type="text" name="website" placeholder="Website" value={data.contact.website} onChange={handleChange} />
                    <input type="text" name="address" placeholder="Address" value={data.contact.address} onChange={handleChange} />

                    <h2>Education</h2>
                    {data.education.map((edu, index) => (
                        <div key={index}>
                            <input type="text" name="school" placeholder="School" value={edu.school} onChange={(e) => handleEducationChange(index, e)} />
                            <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} />
                            <input type="text" name="years" placeholder="Years" value={edu.years} onChange={(e) => handleEducationChange(index, e)} />
                            <input type="text" name="gpa" placeholder="GPA" value={edu.gpa} onChange={(e) => handleEducationChange(index, e)} />
                        </div>
                    ))}

                    <h2>Expertise</h2>
                    <input type="text" name="expertise" placeholder="Expertise (comma separated)" value={data.expertise.join(",")} onChange={(e) => setData({ ...data, expertise: e.target.value.split(",") })} />

                    <h2>About</h2>
                    <textarea name="about" placeholder="About" value={data.about} onChange={(e) => setData({ ...data, about: e.target.value })}></textarea>

                    <h2>Experience</h2>
                    {data.experience.map((exp, index) => (
                        <div key={index}>
                            <input type="text" name="title" placeholder="Title" value={exp.title} onChange={(e) => handleExperienceChange(index, e)} />
                            <input type="text" name="company" placeholder="Company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} />
                            <input type="text" name="years" placeholder="Years" value={exp.years} onChange={(e) => handleExperienceChange(index, e)} />
                            <textarea name="description" placeholder="Description" value={exp.description} onChange={(e) => handleExperienceChange(index, e)}></textarea>
                        </div>
                    ))}

                    <h2>Certification</h2>
                    <input type="text" name="title" placeholder="Title" value={data.certification.title} onChange={handleCertificationChange} />
                    <input type="text" name="institution" placeholder="Institution" value={data.certification.institution} onChange={handleCertificationChange} />
                    <input type="text" name="years" placeholder="Years" value={data.certification.years} onChange={handleCertificationChange} />
                    <textarea name="description" placeholder="Description" value={data.certification.description} onChange={handleCertificationChange}></textarea>
                    
                    <button className="download-btn" onClick={downloadPDF}>Download PDF</button>
                </div>
            </div>
            <div id="resume" className="resume-container">
                <Resume data={data} />
            </div>
        </div>
    );
}

export default ResumeForm;
