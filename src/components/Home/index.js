import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to={'/editor'}>Go to the Editor page</Link>
      <br />
      <Link to={'/admin'}>Go to the Admin page</Link>
      <br />
      <Link to={'/Lounge'}>Go to the Lounge</Link>
      <br />
      <Link to={'/linkpage'}>Go to the link page</Link>
      <div className="flexGrow">
        <button type="button">Sign Out</button>
      </div>
    </div>
  )
}

export default Home;
