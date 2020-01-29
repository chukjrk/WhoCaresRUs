const userInfo = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return state.concat(action.payload);
    case "REMOVE_USER":
      state = [];
      return state;
    default:
      return state;
  }
};

export default userInfo;
