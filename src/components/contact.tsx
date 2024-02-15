/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';


interface ComponentsContactProps {}

const Contact: FC<ComponentsContactProps> = () => (
  <div>

<div className="contact_section layout_padding">
         <div className="container">
            <h1 className="contact_taital">Get In Touch</h1>
         </div>
         <div className="contact_section_2 layout_padding">
            <div className="container">
               <div className="mail_section">
                  <div className="row">
                     <div className="col-md-6">
                        <input type="" className="input_text" placeholder="Name" name="Name" />
                     </div>
                     <div className="col-md-6">
                        <input type="" className="input_text" placeholder="Email" name="Email" />
                     </div>
                  </div>
                  <input type="" className="input_text" placeholder="Phone Number" name="Phone Number" />
                  <textarea name="comment" className="massage_box" form="usrform">Message</textarea>
                  <div className="send_bt">
                     <div className="send_text"><a href="#">SEND</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      </div>
  
);

export default Contact;
