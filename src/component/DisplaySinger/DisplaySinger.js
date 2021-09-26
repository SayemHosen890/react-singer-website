import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import './DisplaySinger.css';


const DisplaySinger = (props) => {
    const { name, country, job, image, salary } = props.singer;
    return (

        <div className='display-singer col-lg-4 mb-3'>
            <div className='singer-all'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='details'>
                    <h4>{name}</h4>
                    <p>Country :{country}</p>
                    <p>Job :{job}</p>
                    <p>Salary :{salary}</p>
                    <button className='button' onClick={() => props.addSalary(props.singer)}><FontAwesomeIcon icon={faGuitar} /> Add Artist</button>
                </div>
            </div>
        </div>
    );
};

export default DisplaySinger;