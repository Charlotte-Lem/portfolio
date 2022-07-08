import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

export default function Navigation() {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./assets/profil.png" alt="profil-pic" />
          <h3>Lemoine Charlotte</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <BiHomeHeart className="icon" />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/competences"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <GiSkills className="icon" />
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/projet"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <MdWorkOutline className="icon" />
              <span>Projet</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/contact"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <RiContactsBookLine className="icon" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
