// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// import graph from './images/graph.png'

function Dashboard() {
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalShares, setTotalShares] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchTotalLikes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/analytics/');
        setTotalLikes(response.data.total_likes);
        setTotalShares(response.data.total_shares);
        setTotalComments(response.data.total_comments);
        setTotalPosts(response.data.total_posts);
      } catch (error) {
        console.error('Error fetching total likes:', error);
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

    fetchTotalLikes();
    fetchPostAnalytics();
  }, []);
  return (
    <div className="App">
      <main id="theme">
        <section class="top__section">
          <div class="top__section-header container">
            <div>
              <h1 class="title">Social Media Dashboard</h1>
              <p class="subtitle">Total Followers: 23,004</p>
            </div>
          </div>
          <div class="login">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.34" d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p class="subtitle">Login</p>
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
              <div className="post-logo">
                <img src={post.image} alt="post"/>
              </div>
              <dl className="post-details">
                <div className='postgrid Likes'>
                  <dt>Likes</dt>
                  <dd>{post.likes}</dd>
                </div>
                <div className='postgrid Shares'>
                  <dt>Shares</dt>
                  <dd>{post.shares}</dd>
                </div>
                <div className='postgrid Comments'>
                  <dt>Comments</dt>
                  <dd>{post.comments}</dd>
                </div>
              </dl>
            </div>
          ))}
        </section>

      </main>
    </div >
  );
}

export default Dashboard;