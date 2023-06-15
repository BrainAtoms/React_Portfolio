import React from "react";
import "../App.css";
import ContactForm from "./ContactForm";

function Contact(){
  return (
    <div>
<h3 id="Contact" className="titles">Contact:</h3>
              <div className="App">
      <header className="App-header">
        <div className="py-6">
          <ContactForm />
        </div>
      </header>
      </div>
      </div>
  );  
}
  
export default Contact; 