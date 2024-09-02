import React, { useEffect, useState } from 'react';
import Screen from '../../components/app/Screen';
import { CgProfile } from 'react-icons/cg';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import Posts from './posts';
import Password from './password';
import User from './user';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import getUserProfileApi from '../../api/loginapi';

function Profile (props) {
  const [user, setUser] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // State to track loading status

  const fetchData = async () => {
    try {
      const data = await getUserProfileApi();
      console.log(JSON.stringify(data), 'va');
      setUser(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const posts = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'EV Tools',
      subtitle: 'Welcome to EV Tools',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Chameleon Website',
      subtitle: 'Welcome to Chameleon Website',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Chameleon Companies',
      subtitle: 'Welcome to Chameleon Company',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Company Onboarding',
      subtitle: 'Welcome to project onboarding',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Project Onbaording',
      subtitle: 'Understanding all our projects',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Chameleon Leadership',
      subtitle: 'Know your leadership team',
    },
  ];

  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleUser = (user) => {
    setUser((prevUser) => ({ ...prevUser, ...user }));
  };

  return (
    <>
      <Screen>
        <div
          className="container mt-xl-5 my-auto p-5 bg-light text-dark"
          style={{ borderRadius: 25 }}
        >
          <div className="row">
            {/* Profile */}
            <div className="col-12 col-lg-4 col-xl-3 text-center p-3 pt-4 pt-xl-5">
              {/* Profile Image */}
              <div className="row mt-auto">
                <div className="col">
                  {user?.image ? (
                    <img
                      className="mx-auto rounded-circle"
                      src={user?.image}
                      style={{ width: '200px', height: '200px' }}
                    />
                  ) : (
                    <CgProfile
                      className="mx-auto my-5"
                      size={100}
                      height={100}
                      width={100}
                    />
                  )}
                </div>
              </div>

              {/* Full name */}
              <div className="row p-3">
                <span className="display-5">
                  <span>{user?.firstname}</span> <span>{user?.lastname}</span>
                </span>
              </div>

              {/* Project and Role */}
              <div className="row">
                <span className="display-8 text-secondary">{user?.role}</span>
                <span className="display-8 text-secondary">
                  {user?.project}
                </span>
              </div>

              {/* Social Icons */}
              <div className="row mt-3 p-2 justify-content-center">
                <div className="col-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href={`mailto:${user?.email}`}
                  >
                    {''}
                    <MdEmail size={30} />{' '}
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href={`tel:${user?.phone}`}
                  >
                    {' '}
                    <MdLocalPhone size={30} />{' '}
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href={user?.githubLink}
                    target="_blank"
                  >
                    {' '}
                    <FaGithub size={30} />{' '}
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-12 col-lg-8 col-xl-9">
              {/* Navigation */}
              <div className="row">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link text-muted disabled ${activeTab === 'dashboard' ? 'active' : ''
                        }`}
                      id="nav-dashboard-tab"
                      data-toggle="tab"
                      data-target="#nav-dashboard"
                      type="button"
                      role="tab"
                      aria-controls="nav-dashboard"
                      aria-selected="false"
                      onClick={() => handleTabClick('dashboard')}
                    >
                      Dashboard
                    </button>
                    <button
                      className={`nav-link text-success ${activeTab === 'profile' ? 'active' : ''
                        }`}
                      id="nav-profile-tab"
                      data-toggle="tab"
                      data-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="true"
                      onClick={() => handleTabClick('profile')}
                    >
                      Profile
                    </button>
                    <button
                      className={`nav-link text-success ${activeTab === 'password' ? 'active' : ''
                        }`}
                      id="nav-profile-tab"
                      data-toggle="tab"
                      data-target="#nav-Password"
                      type="button"
                      role="tab"
                      aria-controls="nav-Password"
                      aria-selected="false"
                      onClick={() => handleTabClick('password')}
                    >
                      Password
                    </button>
                    <button
                      className={`nav-link text-success ${activeTab === 'posts' ? 'active' : ''
                        }`}
                      id="nav-posts-tab"
                      data-toggle="tab"
                      data-target="#nav-posts"
                      type="button"
                      role="tab"
                      aria-controls="nav-posts"
                      aria-selected="false"
                      onClick={() => handleTabClick('posts')}
                    >
                      Posts
                    </button>
                  </div>
                </nav>

                <div className="tab-content" id="nav-tabContent">
                  <div
                    className={`tab-pane fade ${activeTab === 'dashboard' ? 'show active' : ''
                      }`}
                    id="nav-dashboard"
                    role="tabpanel"
                    aria-labelledby="nav-dashboard-tab"
                  >
                    Dashboard
                  </div>

                  <div
                    className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''
                      }`}
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <User user={user} handleUser={handleUser} />
                  </div>

                  <div
                    className={`tab-pane fade ${activeTab === 'password' ? 'show active' : ''
                      }`}
                    id="nav-password"
                    role="tabpanel"
                    aria-labelledby="nav-password-tab"
                  >
                    <Password />
                  </div>

                  <div
                    className={`tab-pane fade ${activeTab === 'posts' ? 'show active' : ''
                      }`}
                    id="nav-posts"
                    role="tabpanel"
                    aria-labelledby="nav-posts-tab"
                  >
                    <Posts posts={user?.posts} />
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
