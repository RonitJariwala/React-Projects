import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "92c87754-b2ff-45ff-9b70-5ffcacb87f8c");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}></img></h3>
            <p>Feel free to reach out through contact form or find out contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our university community.</p>
            <ul>
                <li><img src={mail_icon} />Contact@Edusity</li>
                <li><img src={phone_icon}/> +1 453-278-2321</li>
                <li><img src={location_icon}/> 77 Massachusetts Ave, Cambridge<br/> MA 03892, Unites States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='Enter your message' required ></textarea>
                <button type='submit' className="btn dark-btn">Submit Now <img src={white_arrow} /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact