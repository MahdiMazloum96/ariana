import { v4 as uuidv4 } from "uuid";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: {
    ...user,
    id: uuidv4(),
  },
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const editUser = (editUser) => ({
  type: EDIT_USER,
  payload: editUser,
});
