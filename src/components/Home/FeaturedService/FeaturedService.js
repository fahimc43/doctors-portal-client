import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="my-5 pb-md-5">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-5 mb-4">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center"> 
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, nihil cum deleniti autem dolorum, tempore deserunt ex nostrum quo facere aperiam sunt vel. Provident nam voluptate ab suscipit sunt ex dolorem cum incidunt consequatur! Quas sit magni perspiciatis suscipit debitis, commodi neque quae possimus qui laudantium, rerum repudiandae delectus saepe reprehenderit officia consequatur et similique voluptas dolor molestiae. Impedit voluptate fugit quos, corporis, iste perspiciatis natus eum omnis quaerat architecto corrupti, laudantium velit excepturi consequatur adipisci dignissimos nulla eaque reiciendis!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;