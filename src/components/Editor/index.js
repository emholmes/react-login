import React from "react";
import { Link } from "react-router-dom";


const Editor = () => {
  return (
    <section>
      <div>You are on the editor page!</div>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default Editor;
