import React, { useState, useEffect } from "react";

const Fetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="d-flex flex-column justify-content-start align-items-center bg-dark text-white b-100 ">
        <h2> Fetching:</h2>
        <br />
        <br />
        {loading ? (
          <h1>Loading............</h1>
        ) : (
          <ol>
            {data.map((post) => (
              <li key={post.id}> {post.title}</li>
             ))
            }
          </ol>
        )}
      </div>
    </>
  );
};

export default Fetching;
