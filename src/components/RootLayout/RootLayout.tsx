import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const RootLayout = () => {
    const location = useLocation();
    const [sidebar, setSidebar] = useState(true);

    useEffect(() => {
        setSidebar(location.pathname !== "/" ? false : true);
    }, [location.pathname]);

    return (
        <>
            <Navbar setSidebar={setSidebar} />
            <div className="main-container">
                <Sidebar
                    overlay={location.pathname !== "/"}
                    sidebar={sidebar}
                />
                <Outlet context={sidebar} />
            </div>
        </>
    );
};

export default RootLayout;
