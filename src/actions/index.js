export const checkLogged = () => ({
  type: "SIGN_IN"
});

export const addComment = data => ({
  type: "ADD_COMMENT",
  payload: data
});

export const userDetails = (typePara, data) => ({
  type: typePara,
  payload: data
});
