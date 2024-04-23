import React from "react";
import "../../../styles/App.css";
import About from "../../../pages/About";
import Posts from "../../../pages/Posts";
import PostIdPage from "../../../pages/PostIdPage";
import { Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
            <Route exact path="/posts" element={<Posts />} />
        </Routes>
    )
}

