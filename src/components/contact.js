import React from "react";
import { Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <section id="Contact" class="Contact">
        <div class="Contact_container">
            <div class="heading_section_title_container">
              <h2 class="heading_section_title heading_section_title_C">Contact</h2>
            </div>
            <div class="contact_form_container">
              <form action="mailto:Ajiyafaruk@gmail.com" class="contact_form" method="post"><input type="hidden" name="form_name" value="form"/>
                <div class="contact_form_field">
                  <label class="contact_form_label" for="name">Name</label>
                  <input required="*" placeholder="Enter Your Name" type="text" class="contact_form_input" name="name" id="name"/>
                </div>
                <div class="contact_form_field">
                  <label class="contact_form_label" for="email">Email</label>
                  <input required="*" placeholder="Enter Your Email" type="email" class="contact_form_input" name="email" id="email"/>
                </div>
                <div class="contact_form_field">
                  <label class="contact_form_label" for="message">Message</label>
                  <textarea required="*" cols="30" rows="10" class="contact_form_input" placeholder="Enter Your Message" name="message" id="message"></textarea>
                </div>
                <button type="Submit" class="contact_Button">Submit</button>
              </form>
            </div>
        </div>
    </section>
  );
}