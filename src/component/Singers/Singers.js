import React, { useEffect, useState } from 'react';
import DisplaySinger from '../DisplaySinger/DisplaySinger';
import Salary from '../Salary/Salary';
import './Singers.css';

const Singers = () => {
    const [singers, setSinger] = useState([])
    const [salarys, setSalarys] = useState([])
    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSinger(data))
    }, [])

    const addSalary = (product) => {
        const newSalary = [...salarys, product];
        setSalarys(newSalary);
    }
    // console.log(singers)
    return (
        <div className='singer'>
            <div className='row'>
                {
                    singers.map(singer => <DisplaySinger key={singer.id} singer={singer} addSalary={addSalary}></DisplaySinger>)
                }
            </div>
            <div>
                <Salary salarys={salarys}></Salary>
            </div>
        </div>
    );
};

export default Singers;