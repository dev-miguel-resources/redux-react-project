const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload],
      };
    default:
      return state; // lo agregué al final de la clase para que no les de error, devuelvo el state inicial por defecto si no cae en ninguna action
  }
};

export default reducer; // añadí el export default como siempre para luego llevarmelo a otra parte
