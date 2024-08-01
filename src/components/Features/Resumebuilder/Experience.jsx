import React from 'react';

const Experience = ({ experience }) => (
    <div className="experience">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
            <p key={index}>
                <strong>{exp.title}</strong><br />
                {exp.company}<br />
                {exp.years}<br />
                {exp.description}
            </p>
        ))}
    </div>
);

export default Experience;
