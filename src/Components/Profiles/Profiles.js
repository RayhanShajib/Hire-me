import React from 'react';
import './Profiles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUserTie, faMoneyCheckAlt, faPlus } from '@fortawesome/free-solid-svg-icons';


const Profiles = (props) => {
    const { name, phone, address, salary, email, img, profession } = props.employee;
    const Phone = <FontAwesomeIcon icon={faPhone} />;
    const Email = <FontAwesomeIcon icon={faEnvelope} />;
    const Address = <FontAwesomeIcon icon={faMapMarkerAlt} />;
    const Profession = <FontAwesomeIcon icon={faUserTie} />;
    const Salary = <FontAwesomeIcon icon={faMoneyCheckAlt} />;
    const plus = <FontAwesomeIcon icon={faPlus} />;
    return (
        <div className="col-md-4 gapTop">
            <div className="card text-center borderNone shadow cardHover">
                <img src={img} class="card-img-top rounded-circle w-50 gapTop" alt="..." />
                <div className="card-body">
                    <h5 className="card-title brandColor">{name}</h5>
                    <ul className='profileList' >
                        <li><i className='brandColor' >{Phone}</i> {phone}</li>
                        <li><i className='brandColor' >{Email}</i> {email}</li>
                        <li><i className='brandColor' >{Address}</i> {address}</li>
                        <li><i className='brandColor' >{Profession}</i> {profession}</li>
                        <li><i className='brandColor' >{Salary}</i> <b>${salary}</b></li>
                    </ul>
                </div>
                <div className="card-footer borderNone bg-white buttonContianer">
                    <button onClick={()=> props.handleAddPeople(props.employee)} className='w-100 h-100 hireButton' >{plus} Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Profiles;