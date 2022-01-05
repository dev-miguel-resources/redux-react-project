import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Character.scss";
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail.jsx";
import Modal from "./Modal.jsx";

const Character = () => {
  return (
    <div>
      <p>Hello am Character!</p>
    </div>
  );
};

export default Character;
