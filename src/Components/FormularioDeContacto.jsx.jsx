import { useState } from "react"

export const FormularioDeContacto = () => { 

    const [input, setInput] = useState({
        nombre: '',
        email: '',
        mensaje: ''      
    })




    return (
        <div id="Contactame" className="h-screen">
           <form id="contact-form">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
                <input type="email" id="email" name="email" placeholder="Your Email" required />
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>

        </div>
    )
}