import React, { useState } from 'react';
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function User ({ user, handleUser }) {

    const [data, setData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleUser(data);
    };

    return (
        <>
            <form className='p-5'>

                {/* Personal Details */}
                <h1>User Details</h1>
                <div className="row mt-3">
                    <div className="form-group col-12 col-lg-6">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" name="firstname" placeholder={user.firstname || 'First Name'} onChange={handleChange} />
                    </div>
                    <div className="form-group col-12 col-lg-6 mt-3 mt-lg-0">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder={user.lastname || 'Last Name'} onChange={handleChange} />
                    </div>
                </div>

                {/* Project Details */}
                <div className="row mt-3">
                    <div className="form-group col-12 col-lg-6">
                        <label htmlFor="project">Project</label>
                        <input type="text" className="form-control" id="project" name="project" placeholder={user.project || 'Project Name'} onChange={handleChange} />
                    </div>
                    <div className="form-group col-12 col-lg-6 mt-3 mt-lg-0">
                        <label htmlFor="role">Role</label>
                        <input type="text" className="form-control" id="role" name="role" placeholder={user.role || 'Role'} onChange={handleChange} />
                    </div>
                </div>

                {/* Contact Details */}
                <div className="input-group mt-3">
                    <span className="input-group-text"> <MdEmail size={20} /> </span>
                    <input id="email" name="email" type="text" className="form-control" aria-label="email-address" placeholder={user.email || 'Email Address'} onChange={handleChange} />
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text"> <MdLocalPhone size={20} /> </span>
                    <input id="phone" name="phone" type="tel" className="form-control" aria-label="phone" placeholder={user.phone || 'Phone Number'} onChange={handleChange} />
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text"> <FaGithub size={20} /> </span>
                    <input id="github" name="github" type="url" className="form-control" aria-label="github" placeholder={user.github || 'Github Account'} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-success mt-3" onClick={onSubmit}>Submit</button>
            </form>
        </>
    );
}

export default User;