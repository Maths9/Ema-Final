import React from "react";
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { AiFillSnippets } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavbarProf = ({ show }) => {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul className="sidenavList">

                <li className="sidenavLi">

                    <Link to="/HomeProf" className="active Link">
                        <AiOutlineHome />Home
                    </Link>
                </li>

                <li className="sidenavLi">
                    <Link to="/AppChat" className="active Link">
                        <HiOutlineDocumentText />Chat
                    </Link>
                </li>

                <li className="sidenavLi">
                    <Link to="/AppProf" className="active Link">
                        <HiOutlineDocumentDuplicate />Boletim
                    </Link>
                </li>

                <li className="sidenavLi">
                    <Link to="/AppAt" className="active Link">
                        <AiFillSnippets />Atividades
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarProf;