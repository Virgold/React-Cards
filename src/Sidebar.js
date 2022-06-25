import React from "react";
import './App.css';
import Header from "./header";

export default function Sidebar(props){
    return(
        <>
        <Header/>
        <nav className="col-md-3 col-lg-2 d-md-block py-4 text-dark bg shadow-sm bg-liht sidebar collapse vh-10" id="sidebarMenu">
            <a href="/" className="navbar-brand me-0 px-3">
                <span className="iconify fs-1 icons" data-icon="simple-icons:welcometothejungle"></span>
            </a>
                <hr></hr>
            <ul className="nav flex-column mb-auto mt-5">
                <li className="nav-item" onClick={props.handleClick1}>
                    <a href="/#" className="nav-link text-dark fs-5">
                    <span className="iconify icons me-4" data-icon="fontisto:male"></span>
                    Male Folks
                    </a>
                </li>
                <li className="nav-item" onClick={props.handleClick2}>
                    <a href="/#" className="nav-link text-dark fs-5">
                    <span className="iconify icons me-4" data-icon="et:profile-female"></span>
                    Female Folks
                    </a>
                </li>
                <li className="nav-item" onClick={props.handleClick3}>
                    <a href='/#' className="nav-link text-dark fs-5">
                    <span className="iconify icons me-4" data-icon="akar-icons:people-group"></span>
                    All
                    </a>
                </li>
            </ul>
        </nav>
        </>
    )
}