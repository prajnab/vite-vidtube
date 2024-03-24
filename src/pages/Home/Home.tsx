import React from "react";
import { useOutletContext } from "react-router-dom";

import "./home.css";
import Feed from "../../components/Feed/Feed";
import { RootLayoutContextType } from "../../types";

const Home = () => {
    const { sidebar, categoryId } = useOutletContext<RootLayoutContextType>();
    return (
        <>
            <div
                className={`home-container ${sidebar ? "" : "large-container"}`}
            >
                <Feed categoryId={categoryId} />
            </div>
        </>
    );
};

export default Home;
