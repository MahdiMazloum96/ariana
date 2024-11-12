import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../Redux/userActions";

const UserTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users || []);

  const handleButtonClick = () => {
    navigate("/userForm");
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteUser(id));
  };

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
                      onClick={() => handleDeleteClick(user.id)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="rounded-full bg-green-700  absolute text-white px-4 py-2   bottom-4 right-4"
        onClick={handleButtonClick}
      >
        +
      </button>
    </div>
  );
};

export default UserTable;
