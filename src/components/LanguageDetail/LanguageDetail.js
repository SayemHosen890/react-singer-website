import React from 'react';
import './LanguageDetail.css'

const LanguageDetail = (props) => {
    const { name, details, image } = props.detail;
    return (
        // <div>
        //     <img src={image} alt="" />
        //     <h2>{name}</h2>
        //     <p>Details :{details}</p>
        // </div>
        <div>
            <div className="col p-4">
                <div className="card p-2">
                    <img src={image} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{details}</p>
                    </div>
                    <div>
                        <button className="button px-2 rounded text-white ">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageDetail;