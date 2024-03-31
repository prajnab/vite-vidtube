import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "./rootLayout.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { RootLayoutContextType } from "../../types";

const RootLayout = () => {
    const location = useLocation();
    const [sidebar, setSidebar] = useState(true);
    const [categoryId, setCategoryId] = useState<string>("0");

    const overlay = useMemo(
        () => location.pathname !== "/",
        [location.pathname]
    );

    useEffect(() => {
        setSidebar(overlay ? false : true);
    }, [overlay]);

    return (
        <>
            <Navbar setSidebar={setSidebar} />
            <div className="main-container">
                <Sidebar
                    overlay={overlay}
                    sidebar={sidebar}
                    categoryId={categoryId}
                    setCategoryId={setCategoryId}
                    setSidebar={setSidebar}
                />
                <div
                    className={`main-container ${
                        overlay && sidebar ? "lock-scrollbar" : ""
                    }`}
                >
                    <Outlet
                        context={
                            {
                                sidebar,
                                categoryId,
                            } satisfies RootLayoutContextType
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default RootLayout;
