const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      paragraph: action.payload.paragraph,
    };
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      paragraph:action.payload.paragraph,
    };
  }

  if (action.type === "PACKAGES_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      paragraph:action.payload.paragraph,
      faqpara:action.payload.faqpara,
    };
  }
  if (action.type === "FAQ_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      paragraph:action.payload.paragraph,
    };
  }

  if (action.type === "GET_SERVICES") {
    return {
      ...state,
      services: action.payload,
    };
  }

  return state;
};

export default reducer;
