import '../../css/contacto.css';
import emailjs from '@emailjs/browser';

const Mailer = () => {
  const sendEmail = (event) => {
    emailjs.sendForm('service_een3ror','template_rynq3vs',event.target,'3y7CDTs09pKL_1OzL')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className='div-form'>
      <h1 className='title-form'>Contacto</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name='user_name'/>
        <label>Email</label>
        <input type="email" name='user_email' />
        <label>Mensaje</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <button className='button-contact'>Send</button>
      </form>
    </div>
  )
}

export default Mailer