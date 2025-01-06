import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Figura } from './Figura.jsx';
const FondoNoHoverMarca = 'https://res.cloudinary.com/dwxe9hrrt/image/upload/v1736185667/FondoNoHoverMarca_y7cx5i.png'

export const FormularioDeContacto = () => {
  const [btnText, setBtnText] = useState('Enviar correo');
  const [formData, setFormData] = useState({
    from_name: '',
    from_apellido: '',
    message: '',
    email_id: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      from_name: '',
      from_apellido: '',
      message: '',
      email_id: ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { from_name, from_apellido, message, email_id } = formData;

    if (!from_name || !from_apellido || !message || !email_id) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    setBtnText('Enviando...');

    const serviceID = 'default_service';
    const templateID = 'template_31wnjl8';

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        setBtnText('Enviar correo.');
        toast.success("Su correo fue enviado, en breve me comunicaré con usted");
        resetForm();
      })
      .catch((err) => {
        setBtnText('Enviar correo.');
        toast.error("Ocurrió un error al enviar el correo");
      });
  };

  return (
    <div id="Contactame" className="h-screen md:w-3/4 bg-white flex flex-col justify-center items-center gap-5 w-full">
      <h1 className='text-3xl'>Formulario de contacto</h1>
      <form onSubmit={handleSubmit} className="bg-[#1b1b1b] p-8 rounded-lg shadow-2xl hover:scale-105 hover:m-4 transition">

        <div className="mb-4 flex flex-col md:flex-row gap-4">
          <div className='flex flex-col'>
            <label htmlFor="from_name" className="block text-sm sm:text-lg font-medium text-white">Nombre:</label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="w-56 h-10 rounded"
              value={formData.from_name}
              onChange={handleInputChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="from_apellido" className="block text-sm sm:text-lg font-medium text-white">Apellido:</label>
            <input
              type="text"
              name="from_apellido"
              id="from_apellido"
              className="w-56 h-10 rounded"
              value={formData.from_apellido}
              onChange={handleInputChange}
            />
          </div>
        </div>


        <div className='flex flex-col md:flex-row w-full items-center justify-center gap-7'>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm sm:text-lg font-medium text-white">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="w-56 rounded"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>

            <label htmlFor="email_id" className="block text-sm sm:text-lg font-medium text-white">Correo:</label>
            <input
              type="email"
              name="email_id"
              id="email_id"
              className="w-56 h-10 rounded"
              value={formData.email_id}
              onChange={handleInputChange}
            />
          </div>

          <div className='cursor-pointer w-auto flex items-center justify-center '>
            {/* <Figura /> */}
            <img className="w-52 h-52" src={FondoNoHoverMarca} alt="Foto principal" />
          </div>
        </div>




        <input type="submit" value={btnText} className="text-[#1b1b1b] bg-[#44f814] p-2 rounded cursor-pointer hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-hoverCustom transition-all hover:text-[#44f814] hover:bg-white focus:translate-x-[4px] focus:translate-y-[4px] focus:bg-black focus:border-black focus:border-3 focus:text-[#44f814] focus:shadow-hoverCustom" />
      </form>
      <ToastContainer />
    </div>
  );
};
