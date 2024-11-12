import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../Redux/userActions";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const selectOptions = [
  { value: "react", label: "React" },
  { value: "nextJs", label: "NextJs" },
  { value: "angular", label: "Angular" },
  { value: "tailwind", label: "Tailwind" },
];

const UserEditModal = ({ user, onClose }) => {
  //#region --------------- stats ---------------------

  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [selectedDate, setSelectDate] = useState(new Date(user.date));
  const [dropDown, setDropDown] = useState(
    user.dropDown
      .split(", ")
      .map((label) => selectOptions.find((opt) => opt.label === label))
  );
  const dispatch = useDispatch();

  //#endregion --------------- stats ---------------------
  //#region --------------- logics ---------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !lastName || !selectedDate || !dropDown.length) {
      alert("All fields are required.");
      return;
    }

    const updatedUser = {
      id: user.id,
      name,
      lastName,
      date: new Date(selectedDate).toLocaleDateString(),
      dropDown: dropDown.map((option) => option.label).join(", "),
    };
    dispatch(editUser(updatedUser));

    const users = JSON.parse(localStorage.getItem("users"));
    const updatedUsers = users.map((u) => (u.id === user.id ? updatedUser : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    onClose();
  };
  //#endregion --------------- logics ---------------------
  //#region --------------- useEffects ---------------------
  useEffect(() => {
    setName(user.name);
    setLastName(user.lastName);
    setSelectDate(new Date(user.date));
    setDropDown(
      user.dropDown
        .split(", ")
        .map((label) => selectOptions.find((opt) => opt.label === label))
    );
  }, [user]);
  //#endregion --------------- useEffects ---------------------

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h3 className="text-xl font-bold mb-5">Edit User</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="border p-2 rounded w-full"
          />
          <div className="date-picker-container">
            <label htmlFor="date-picker" className="pr-3 text-base">
              Select a Date:
            </label>
            <DatePicker
              id="date-picker"
              selected={selectedDate}
              onChange={setSelectDate}
              dateFormat="yyyy/MM/dd"
              className="p-2 border rounded-md shadow-md"
            />
          </div>
          <Select
            isMulti
            name="skills"
            options={selectOptions}
            value={dropDown}
            onChange={setDropDown}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <div className="flex justify-center gap-4 ">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white p-2 rounded w-36"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded w-36"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditModal;
