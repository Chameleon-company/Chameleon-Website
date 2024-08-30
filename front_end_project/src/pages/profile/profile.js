import React, { useState } from 'react';
import Screen from '../../components/app/Screen';
import { CgProfile } from "react-icons/cg";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Posts from './posts';
import Password from './password';
import User from './user';
import { Button } from 'react-bootstrap';
import { signOut } from '../../routes/user';

function Profile (props) {
    const initial_object = {
        id: 1,
        image: 'https://images.unsplash.com/photo-1534056819131-b3791120051c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // image: '',
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        role: 'Content Creator',
        phone: '0401234567',
        github: 'github.com/johndoe',
        project: 'Chameleon Website',
        posts: [
            { id: 1, image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'EV Tools', subtitle: 'Welcome to EV Tools', content: `<h1>Welcome to EV Tools: Your Ultimate Resource for Electric Vehicle Enthusiasts</h1> <img src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="EV Tools"> <p>Electric vehicles (EVs) are revolutionizing the way we think about transportation, offering a cleaner, more sustainable alternative to traditional gasoline-powered cars. But with this new technology comes a need for the right tools and resources to make the transition smooth and successful. That's where <strong>EV Tools</strong> comes in.</p> <p>Whether you're a seasoned EV owner, an aspiring buyer, or simply curious about the electric revolution, EV Tools is your go-to destination for everything related to electric vehicles. Our platform is designed to equip you with the knowledge, tools, and insights you need to navigate the EV landscape with confidence.</p> <h2>What You'll Find at EV Tools</h2> <p>At EV Tools, we're dedicated to providing you with a comprehensive suite of resources:</p> <ul> <li><strong>In-Depth Guides</strong>: Explore detailed guides on everything from choosing the right EV for your needs to understanding the intricacies of charging infrastructure.</li> <li><strong>Latest News and Trends</strong>: Stay up-to-date with the latest developments in the EV world, including new models, technological advancements, and policy changes.</li> <li><strong>Comparison Tools</strong>: Use our interactive tools to compare different EV models, charging options, and more, helping you make informed decisions.</li> <li><strong>Maintenance Tips</strong>: Learn how to take care of your EV, from battery management to routine checks, ensuring your vehicle runs smoothly for years to come.</li> <li><strong>Community Insights</strong>: Join our community of EV enthusiasts, where you can share experiences, ask questions, and learn from others who are passionate about electric vehicles.</li> </ul> <h2>Why Choose EV Tools?</h2> <p>The shift to electric vehicles is more than just a trend—it's a movement towards a more sustainable future. At EV Tools, we're committed to supporting this movement by providing you with reliable, up-to-date information and practical tools. Our goal is to empower you to embrace the future of transportation with knowledge and confidence.</p> <h2>Get Started Today</h2> <p>Ready to dive into the world of electric vehicles? Explore our site, check out our tools, and join the growing community of EV enthusiasts. With EV Tools by your side, you're well-equipped to make the most of your electric journey.</p> <p>Welcome to EV Tools—your ultimate resource for all things electric vehicles.</p>` },
            { id: 2, image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Chameleon Website', subtitle: 'Welcome to Chameleon Website', content: `<h1>Welcome to Chameleon Website: Your Hub for Dynamic Web Solutions</h1> <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chameleon Website"> <p>In today’s fast-paced digital world, having a versatile and adaptive web presence is essential. Welcome to <strong>Chameleon Website</strong>, where we specialize in creating dynamic and flexible web solutions tailored to your needs.</p> <p>At Chameleon Website, we understand that every business and individual has unique requirements when it comes to their online presence. That’s why we offer a range of customizable web solutions designed to grow with you and adapt to your evolving needs.</p> <h2>Our Offerings</h2> <p>Explore the diverse range of services we provide:</p> <ul> <li><strong>Custom Website Design</strong>: We create visually stunning and user-friendly websites that align with your brand and business goals.</li> <li><strong>Responsive Design</strong>: Ensure your website looks great and functions seamlessly on all devices, from desktops to mobile phones.</li> <li><strong>Content Management Systems</strong>: Manage your website content effortlessly with our intuitive CMS solutions, making updates and changes a breeze.</li> <li><strong>SEO Optimization</strong>: Boost your online visibility with our SEO services, designed to help you rank higher in search engine results.</li> <li><strong>Ongoing Support and Maintenance</strong>: Receive continuous support and maintenance to keep your website running smoothly and efficiently.</li> </ul> <h2>Why Choose Chameleon Website?</h2> <p>Our commitment to quality and customer satisfaction sets us apart. We take pride in delivering web solutions that not only meet but exceed our clients’ expectations. With Chameleon Website, you can expect:</p> <ul> <li><strong>Personalized Service</strong>: We work closely with you to understand your vision and deliver a website that truly represents your brand.</li> <li><strong>Cutting-Edge Technology</strong>: Stay ahead of the curve with our use of the latest web technologies and design trends.</li> <li><strong>Timely Delivery</strong>: We ensure your project is completed on time and within budget, with no surprises.</li> </ul> <h2>Get Started Today</h2> <p>Ready to transform your online presence? Contact us today to discuss your project and discover how Chameleon Website can help you achieve your web goals. We look forward to working with you to create a website that adapts to your needs and stands out in the digital landscape.</p> <p>Welcome to Chameleon Website—where your web vision becomes a reality.</p>` },
            { id: 3, image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Chameleon Companies', subtitle: 'Welcome to Chameleon Company', content: `<h1>Welcome to Chameleon Companies: Embracing Innovation in Business</h1> <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chameleon Companies"> <p>Welcome to <strong>Chameleon Companies</strong>, where innovation and adaptability are at the heart of everything we do. In a rapidly changing business landscape, the ability to evolve and stay ahead of trends is crucial. At Chameleon Companies, we pride ourselves on our dynamic approach and our commitment to leading the way in industry advancements.</p> <p>Our company specializes in providing cutting-edge solutions and services that are tailored to meet the ever-evolving needs of our clients. Whether you're looking for strategic consulting, technology integration, or innovative business solutions, Chameleon Companies has the expertise and experience to help you achieve your goals.</p> <h2>Our Core Services</h2> <p>At Chameleon Companies, we offer a diverse range of services designed to drive growth and success for businesses across various sectors:</p> <ul> <li><strong>Strategic Consulting</strong>: Gain insights and guidance from our expert consultants to navigate complex business challenges and seize new opportunities.</li> <li><strong>Technology Solutions</strong>: Leverage our expertise in technology to implement solutions that enhance efficiency, streamline operations, and drive innovation.</li> <li><strong>Business Development</strong>: Explore new avenues for growth with our tailored business development strategies and market expansion plans.</li> <li><strong>Innovation Management</strong>: Foster a culture of innovation within your organization with our specialized management techniques and creative solutions.</li> <li><strong>Client Success</strong>: Our dedicated team ensures that your projects are executed seamlessly, delivering exceptional results and achieving your desired outcomes.</li> </ul> <h2>Why Choose Chameleon Companies?</h2> <p>Our commitment to excellence, combined with our adaptive approach, sets us apart from the competition. We understand that the business world is constantly evolving, and we are dedicated to staying at the forefront of industry trends to provide you with the most effective solutions.</p> <h2>Connect With Us</h2> <p>Ready to transform your business and embrace innovation? Contact us today to learn more about how Chameleon Companies can help you achieve your objectives and thrive in today's dynamic market.</p> <p>Welcome to Chameleon Companies—where innovation meets adaptability.</p>` },
            { id: 4, image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Company Onboarding', subtitle: 'Welcome to project onboarding', content: `<h1>Welcome to Project Onboarding: Getting Started with Our Company</h1> <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Company Onboarding"> <p>Welcome to our company! We’re excited to have you join our team and be part of our journey towards success. Effective onboarding is crucial for a smooth transition into your new role, and we're here to guide you through every step of the process.</p> <p>Our onboarding program is designed to help you acclimate quickly and effectively. Here’s what you can expect:</p> <h2>What to Expect During Onboarding</h2> <ul> <li><strong>Introduction to Company Culture</strong>: Get to know our company's values, mission, and the culture that drives our success. Understanding our culture is key to integrating seamlessly into our team.</li> <li><strong>Overview of Team Structure</strong>: Meet your new colleagues and learn about the team structure. We’ll introduce you to your immediate team members and key contacts across the company.</li> <li><strong>Training and Development</strong>: Participate in training sessions tailored to your role. These sessions will equip you with the knowledge and skills you need to excel in your position.</li> <li><strong>Access to Resources</strong>: Gain access to the tools and resources you'll need. This includes company systems, software, and any other materials relevant to your job.</li> <li><strong>Goal Setting and Expectations</strong>: Set clear goals with your manager and understand the expectations for your role. This helps in aligning your objectives with the company’s goals.</li> </ul> <h2>Tips for a Successful Onboarding Experience</h2> <p>To make the most of your onboarding experience, we recommend the following:</p> <ul> <li><strong>Be Proactive</strong>: Take initiative in learning about your role and the company. Don’t hesitate to ask questions and seek out information.</li> <li><strong>Engage with Your Team</strong>: Build relationships with your new colleagues. Engage in team activities and participate in company events to foster connections.</li> <li><strong>Embrace Feedback</strong>: Be open to feedback and use it to improve your performance. Feedback is a valuable tool for growth and development.</li> <li><strong>Utilize Resources</strong>: Make full use of the resources provided during onboarding. They are designed to help you succeed and integrate smoothly.</li> </ul> <h2>We’re Here to Support You</h2> <p>Our goal is to ensure that your transition into our company is as smooth and enjoyable as possible. If you have any questions or need assistance at any point, please don’t hesitate to reach out to your onboarding coordinator or manager.</p> <p>Once again, welcome to the team! We’re thrilled to have you with us and look forward to achieving great things together.</p>` },
            { id: 5, image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Project Onbaording', subtitle: 'Understanding all our projects', content: `<h1>Understanding All Our Projects</h1> <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project Onboarding"> <p>Welcome to our project onboarding guide, where we delve into the details of each project we're currently working on. Understanding the scope, goals, and processes of our projects is essential for successful collaboration and project management.</p> <p>In this guide, you'll find:</p> <ul> <li><strong>Project Overviews</strong>: Brief descriptions of each project, including objectives, key deliverables, and timelines.</li> <li><strong>Roles and Responsibilities</strong>: Information on team roles, responsibilities, and how each member contributes to the project’s success.</li> <li><strong>Project Milestones</strong>: Key milestones and deadlines to keep track of progress and ensure timely completion of project phases.</li> <li><strong>Resources and Tools</strong>: Essential resources and tools required for project execution, including software, documentation, and communication channels.</li> <li><strong>Best Practices</strong>: Tips and best practices for effective project management, from planning and execution to monitoring and closing.</li> </ul> <p>Understanding these aspects will help you integrate seamlessly into our projects and contribute effectively. We encourage you to explore the details of each project and familiarize yourself with the associated processes.</p> <p>Welcome aboard, and we look forward to achieving great results together!</p>` },
            { id: 6, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Chameleon Leadership', subtitle: 'Know your leadership team', content: `<h1>Chameleon Leadership: Know Your Leadership Team</h1> <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chameleon Leadership"> <p>Leadership is more than just a role; it’s a dynamic and evolving skill set that adapts to the needs of the team and the organization. At Chameleon Leadership, we believe that understanding and mastering the art of leadership is key to driving success and fostering a positive work environment.</p> <p>Our leadership philosophy is rooted in flexibility, adaptability, and proactive engagement. A great leader recognizes the unique strengths and challenges of their team members, and adjusts their leadership style accordingly to inspire and motivate effectively.</p> <h2>Our Leadership Principles</h2> <ul> <li><strong>Adaptability</strong>: Effective leaders are chameleons in their approach, adapting their strategies and communication styles to fit the context and needs of their team.</li> <li><strong>Empowerment</strong>: We believe in empowering team members by recognizing their strengths, providing support, and encouraging professional growth.</li> <li><strong>Transparency</strong>: Open and honest communication is crucial for building trust and ensuring that everyone is aligned with the team's goals and values.</li> <li><strong>Collaboration</strong>: Successful leadership involves fostering a collaborative environment where ideas are shared, feedback is valued, and collective problem-solving is encouraged.</li> <li><strong>Continuous Improvement</strong>: Great leaders are committed to their own development as well as the development of their team, constantly seeking opportunities for improvement and innovation.</li> </ul> <h2>Meet Our Leadership Team</h2> <p>Our leadership team embodies these principles, bringing a wealth of experience and a diverse set of skills to the table. They are dedicated to guiding our organization through its journey, ensuring that we not only meet our objectives but also exceed expectations.</p> <p>Get to know our leaders, learn about their backgrounds, and understand their vision for the future of our organization. Their expertise and commitment are integral to our success and growth.</p> <h2>Join Us on Our Leadership Journey</h2> <p>Whether you’re an aspiring leader or looking to understand how effective leadership can transform your team, Chameleon Leadership offers insights, resources, and guidance to help you navigate your leadership journey. Discover more about our approach, connect with our team, and see how we can work together to achieve exceptional results.</p> <p>Welcome to Chameleon Leadership—where great leadership meets great results.</p>` }
        ]
    };

    const [user, setUser] = useState(initial_object);
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tabId) => { setActiveTab(tabId); };
    const handleUser = (user) => { setUser(prevUser => ({ ...prevUser, ...user })); };
    const handleLogout = () => { signOut(); };

    return (
        <>
            <Screen>
                <div className='container mt-xl-auto my-auto p-5 bg-light text-dark' style={{ borderRadius: 25 }}>
                    <div className='row'>

                        {/* Profile */}
                        <div className='col-12 col-lg-4 col-xl-3 text-center p-3 pt-4 pt-xl-5'>

                            {/* Profile Image */}
                            <div className='row mt-auto'>
                                <div className='col'>
                                    {user.image ? <img className="mx-auto rounded-circle" src={user.image} alt='profile' style={{ width: '200px', height: '200px' }} /> : <CgProfile className='mx-auto my-5' size={100} height={100} width={100} />}
                                </div>
                            </div>

                            {/* Full name */}
                            <div className='row p-3'>
                                <span className='display-5'><span>{user.firstname}</span> <span>{user.lastname}</span></span>
                            </div>

                            {/* Project and Role */}
                            <div className='row'>
                                <span className='display-8 text-secondary'> {user.role} </span>
                                <span className='display-8 text-secondary'> {user.project} </span>
                            </div>

                            {/* Social Icons */}
                            <div className='row mt-3 p-2 justify-content-center'>
                                <div className='col-auto'>
                                    <a className='text-decoration-none text-dark' href={`mailto:${user.email}`}> <MdEmail size={30} /> </a>
                                </div>
                                <div className='col-auto'>
                                    <a className='text-decoration-none text-dark' href={`tel:${user.phone}`}> <MdLocalPhone size={30} /> </a>
                                </div>
                                <div className='col-auto'>
                                    <a className='text-decoration-none text-dark' href={user.githubLink} target="_blank" rel="noreferrer"> <FaGithub size={30} /> </a>
                                </div>
                            </div>

                            <div className='row mt-3 p-2 justify-content-center'>
                                <div className='col-auto'>
                                    <Button className='mt-1' variant='outline-danger' onClick={handleLogout}>Logout</Button>
                                </div>
                            </div>
                        </div>


                        {/* Content */}
                        <div className='col-12 col-lg-8 col-xl-9'>

                            {/* Navigation */}
                            <div className='row'>
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className={`nav-link text-muted disabled ${activeTab === 'dashboard' ? 'active' : ''}`} id="nav-dashboard-tab" data-toggle="tab" data-target="#nav-dashboard" type="button" role="tab" aria-controls="nav-dashboard" aria-selected="false" onClick={() => handleTabClick('dashboard')}>Dashboard</button>
                                        <button className={`nav-link text-success ${activeTab === 'profile' ? 'active' : ''}`} id="nav-profile-tab" data-toggle="tab" data-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true" onClick={() => handleTabClick('profile')}>Profile</button>
                                        <button className={`nav-link text-success ${activeTab === 'password' ? 'active' : ''}`} id="nav-profile-tab" data-toggle="tab" data-target="#nav-Password" type="button" role="tab" aria-controls="nav-Password" aria-selected="false" onClick={() => handleTabClick('password')}>Password</button>
                                        <button className={`nav-link text-success ${activeTab === 'posts' ? 'active' : ''}`} id="nav-posts-tab" data-toggle="tab" data-target="#nav-posts" type="button" role="tab" aria-controls="nav-posts" aria-selected="false" onClick={() => handleTabClick('posts')}>Posts</button>
                                    </div>
                                </nav>

                                <div className="tab-content" id="nav-tabContent">
                                    <div className={`tab-pane fade ${activeTab === 'dashboard' ? 'show active' : ''}`} id="nav-dashboard" role="tabpanel" aria-labelledby="nav-dashboard-tab">Dashboard</div>

                                    <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <User user={user} handleUser={handleUser} />
                                    </div>

                                    <div className={`tab-pane fade ${activeTab === 'password' ? 'show active' : ''}`} id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                                        <Password />
                                    </div>

                                    <div className={`tab-pane fade ${activeTab === 'posts' ? 'show active' : ''}`} id="nav-posts" role="tabpanel" aria-labelledby="nav-posts-tab">
                                        <Posts posts={user.posts} />
                                    </div>
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