import React from 'react';

const Testimonial = (props) => {
    const {quote, name, from, img} = props.testimonial;
    return (
        <div className="col-md-4 card shadow border">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex align-item-center">
                <img src={img} alt="" className="mx-3" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p>{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;