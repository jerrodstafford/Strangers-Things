import React, { useState,useEffect } from "react";
import ReactDOM from 'react-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllPosts = async(setAllPosts) => {
    
    try{  
      const response = await fetch(`${BASE_URL}/posts`);
      const result = await response.json();
      const listAllPosts = result.data.posts;
      console.log(listAllPosts)
      setAllPosts(listAllPosts);
      } catch(error) {throw error}
    }

