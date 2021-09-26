import React from 'react';
import './Salary.css';

const Salary = (props) => {
    const { salarys } = props;
    let total = 0;
    for (const product of salarys) {
        total = total + product.salary;
    }
    return (
        <div className='salary-detail'>
            <h4>Melody List</h4>
            <p>Artist Added :{salarys.length}</p>
            <p>Artist Cost:${total}</p>
            {
                salarys.map(singerName => <li className='singerName'>{singerName.name}</li>)
            }
        </div>
    );
};

export default Salary;