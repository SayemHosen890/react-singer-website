import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import './DisplaySinger.css';


const DisplaySinger = (props) => {
    // console.log('clicked');
    const { name, country, job, image, salary } = props.singer;
    return (
        <div className='display-singer'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <h4>Country :{country}</h4>
                <p>Job :{job}</p>
                <p>Salary :{salary}</p>
                <button onClick={() => props.addSalary(props.singer)}><FontAwesomeIcon icon={faGuitar} /> Click Here</button>
            </div>
            {/* <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src={image} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button onClick={() => props.addSalary(props.singer)}>Click Here</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default DisplaySinger;