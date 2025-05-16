import React, { useState, useEffect } from "react";

const Fetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  const btnClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };
  return (
    <>
      <div
        className="d-flex flex-column justify-content-start align-items-center  text-white "
        style={{ backgroundColor: "#0f1a36" }}
      >
        <h2 className="mt-4"> Fetching:</h2>
        <br />
        {loading ? (
          <h1>Loading............</h1>
        ) : (
          <ol>
            {data.map((post) => (
              <li key={post.id} className="mb-2 fs-5">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </li>
            ))}
          </ol>
        )}
        <button
          className="btn px-4 py-2 bg-light rounded my-3 text-success fs-4 fw-bold"
          onClick={btnClick}
        >
          Data_FetchinG:
        </button>
      </div>
    </>
  );
};

export default Fetching;
