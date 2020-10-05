import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import zFold from '../assets/Samsung Galaxy Z Fold 2.png'
import note20 from '../assets/Samsung Galaxy Note 20:Ultra.png'
import s20FE from '../assets/Samsung Galaxy S20 FE.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Home.css'

export class BootstrapCarousel extends Component {
        render() {

                return (
                         <div className='container-fluid' >
                         <Carousel interval={10000}>
                         <Carousel.Item>
                         <div className="mySlides fade">
                           <a href="https://www.samsung.com/uk/smartphones/galaxy-z-fold2/buy/">
                             <img id="Z-Fold-2" alt='Samsung Galaxy Z Fold 2 5G' src={zFold} />
                           </a>
                         </div>
                                 </Carousel.Item  >
                                 <Carousel.Item>
                                 <div className="mySlides fade">
                                   <a href="https://www.samsung.com/uk/smartphones/galaxy-note20/buy/">
                                     <img id="Note-20" alt='Samsung Galaxy Note 20 | Note 20 Ultra 5G' src={note20} />
                                   </a>
                                 </div>
                                         </Carousel.Item>
                                       <Carousel.Item>
                                       <div className="mySlides fade">
                                         <a href="https://www.samsung.com/uk/smartphones/galaxy-s20/buy/">
                                           <img id="S20-FE" alt='Samsung Galaxy S20 FE 5G' src={s20FE} />
                                         </a>
                                       </div>
                                         </Carousel.Item>
                                        </Carousel>
                                </div>
                )
        }
}


export default BootstrapCarousel
