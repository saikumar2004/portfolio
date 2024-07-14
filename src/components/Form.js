import "./Form.css";
import React from 'react';

function Form(){
const [result, setResult] = React.useState("");

  const onsubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "45658374-0ee5-45d2-8484-501e66700d4c");

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
    <div className="form">
       <form onSubmit={onsubmit}>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter Your Name" required/>
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter Your Email" required/>
        <label>Subject</label>
        <input type="text" name="Subject" placeholder="Enter Your Subject" required />
        <label>Message</label>
        <textarea name="message"  rows="6"  placeholder='Enter your message' required />
        <button className="btn">Submit</button>
       </form>
       <span style={{color:"#fff",marginLeft:"30%",fontSize:"30px"}}>{result}</span>
    </div>
  );
}

export default Form;
