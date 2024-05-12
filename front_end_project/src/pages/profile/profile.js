import React, { useState } from 'react';
import Screen from '../../components/app/Screen';
import { CgProfile } from "react-icons/cg";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Profile (props) {
    const initial_object = {
        id: 1,
        image: 'https://images.unsplash.com/photo-1534056819131-b3791120051c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        role: 'Content Creator',
        phone: '0401234567',
        github: 'github.com/johndoe',
        project: 'Chameleon Website',
        posts: [
            { id: 1, image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'EV Tools', subtitle: 'Welcome to EV Tools' },
            { id: 2, image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Chameleon Website', subtitle: 'Welcome to Chameleon Website' },
            { id: 3, image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Chameleon Companies', subtitle: 'Welcome to Chameleon Company' },
            { id: 4, image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Company Onboarding', subtitle: 'Welcome to project onboarding' },
            { id: 5, image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Project Onbaording', subtitle: 'Understanding all our projects' },
            { id: 6, image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Chameleon Leadership', subtitle: 'Know your leadership team' }
        ]
    };


    const [user, setUser] = useState(initial_object);

    return (
        <>
            <Screen>
                <div className='container-fluid'>
                    <div className='container my-auto p-5 bg-light text-dark'>

                        <div className='row'>

                            {/* Profile */}
                            <div className='col-12 col-lg-4 col-xl-3 text-center p-3 pt-5'>
                                {/* Profile Image */}
                                <div className='row mt-auto'>
                                    <div className='col'>
                                        {user.image ? <img className="mx-auto rounded-circle" src={user.image} style={{ width: '200px', height: '200px' }} maxWidth={100} maxHeight={100} /> : <CgProfile className='mx-auto my-5' size={100} height={50} width={50} />}
                                    </div>
                                </div>

                                {/* Full name */}
                                <div className='row p-3'>
                                    <span className='display-5'><span>{user.firstname}</span> <span>{user.lastname}</span></span>
                                </div>

                                {/* Project and Role */}
                                <div className='row'>
                                    <span className='display-8 text-secondary'>
                                        {user.role}
                                    </span>
                                    <span className='display-8 text-secondary'>
                                        {user.project}
                                    </span>

                                </div>

                                {/* Social Icons */}
                                <div className='row mt-3 p-2 justify-content-center'>
                                    <div className='col-auto '>
                                        <a className='text-decoration-none text-dark' href={`mailto:${user.email}`}> <MdEmail size={30} /> </a>
                                    </div>
                                    <div className='col-auto '>
                                        <a className='text-decoration-none text-dark' href={`tel:${user.phone}`}> <MdLocalPhone size={30} /> </a>
                                    </div>
                                    <div className='col-auto '>
                                        <a href={user.githubLink} target="_blank" rel="noopener noreferrer"> <FaGithub size={30} /> </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='col-12 col-lg-8 col-xl-9'>
                                <div className='row'>
                                    {user.posts.map(({ id, image, title, subtitle }) => (

                                        // Content Card
                                        <div className='col-12 col-md-6 col-lg-4 p-2' key={id}>
                                            <div className='card h-100'>
                                                <img src={image} className='card-img-top' alt='post-image' />
                                                <div className='card-body'>
                                                    <h5 className='card-title'>{title}</h5>
                                                    <p className='card-text'>{subtitle}.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Screen>
        </>
    );
}

export default Profile;