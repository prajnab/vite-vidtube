import React from "react";
import "./home.css";
import Feed from "../../components/Feed/Feed";
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const sidebar = useOutletContext();
    return (
        <>
            <div
                className={`home-container ${sidebar ? "" : "large-container"}`}
            >
                <Feed />
            </div>
        </>
    );
};

export default Home;
