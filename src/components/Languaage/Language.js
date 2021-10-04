import React from 'react';
import './Language.css';

const Language = (props) => {

    const { name, intstructor, image, price } = props.language;

    return (
        <div>
            <div>
                <div className="col p-4">
                    <div className="card-container p-2 shadow rounded">
                        <img src={image} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Instruction: {intstructor}</p>
                            <p>Price :${price}</p>
                            <button className='button rounded px-4'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Language;