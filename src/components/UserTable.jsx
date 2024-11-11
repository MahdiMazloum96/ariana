import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/userForm");
  };

  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <div class=" m-10 rounded-md shadow-sm">
        <table class="min-w-full table-auto border-collapse border border-gray-300">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 text-left text-gray-600 border border-gray-300">
                Username
              </th>
              <th class="px-4 py-2 text-left text-gray-600 border border-gray-300">
                Date
              </th>
              <th class="px-4 py-2 text-left text-gray-600 border border-gray-300">
                Dropdown
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-300">
              <td class="px-4 py-2 text-gray-700 border border-gray-300">
                john_doe
              </td>
              <td class="px-4 py-2 text-gray-700 border border-gray-300">
                2024-11-10
              </td>
              <td class="px-4 py-2 text-gray-700 border border-gray-300">
                2024-11-10
              </td>
              <td>
                <button>delet</button>
              </td>
              <td>
                <button>delet</button>
              </td>
            </tr>
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
