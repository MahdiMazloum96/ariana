import { ADD_USER, DELETE_USER, EDIT_USER } from "./userActions";

const initialState = {
  data: JSON.parse(localStorage.getItem("users")) || [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUser = { ...action.payload };
      localStorage.setItem("users", JSON.stringify(newUser));
      return { ...state, data: newUser };

    case DELETE_USER:
      const updatedData = state.data.filter(
        (user) => user.id !== action.payload
      );
      localStorage.setItem("users", JSON.stringify(updatedData));
      return { ...state, data: updatedData };

    case EDIT_USER:
      const editedData = state.data.map((user) =>
        user.id === action.payload.id ? { ...action.payload } : user
      );
      localStorage.setItem("users", JSON.stringify(editedData));
      return { ...state, data: editedData };

    default:
      return state;
  }
};

export default userReducer;
