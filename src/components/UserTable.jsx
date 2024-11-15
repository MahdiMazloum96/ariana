import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../Redux/userActions";
import { useState } from "react";
import UserEditModal from "./USerEditModal";

const UserTable = () => {
  //#region --------------- stats ---------------------

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addHover, setAddHover] = useState(false);
  const users = useSelector((state) => state.users || []);

  //#endregion --------------- stats ---------------------
  //#region --------------- logics ---------------------

  const handleButtonClick = () => {
    navigate("/userForm");
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleShowAddHover = () => {
    setAddHover(true);
  };

  const handleHideAddHover = () => {
    setAddHover(false);
  };
  //#endregion --------------- logics ---------------------

  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <div class=" m-10 rounded-md shadow-sm">
        <table class="min-w-full table-auto border-collapse border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 text-center text-gray-600 border border-gray-300 select-none text-lg">
                Name
              </th>
              <th class="px-4 py-2 text-center text-gray-600 border border-gray-300 select-none text-lg">
                LastName
              </th>
              <th class="px-4 py-2 text-center text-gray-600 border border-gray-300 select-none text-lg">
                Date
              </th>
              <th class="px-4 py-2 text-center text-gray-600 border border-gray-300 select-none text-lg">
                Skills
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-700 border border-gray-300 text-center  select-none text-base">
                  {user.name}
                </td>
                <td className="px-4 py-2 text-gray-700 border border-gray-300 text-center select-none text-base">
                  {user.lastName}
                </td>
                <td className="px-4 py-2 text-gray-700 border border-gray-300 text-center select-none text-base">
                  {user.date}
                </td>
                <td className="px-4 py-2 text-gray-700 border border-gray-300 text-center select-none text-base">
                  {user.dropDown}
                </td>
                <td className="w-72">
                  <div className="flex justify-center">
                    <button
                      className="bg-red-500 text-white rounded-lg p-2 m-2 w-20"
                      onClick={() => handleDeleteClick(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 text-white rounded-lg p-2 m-2 w-20"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <UserEditModal user={selectedUser} onClose={handleCloseModal} />
        )}
      </div>
      <button
        className="rounded-full bg-green-700  absolute text-white px-4 py-2   bottom-4 right-4"
        onClick={handleButtonClick}
        onMouseEnter={handleShowAddHover}
        onMouseLeave={handleHideAddHover}
      >
        +
      </button>
      {addHover && (
        <div className="rounded-full bg-gray-700 absolute text-white px-4 py-2   bottom-12 right-12">
          Add New User
        </div>
      )}
    </div>
  );
};

export default UserTable;
