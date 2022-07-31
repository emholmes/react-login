import React from "react";
import { Link } from "react-router-dom";


const Admin = () => {
  return (
    <section>
      <div>You are on the Admin page!</div>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>

  )
}

export default Admin;
