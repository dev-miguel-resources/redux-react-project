import React from "react";
import Link from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/static/images/logo.png";
import { setSection } from "../actions";

const Header = () => {
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  }
  
  return (
    <div>
      <p>Hello am Header!</p>
    </div>
  );
};

export default Header;
