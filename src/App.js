import React, { useState, useEffect } from "react";
import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch posts
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((dataPosts) => setPosts(dataPosts));
  }, []);


  return (
      <div className="App">
        <div className="components">
        <Navigation />
        <Content posts={posts} />
        <Footer />
        </div>
      </div>
  );
}

export default App;
