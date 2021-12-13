import React from "react";
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = ({ show }) => {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul className="sidenavList">

                <li className="sidenavLi">

                    <Link to="/HomeAluno" className="active Link">
                        <AiOutlineHome />Home
                    </Link>
                </li>

                <li className="sidenavLi">
                    <Link to="/AppChat" className="active Link">
                        <HiOutlineDocumentText />Chat
                    </Link>
                </li>

                <li className="sidenavLi">
                    <Link to="/App" className="active Link">
                        <HiOutlineDocumentDuplicate />Boletim
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;