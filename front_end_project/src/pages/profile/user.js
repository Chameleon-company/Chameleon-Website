import React, { useState, useEffect } from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

function User({ user, handleUser }) {
  const [data, setData] = useState(user);

  useEffect(() => {
    setData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleUser(data);
    try {
      const response = await fetch('http://localhost:3002/auth/updateUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
    } catch (e) {
      console.log('Something went wrong', e);
    }
  };

  return (
    <>
      <form className="p-5">
        {/* Personal Details */}
        <h1>User Details</h1>
        <div className="row mt-3">
          <div className="form-group col-12 col-lg-6">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              value={data?.firstname || ''}
            />
          </div>
          <div className="form-group col-12 col-lg-6 mt-3 mt-lg-0">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              value={data?.lastname || ''}
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="row mt-3">
          <div className="form-group col-12 col-lg-6">
            <label htmlFor="project">Project</label>
            <input
              type="text"
              className="form-control"
              id="project"
              name="project"
              placeholder="Project Name"
              onChange={handleChange}
              value={data?.project || ''}
            />
          </div>
          <div className="form-group col-12 col-lg-6 mt-3 mt-lg-0">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="form-control"
              id="role"
              name="role"
              placeholder="Role"
              onChange={handleChange}
              value={data?.role || ''}
            />
          </div>
        </div>

        {/* Contact Details */}
        <div className="input-group mt-3">
          <span className="input-group-text">
            <MdEmail size={20} />
          </span>
          <input
            id="email"
            name="email"
            type="text"
            className="form-control"
            aria-label="email-address"
            placeholder="Email Address"
            onChange={handleChange}
            value={data?.email || ''}
          />
        </div>
        <div className="input-group mt-3">
          <span className="input-group-text">
            <MdLocalPhone size={20} />
          </span>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-control"
            aria-label="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            value={data?.phone || ''}
          />
        </div>
        <div className="input-group mt-3">
          <span className="input-group-text">
            <FaGithub size={20} />
          </span>
          <input
            id="github"
            name="github"
            type="url"
            className="form-control"
            aria-label="github"
            placeholder="Github Account"
            onChange={handleChange}
            value={data?.github || ''}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success mt-3"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default User;
