import React from "react";
import "../../../styles/App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    )
}

