import React from "react";
import { useNavigate } from "react-router-dom";

import "./sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

type SidebarProps = {
    overlay: boolean;
    sidebar: boolean;
    categoryId?: string;
    setCategoryId: React.Dispatch<React.SetStateAction<string>>;
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({
    overlay,
    sidebar,
    categoryId,
    setCategoryId,
    setSidebar,
}: SidebarProps) => {
    const navigate = useNavigate();
    const containerClasses = overlay
        ? sidebar
            ? "sidebar sidebar-overlay"
            : "sidebar-hidden"
        : sidebar
        ? "sidebar"
        : "sidebar small-sidebar";

    const handleCategoryClick = (id: string) => {
        setCategoryId(id);
        navigate("/");
    };

    return (
        <>
            {overlay && sidebar ? (
                <div className="overlay" onClick={() => setSidebar(false)} />
            ) : null}
            <div className={containerClasses}>
                <div className="shortcut-links">
                    <div
                        className={`side-link ${
                            categoryId === "0" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("0")}
                    >
                        <img src={home} alt="" />
                        <p>Home</p>
                    </div>
                    <div
                        className={`side-link ${
                            categoryId === "20" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("20")}
                    >
                        <img src={game_icon} alt="" />
                        <p>Gaming</p>
                    </div>
                    <div
                        className={`side-link ${
                            categoryId === "2" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("2")}
                    >
                        <img src={automobiles} alt="" />
                        <p>Automobiles</p>
                    </div>
                    <div
                        className={`side-link ${
                            categoryId === "17" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("17")}
                    >
                        <img src={sports} alt="" />
                        <p>Sports</p>
                    </div>
                    <div
                        className={`side-link ${
                            categoryId === "24" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("24")}
                    >
                        <img src={entertainment} alt="" />
                        <p>Entertainment</p>
                    </div>
                    <div
                        className={`side-link ${
                            categoryId === "28" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("28")}
                    >
                        <img src={tech} alt="" />
                        <p>Technology</p>
                    </div>
                    <div
                        className={`side-link ${
                            categoryId === "10" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("10")}
                    >
                        <img src={music} alt="" />
                        <p>Music</p>
                    </div>
                    <div
                        className={`side-link ${
                            categoryId === "22" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("22")}
                    >
                        <img src={blogs} alt="" />
                        <p>Blogs</p>
                    </div>
                    <div
                        className={`side-link ${
                            categoryId === "25" ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick("25")}
                    >
                        <img src={news} alt="" />
                        <p>News</p>
                    </div>
                </div>
                <hr />
                <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className={"side-link"}>
                        <img src={jack} alt="" />
                        <p>PewDiePie</p>
                    </div>
                    <div className={"side-link"}>
                        <img src={simon} alt="" />
                        <p>Mr Beast</p>
                    </div>
                    <div className={"side-link"}>
                        <img src={tom} alt="" />
                        <p>Justin Bieber</p>
                    </div>
                    <div className={"side-link"}>
                        <img src={megan} alt="" />
                        <p>5-Minute Crafts</p>
                    </div>
                    <div className={"side-link"}>
                        <img src={cameron} alt="" />
                        <p>Nas Daily</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
