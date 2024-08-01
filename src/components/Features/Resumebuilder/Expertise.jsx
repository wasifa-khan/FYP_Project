import React from 'react';

const Expertise = ({ expertise }) => (
    <div className="expertise">
        <h2>Expertise</h2>
        <ul>
            {expertise.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
);

export default Expertise;
