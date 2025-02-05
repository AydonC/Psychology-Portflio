import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="Contactcontainer">
            <h1 className="title">CONTACT US</h1>
            <h3 className="subtitle">let us help you become you</h3>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        placeholder="First Name"
                        required
                    />
                </label>
                <label>
                    Surname
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="input"
                        placeholder="Last Name"
                        required
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="Email"
                        required
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea"
                        placeholder="Message"
                        required
                    />
                </label>
                <button type="submit" className="button">
                    Submit
                </button>
            </form>
            <h2 className="sHead">FIND US ON:</h2>
            <br />
            <div className="socials">

                <a href="">
                    <img
                        src="/src/assets/instagram_1384015.png"
                        style={{ height: '50px', width: '50px' }}
                    />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">
                    <img
                        src="src/assets/linkedin_3536569.png"
                        style={{ height: '50px', width: '50px' }}
                    />
                </a>

                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="mailto:">
                    <img
                        src="src/assets/email.png"
                        style={{ height: '50px', width: '50px' }}
                    />
                </a>
            </div>
        </div>
    );
};

export default Contact;
