import React from "react";
import "./Contact.css"
import call from "../img/call.png"
import location from "../img/location.png"
import mail from "../img/mail.png"
import message from "../img/message.png"

function Contact() {

    return (

        <div className="contactMain">
            <div className="contact">
                <div className="heading"><p>Contact us</p></div>

                <div className="mergeContact">
                    <div className="miniContacts">
                        <img src={call} alt="call" />
                        <h3>Call us</h3>
                        <p>+00 0000-000000</p>
                        <button className="contactBtns">Call now</button>
                    </div>

                    <div className="miniContacts">
                        <img src={message} alt="message" />
                        <h3>Chat Live</h3>
                        <p>We are Available Sun to Fri , 7am to 7pm</p>
                        <button className="contactBtns">Chat now</button>
                    </div>

                    <div className="miniContacts">
                        <img src={mail} alt="email" />
                        <h3>Ask a Question</h3>
                        <p>Fill out the form and we will get back to you within 24hrs</p>
                        <button className="contactBtns">get Started</button>
                    </div>

                    <div className="miniContacts">
                        <img src={location} alt="location" />
                        <h3>Our Address</h3>
                        <p>Abcd ,Efghijklmn , opqrst ,uvwxyz</p>
                        <p>Postal Code : 0000</p>
                        <button className="contactBtns">open Map</button>
                    </div>
                    </div>

            </div>
        </div>
       

    )
}

export default Contact;