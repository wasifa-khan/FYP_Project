import React from 'react';

const Certification = ({ certification }) => (
    <div className="certification">
        <h2>Certification</h2>
        <p>
            <strong>{certification.title}</strong><br />
            {certification.institution}<br />
            {certification.years}<br />
            {certification.description}
        </p>
    </div>
);

export default Certification;
