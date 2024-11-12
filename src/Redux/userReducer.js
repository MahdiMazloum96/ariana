import { ADD_USER } from "./userActions";

const initialState = {
  users: Array.isArray(JSON.parse(localStorage.getItem("users")))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
};

export default userReducer;
