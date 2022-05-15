import React , {useState} from 'react'
import { validateEmail } from '../../utils/helpers';

const Contact = () => {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#006d77] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} method='POST' action='https://getform.io/f/3f840aab-1948-44fd-b449-a15e9d8dce7f' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#e29578] text-[#edf6f9]'>Contact Me</p>
            <p className='text-[#edf6f9] py-4'> Submit the form below or send me an email - kelciemitchelmore@gmail.com</p>
          </div>
          <input defaultValue={name} className='bg-[#edf6f9] p-2' type='text' placeholder='Name' name='name' onBlur={handleChange}/>
          <input defaultValue={email} className='bg-[#edf6f9] my-4 p-2' type='email' placeholder='Email' name='email onBlur={handleChange}'/>
          <textarea defaultValue={message} className='bg-[#edf6f9] p-2' name='message' rows='10' placeholder='Message' onBlur={handleChange}></textarea>
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
          <button type='submit' className='text-[#edf6f9] border-2 hover:bg-[#e29578] hover:border-[#e29578] px-4 py-3 my-8 mx-auto'>Lets Chat!</button>
      </form>
    </div>
  )
}

export default Contact;
