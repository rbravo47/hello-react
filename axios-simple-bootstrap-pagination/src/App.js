import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';


const App = () => {

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);



  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      console.log(res.data)
      setLoading(false);
    }

    fetchPosts();
  }, []);

  // get current posts
  // note(roy): index is 1-based - for slice
  const indexOfLastPost = currentPage * postsPerPage;      // 1 * 10? - this is 1 based index.
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 - this is 0 based index.

  console.log(indexOfFirstPost, indexOfLastPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='container'>
      <h1 className='text-primary mt-5'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
    </div>
  );
}

export default App;
