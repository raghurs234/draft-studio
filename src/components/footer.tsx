/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';


interface ComponentsFooterProps {}

const Footer: FC<ComponentsFooterProps> = () => (
  <div>

   <div className="footer_section layout_padding">
      <div className="container">
         <div className="row">
            <div className="col-lg-4 col-sm-12">
               <div className="map_text"><a href="#"><img src="images/map-icon.png" alt="contact" className="image_main"/><span className="padding_left_10">Near Akashanavi Brahmavar</span></a></div>
            </div>
            <div className="col-lg-4 col-sm-12">
               <div className="map_text"><a href="#"><img src="images/call-icon.png" alt="mail" className="image_main"/><span className="padding_left_10">(+91 98450 00734)</span></a></div>
            </div>
            <div className="col-lg-4 col-sm-12">
               <div className="map_text"><a href="#"><img src="images/call-icon.png" alt="mail" className="image_main"/><span className="padding_left_10">(+91 86182 22324)</span></a></div>
            </div>
            <div className="col-lg-4 col-sm-12">
               <div className="map_text"><a href="#"><img src="images/mail-icon.png" alt="mail" className="image_main"/><span className="padding_left_10">draftstudio.bvr@gmail.com</span></a></div>
            </div>
         </div>
      </div>
   </div>
   
   <div className="copyright_section">
      <div className="container">
         <p className="copyright_text">Copyright 2024 All Right Reserved By Draft Studio Brahmavar</p>
      </div>
   </div>
   </div>
);

export default Footer;
