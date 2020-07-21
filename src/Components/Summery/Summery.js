import React from 'react';

const Summery = (props) => {
    const people = props.people;
    const totalSalary = people.reduce((total, salary) => total + salary.salary, 0);
    return (
        <div className='navBar' >
            <div className='container'>
                <ul className='d-flex justify-content-between headerList' >
                    <li className='d-inline'>Hired Employee: {people.length}</li>
                    <li className='d-inline'>You Need Annual Budget Of Salary: {totalSalary}</li>
                </ul>
            </div>
        </div>
    );
};

export default Summery;