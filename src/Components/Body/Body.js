import React, { useState } from 'react';
import Profiles from '../Profiles/Profiles';
import users from '../../Data/Data';
import Summery from '../Summery/Summery';

const Body = () => {
    const first10 = users.slice(0,12);
    const [employees, setEmployees] = useState(first10);
    const [people, setPeople] = useState([]);
    const handleAddPeople = (man) => {
        const newPeople = [...people, man];
        setPeople(newPeople);
    }
    return (
        <div>
            <Summery people={people} ></Summery>
            <div className='container'>
                <div className="row">
                    {employees.map(employee => <Profiles handleAddPeople={handleAddPeople} employee={employee} ></Profiles>)}
                </div>            
            </div>
        </div>
    );
};

export default Body;