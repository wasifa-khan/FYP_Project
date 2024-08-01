import React from 'react';

const Education = ({ education }) => (
    <div className="education">
        <h2>Education</h2>
        {education.map((edu, index) => (
            <p key={index}>
                <strong>{edu.school}</strong><br />
                {edu.degree}<br />
                {edu.years}<br />
                {edu.gpa}
            </p>
        ))}
    </div>
);

export default Education;
