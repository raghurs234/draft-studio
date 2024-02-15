/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';


interface ComponentsServiceProps {}

const Service: FC<ComponentsServiceProps> = () => (
  <div>

<div className="services_section layout_padding">
         <div className="container">
            <div className="services_taital">Our Services</div>
            <p className="services_text">It is a long established fact that a reader will be distracted by the readable</p>
         </div>
         <div className="services_section_2 layout_padding">
            <div className="container-fluid padding_0">
               <div className="box_main">
                  <div className="box_left">
                     <div className="box_left_main">
                        <div className="box_left_one">
                           <div className="image_1"><img src="images/img-1.png" alt="img" /></div>
                        </div>
                        <div className="box_right_one">
                           <div className="icon_1"><img src="images/icon-1.png" alt="img" /><span className="padding_left_10">architecture  Design</span></div>
                           <p className="long_text">It is a long established fact that a reader will be distracted by the </p>
                        </div>
                     </div>
                     <div className="see_bt"><a href="#">See More</a></div>
                  </div>
                  <div className="box_middle">
                     <div className="box_left_main">
                        <div className="padding_10">
                           <div className="icon_1"><img src="images/icon-2.png" alt="img" /><span className="padding_left_10">architecture  Design</span></div>
                           <p className="long_text">It is a long established fact that a reader will be distracted by the </p>
                        </div>
                     </div>
                     <div className="see_bt"><a href="#">See More</a></div>
                  </div>
                  <div className="box_right">
                     <div className="box_left_main">
                        <div className="box_right_one">
                           <div className="icon_1"><img src="images/icon-3.png" alt="img" /><span className="padding_left_10">architecture  Design</span></div>
                           <p className="long_text">It is a long established fact that a reader will be distracted by the </p>
                        </div>
                        <div className="box_left_one">
                           <div className="image_2"><img src="images/img-2.png" alt="img" /></div>
                        </div>
                     </div>
                     <div className="see_bt"><a href="#">See More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      </div>
  
);

export default Service;
