import React from 'react'
import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
    //1. Group multiple inputs into one state object
    const[fields,setFields] = useState({name: '', email:'', message:''})
    const [status,setStatus] = useState('idle'); // 'idle', 'sending', or 'success'
    //2. A single function to handle all inputs!
    function handleChange(event){
        const {name, value} = event.target;
        //Use Spread Operator here so that we don't delete other fields!
        setFields(prev => ({...prev, [name]:value}))
    }
    //3. Handle form submission
    async function handleSubmit(event){
        event.preventDefault();
        setStatus('sending');
        //Fake API call
        await new Promise(resolve => setTimeout(resolve,2000));
        setStatus('success');

    }
    if(status==='success'){
        return <div className='success-msg'>✅ Message sent ! I will reply soon.</div>
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div class="form-group">
            <label>Name</label>
            <input name='name' type='text' required value={fields.value} onChange={handleChange}/>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input name='email' type='email' required value={fields.email} onChange={handleChange}/>
        </div>
        <div class="form-group">
            <label>Message</label>
            <textarea name='message' rows='5' required value={fields.message} onChange={handleChange}/>
        </div>
        <button type="submit" disabled={status==='sending'} className="btn btn-primary">
            {status==='sending' ? 'Sending...': 'Send Message 🚀'}
            </button>
      </form>
    </div>
  )
}

export default ContactForm
