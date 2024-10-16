import React, { useState } from "react";
import { Button } from "@mui/material";

const Contact = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handledata = (e) => {
        const { name, value } = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://formspree.io/f/meoqjwwp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Data not fetched: ' + response.statusText);
            }
        })
        .then(data => {
            console.log(data);
            setFormData({ name: "", email: "", message: "" }); 
        })
        .catch(error => console.error("Error:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={formdata.name} 
                onChange={handledata} 
                placeholder="Your name" 
                required 
            />
            <input 
                type="email" 
                name="email" 
                value={formdata.email} 
                onChange={handledata} 
                placeholder="Your email" 
                required 
            />
            <textarea 
                name="message" 
                value={formdata.message} 
                onChange={handledata} 
                placeholder="Your message" 
                required 
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default Contact;
