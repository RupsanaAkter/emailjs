import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 const Emailjs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_d40pmie',
         'template_l26h01z',
         form.current,
         'OUm5E4fbxE23B_qDS')
   

        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" /> <br /> <br />
        <label>Email</label> 
        <input type="email" name="user_email" />  <br />  <br />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
};

export default Emailjs;