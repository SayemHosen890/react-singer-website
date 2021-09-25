
import React from 'react';

const Salary = (props) => {
    const { salarys } = props;
    let total = 0;
    for (const product of salarys) {
        total = total + product.salary;
    }
    return (
        <div>
            <h2>this is salary :{salarys.length}</h2>
            <p>total:{total}</p>
            {
                salarys.map(singerName => <li>key: {singerName.id} Name :{singerName.name}</li>)
            }
        </div>
    );
};

export default Salary;