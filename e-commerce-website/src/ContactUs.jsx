import React, {useState} from 'react';

function ContactUs(){

    const[name,setName] = useState("");
    const[email, setEmail] = useState("");
    const[help, setHelp] = useState("");
    const[subject, setSubject] = useState("");
    const[details, setDetails] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

          if(name.length < 3){
            alert('Name must be at least 3 characters long.')
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }  

        if(help === ""){
            alert("Select an option.")
            return;
        }

        if(!details){
            alert("Please provide more details about your inquiry in the 'Details' section.")
            return;
        }

        // Display the success message
        setSuccessMessage("Form submitted Successfully! We'll address your problem and get back to you soon.");

        // Clear all form fields
        setName("");
        setEmail("");
        setHelp("");
        setSubject("");
        setDetails("");

        // Set timeout to clear success message after 20 seconds
        setTimeout(() => {
            setSuccessMessage("");
        }, 4000); 
    };
        

    return(
        <div className="contact-container">
            <div className="contact-header">
                <h2> Contact Us</h2>
                <p> Contact the Help Team</p>
            </div>

        <div className="contact-inputs">    
          {successMessage ? <p className="success-message">{successMessage}</p> : null}

            <form onSubmit={handleSubmit}>
                <p>Name*</p>
                <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <p>Email*</p>
                <input type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <p>What can we help you with?*</p>
                    <select value={help} name="help" onChange={(e) => {setHelp(e.target.value)}}> 
                        <option value=""> Select an option</option>
                        <option value="OrderStatus">Order Status</option>
                        <option value="Returns">Returns & Exchanges</option>
                        <option value="GiftCards">Gift Cards</option>
                        <option value="Payment">Payment & Billing</option>
                        <option value="Issues">Account & Login Issues</option>
                        <option value="Feedback">Feedback & Suggestions</option>
                        <option value="Location">Store location & Hours</option>
                        <option value="Other">Other Inquiries </option>
                    </select>

                <p> Subject</p>
                <input type="text" name="subject" value={subject} onChange={(e) => {setSubject(e.target.value)}}/>
                <p> Details*</p>
                <textarea value={details} name="details" onChange={(e) => {setDetails(e.target.value)}}/> <br/> <br/>

                <button> Submit </button>   
             </form> 
        </div>
        </div>
    )
}

export default ContactUs