import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const RootLayout = () => {
    const [sidebar, setSidebar] = useState(true);
    return (
        <>
            <Navbar setSidebar={setSidebar} />
            <div className="main-container">
                <Sidebar sidebar={sidebar} />
                <Outlet context={sidebar} />
            </div>
        </>
    );
};

export default RootLayout;
