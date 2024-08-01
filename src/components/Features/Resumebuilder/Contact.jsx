import React from 'react';

const Contact = ({ contact }) => (
    <div className="contact">
        <h2>Contact</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <p>{contact.website}</p>
        <p>{contact.address}</p>
    </div>
);

export default Contact;
