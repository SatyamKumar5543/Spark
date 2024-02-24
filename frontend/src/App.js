// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComments, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';

function App() {
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalShares, setTotalShares] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/analytics/');
        setTotalLikes(response.data.total_likes);
        setTotalShares(response.data.total_shares);
        setTotalComments(response.data.total_comments);
        setTotalPosts(response.data.total_posts);
      } catch (error) {
        console.error('Error fetching total data:', error);
      }
    };

    const fetchPostAnalytics = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/post/');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching post analytics:', error);
      }
    };

    fetchPostAnalytics();

    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <main id="theme">
          <section class="top__section">
            <div class="top__section-header container">
              <div class="follower">
                <h1 class="title">Social Media Dashboard</h1>

                <div class="login">
                  <FontAwesomeIcon icon={faCircleUser} style={{ color: "#f56a47", }} />
                  <p class="subtitle">Login</p>
                </div>
              </div>
            </div>

            <div class="card__grid container">
              <div class="card-top Posts">
                <span class="data-number">{totalPosts}</span>
                <span class="data-type">Posts</span>
              </div>
              <div class="card-top Likes">
                <span class="data-number">{totalLikes}</span>
                <span class="data-type">Likes</span>
              </div>
              <div class="card-top Shares">
                <span class="data-number">{totalShares}</span>
                <span class="data-type">Shares</span>
              </div>
              <div class="card-top Comments">
                <span class="data-number">{totalComments}</span>
                <span class="data-type">Comments</span>
              </div>
            </div>

            <div class="top__section-header container">
              <div>
                <h1 class="title">Post Analytics</h1>
              </div>
              {/* <img src={graph} alt="graph" height='400px' /> */}
            </div>
            {posts.map(post => (
              <div key={post._id} className="post-container">

                <dl className="post-details">
                  <div className="postgrid logo">
                    <img src={post.image} alt="post" />
                  </div>
                  <div className='postgrid Likes'>
                    <dt>
                      <FontAwesomeIcon icon={faHeart} style={{ color: "#ea1010", }} />
                      Likes</dt>
                    <dd>{post.likes}</dd>
                  </div>
                  <div className='postgrid Shares'>
                    <dt><FontAwesomeIcon icon={faShare} style={{ color: "#74C0FC", }} />Shares</dt>
                    <dd>{post.shares}</dd>
                  </div>
                  <div className='postgrid Comments'>
                    <dt><FontAwesomeIcon icon={faComments} style={{ color: "#FFD43B", }} />Comments</dt>
                    <dd>{post.comments}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </section>

        </main>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div >
  );
}

export default App;