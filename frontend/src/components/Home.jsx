import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './css/util.css';
import './css/styles.css';

const Home = () => {

  const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login';
            return;
        }

        axios
            .get('http://localhost:5555/user', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch(() => {
                alert('Failed to fetch user data. Please log in again.');
                localStorage.removeItem('token');
                window.location.href = '/login';
            });
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

  return (
    <div className="container">
      <div className="profile-header">
        <div className="banner"></div>
        <div className="profile-info">
          <div className="avatar"></div>
          <div className="name">
            <h1>
              John Doe <span className="verified">✔</span>
            </h1>
            <p className="username">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="main-content">
          <div className="favorites">
            <h2>Top Favorite Cuisines</h2>
            <ul>
              <li>✔ Korean</li>
              <li>✔ German</li>
              <li>✔ Caribbean</li>
            </ul>
            <br />
            <br />
            <h2>Top Favorite Restaurants</h2>
            <ul>
              <li>✔ Mikado</li>
              <li>✔ Heidelberg</li>
              <li>✔ Court Square Diner</li>
            </ul>
          </div>

          <div className="reviews">
            <h2>Most Popular Reviews</h2>
            <div className="review-card">
              <div className="review-info">
                <div className="avatar-small"></div>
                <div>
                  <h3>Cho Dang Gol</h3>
                  <p>Rating: ⭐⭐⭐⭐⭐</p>
                  <p>Price Range: $30-$50</p>
                </div>
              </div>
              <p className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="likes">1250 people liked this</p>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="badges">
            <h2>Badges</h2>
            <ul>
              <li>⭐ Top Reviewer</li>
              <li>📅 3-year Veteran</li>
            </ul>
          </div>

          <div className="contributions">
            <h2>771 contributions in the last year</h2>
            <div className="contribution-graph">
              {/* Placeholder for contribution graph */}
            </div>
          </div>
        </div>
      </div>
    </div>


    // <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
    //     <h1>Login Success Page</h1>
    //     <Link to='/login' className="btn btn-light my-5">Logout</Link>
    // </div>
  );
};

export default Home
