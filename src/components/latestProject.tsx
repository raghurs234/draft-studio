/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';


interface ComponentsLatestProjectProps {}

const LatestProject: FC<ComponentsLatestProjectProps> = () => (
  <div>

<div className="project_section layout_padding">
         <div className="container">
            <h1 className="project_taital">Latest Projects</h1>
            <div className="project_menu">
               <ul>
                  <li className="active"><a href="#">All</a></li>
                  <li><a href="#">Building</a></li>
                  <li><a href="#">Commercial</a></li>
                  <li><a href="#">Interior Design</a></li>
                  <li><a href="#">Residential</a></li>
               </ul>
            </div>
         </div>
         <div className="project_section_2 layout_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-sm-3">
                     <div><img src="images/img-3.png" className="image_3" alt="img" /></div>
                  </div>
                  <div className="col-sm-3">
                     <div><img src="images/img-4.png" className="image_3" alt="img" /></div>
                  </div>
                  <div className="col-sm-3">
                     <div><img src="images/img-5.png" className="image_3" alt="img" /></div>
                  </div>
                  <div className="col-sm-3">
                     <div><img src="images/img-6.png" className="image_3" alt="img" /></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      </div>
  
);

export default LatestProject;
