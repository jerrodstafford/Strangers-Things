import React, { useState, useEffect } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Posts = () => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
      const getResult = async() => {
        await getAllPosts();
      }
  
      getResult();
    }, []);
  
    const getAllPosts = async() => {
    try{  
      const response = await fetch(`${BASE_URL}/posts`);
      const result = await response.json();
      const listAllPosts = result.data.posts;
      setAllPosts(listAllPosts);
      } catch(error) {throw error}
    }

  return (
    <div className="posts-page">
    <h2>POSTS</h2>
      { allPosts.map(({ title, description, price, author, location }, i) => {
          return (
                <div key={i}>
                  <h3>{ title }</h3>
                  <p>{ description }</p>
                  <p>Price: { price }</p>
                  <p>Seller: { author.username }</p>
                  <p>Location: { location }</p>
                  <br />
                 </div>
                 )
        })
      }
  </div>
  );
}
export default Posts;