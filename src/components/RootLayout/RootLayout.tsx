import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { RootLayoutContextType } from "../../types";

const RootLayout = () => {
    const location = useLocation();
    const [sidebar, setSidebar] = useState(true);
    const [categoryId, setCategoryId] = useState<string>("0");

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
                    categoryId={categoryId}
                    setCategoryId={setCategoryId}
                />
                <Outlet
                    context={
                        { sidebar, categoryId } satisfies RootLayoutContextType
                    }
                />
            </div>
        </>
    );
};

export default RootLayout;
