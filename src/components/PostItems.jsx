'use client'
import { useEffect, useState } from "react";

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
};

const PostItems = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => {
        console.error('Erro ao buscar os posts:', error);
      });
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

export default PostItems;
