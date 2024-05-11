import emailjs from 'emailjs-com';
import { useState } from 'react';

export const FormularioDeContacto = () => { 
    const [btnText, setBtnText] = useState('Send Email');

    const handleSubmit = (event) => {
      event.preventDefault();
      setBtnText('Sending...');
  
      const serviceID = 'default_service';
      const templateID = 'template_31wnjl8';
  
      emailjs.sendForm(serviceID, templateID, event.target)
        .then(() => {
          setBtnText('Send Email');
          alert('Sent!');
        })
        .catch((err) => {
          setBtnText('Send Email');
          alert(JSON.stringify(err));
        });
    };


    return (
        <div id="Contactame" className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="from_name" id="from_name" className="input-field" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" id="message" rows="4" className="input-field textarea"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="email_id" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email_id" id="email_id" className="input-field" />
        </div>

        <input type="submit" value={btnText} className="submit-button" />
      </form>
    </div>
    )
}