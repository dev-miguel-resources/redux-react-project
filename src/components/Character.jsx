import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Character.scss";
import { ReactComponent as SVGStar } from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail.jsx";
import Modal from "./Modal.jsx";

const Character = (props) => {
  const [modal, setModal] = useState(false);
  const [favorite, setFavorite] = useState(false);



  const { data, favoriteCharacters } = props;
  const { id, image, name, status, species, gender } = data;
  
  const handleCloseModal = () => {

  };

  const handleOpenModal = () => {

  };

  const handleSetFavorite = () => {

  };

  const isFavorite = () => {

  };

  useEffect(() => {

  }, []);


  return (
    <div>
      <p>Hello am Character!</p>
    </div>
  );
};

// DOCUMENTACIÓN PROP-TYPE
Character.propTypes = {
  data: propTypes.object,
  modal: propTypes.bool,
  favorite: propTypes.bool
};

// DEFINICIONES NATIVAS DE REDUX
const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  }
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
