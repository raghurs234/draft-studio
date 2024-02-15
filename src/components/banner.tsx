/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';


interface ComponentsBannerProps {}

const Banner: FC<ComponentsBannerProps> = () => (
  <div>

<div className="banner_section layout_padding">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="banner_taital">We Make Your Dream Home</h1>
                     <div className="btn_main">
                        <div className="more_bt"><a href="#">Contact us</a></div>
                       
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="banner_taital">We Make Your Dream Home</h1>
                     <div className="btn_main">
                        <div className="more_bt"><a href="#">Contact us</a></div>
                       
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="banner_taital">We Make Your Dream Home</h1>
                     <div className="btn_main">
                        <div className="more_bt"><a href="#">Contact us</a></div>
                  
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className="fa fa-left"><img src="images/left-icon.png" alt="previous" /></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className="fa fa-right"><img src="images/right-icon.png" alt="next" /></i>
            </a>
         </div>
      </div>

      </div>
  
);

export default Banner;
