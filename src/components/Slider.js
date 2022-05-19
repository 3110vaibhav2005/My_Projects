import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div className="w-auto p-3 my=4" style={{width:"19rem"}}>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://i.postimg.cc/cJ8T6b86/20220509-110826.jpg" className="d-block mw-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.postimg.cc/C18FPSnY/20220509-111136.jpg" className="d-block mw-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.postimg.cc/L8VgDBKv/20220509-111817.jpg" className="d-block mw-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>        
            </div>
        )
    }
}

export default Slider
