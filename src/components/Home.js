import React, { useState } from 'react';
import Footer from "./Footer";
import Naavbar from "./Navbar";
import Contact from "./Contact";
import Timeline from "./Motion";
import '../App.css';
import GraduatedProfil from "./GraduatedProfil";

function Home() {
  const [activeTab, setActiveTab] = useState('cyber-security');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <>
      <Naavbar />
      <div className="custom-bg">
        {/* Search Section */}
        <div className="container mt-4 mb-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSearch} className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for graduates by skills, domain..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <h2 className="mt-4">Browse Domains</h2>
        </div>
        
        <div className="container-fluid pb-3">
          <div className="row">
            <ul className="nav nav-tabs custom-nav-tabs">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'cyber-security' ? 'active' : ''}`}
                  href="#cyber-security"
                  onClick={() => setActiveTab('cyber-security')}
                  data-bs-toggle="tab"
                >
                  Cyber Security
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'ia-data-science' ? 'active' : ''}`}
                  href="#ia-data-science"
                  onClick={() => setActiveTab('ia-data-science')}
                  data-bs-toggle="tab"
                >
                  IA & Data Science
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'game-engineering' ? 'active' : ''}`}
                  href="#game-engineering"
                  onClick={() => setActiveTab('game-engineering')}
                  data-bs-toggle="tab"
                >
                  Game Engineering
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'iot-robotics' ? 'active' : ''}`}
                  href="#iot-robotics"
                  onClick={() => setActiveTab('iot-robotics')}
                  data-bs-toggle="tab"
                >
                  IoT & Robotics Programming
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content">
                {/* Cyber Security Tab */}
                <div id="cyber-security" className={`tab-pane fade ${activeTab === 'cyber-security' ? 'show active' : ''}`}>
                  <div className="row">
                    {['Application security', 'Risk assessment', 'Network Security'].map((title) => (
                      <div key={title} className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="custom-block bg-light shadow rounded p-4">
                          <h5 className="custom-title">{title}</h5>
                          <p className="text-muted mb-2">Available Positions: 5</p>
                          <button className="btn btn-outline-primary btn-sm">
                            View Graduates
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* IA & Data Science Tab */}
                <div id="ia-data-science" className={`tab-pane fade ${activeTab === 'ia-data-science' ? 'show active' : ''}`}>
                  <div className="row">
                    {['Data Analysis', 'Machine Learning', 'Deep Learning'].map((title) => (
                      <div key={title} className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="custom-block bg-light shadow rounded p-4">
                          <h5 className="custom-title">{title}</h5>
                          <p className="text-muted mb-2">Available Positions: 3</p>
                          <button className="btn btn-outline-primary btn-sm">
                            View Graduates
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Game Engineering Tab */}
                <div id="game-engineering" className={`tab-pane fade ${activeTab === 'game-engineering' ? 'show active' : ''}`}>
                  <div className="row">
                    {['Game Development', 'Game Design', 'AR/VR Development'].map((title) => (
                      <div key={title} className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="custom-block bg-light shadow rounded p-4">
                          <h5 className="custom-title">{title}</h5>
                          <p className="text-muted mb-2">Available Positions: 4</p>
                          <button className="btn btn-outline-primary btn-sm">
                            View Graduates
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* IoT & Robotics Programming Tab */}
                <div id="iot-robotics" className={`tab-pane fade ${activeTab === 'iot-robotics' ? 'show active' : ''}`}>
                  <div className="row">
                    {['IoT Projects', 'Robotics', 'Embedded Systems'].map((title) => (
                      <div key={title} className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="custom-block bg-light shadow rounded p-4">
                          <h5 className="custom-title">{title}</h5>
                          <p className="text-muted mb-2">Available Positions: 6</p>
                          <button className="btn btn-outline-primary btn-sm">
                            View Graduates
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Timeline />
      <Footer />
    </>
  );
}

export default Home;