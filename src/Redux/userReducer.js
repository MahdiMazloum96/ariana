import { ADD_USER, DELETE_USER, EDIT_USER } from "./userActions";

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
    case DELETE_USER:
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      return {
        ...state,
        users: filteredUsers,
      };
    case EDIT_USER:
      const editedUsers = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
      localStorage.setItem("users", JSON.stringify(editedUsers));
      return { ...state, users: editedUsers };

    default:
      return state;
  }
};

export default userReducer;
