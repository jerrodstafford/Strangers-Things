import React from "react";


const Posts = ({
  allPosts
}) => {

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