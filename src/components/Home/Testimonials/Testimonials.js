import React from 'react';
import winson from '../../../images/winson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Winson Harry',
        from: 'California',
        img: winson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5" id="review">
            <div className="container">
                <div>
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row mt-5">
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;