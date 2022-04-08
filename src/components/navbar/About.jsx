import React from "react";
import "./About.css"
import aboutUs1 from "../../components/img/aboutUs1.jpg"
import aboutUs2 from "../../components/img/aboutUs2.jpg"

function About() {

    return (
        <div className="aboutMain">
          <div className="about">
            <div className="heading"><p>About us</p></div>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, cupiditate?</h3>
            <div className="aboutContent1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum placeat quo  obcaecati minus dignissimos quia aspernatur reiciendis dolore ad nemo corrupti a provident incidunt in fugit harum voluptates. Deleniti nemo, corrupti autem rem quam nobis a ad culpa corporis sint nam, error numquam exercitationem eos voluptatum officia, quaerat neque distinctio asperiores architecto modi odit. Aspernatur asperiores iure voluptatibus natus est facere provident ipsam! Dolores praesentium libero at, sunt aut odio alias. Id, ad. </p><img src={aboutUs1} alt="about"/></div>

            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, cupiditate?</h3>
            <div className="aboutContent2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum placeat quo obcaecati minus dignissimos quia aspernatur reiciendis dolore ad nemo corrupti a provident incidunt in fugit harum voluptates. Deleniti nemo, corrupti autem rem quam nobis a ad culpa corporis sint nam, error numquam exercitationem eos voluptatum officia, quaerat neque distinctio asperiores architecto modi odit. Aspernatur asperiores iure voluptatibus natus est facere provident ipsam! Dolores praesentium libero at, sunt aut odio alias. Id, ad. </p><img src={aboutUs2} alt="about"/></div>
        </div>
        </div>
    )
}

export default About;