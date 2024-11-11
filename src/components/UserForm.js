import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from "react-select";
const selectOptions = [
  { value: "react", label: "React" },
  { value: "nextJs", label: "NextJs" },
  { value: "angular", label: "Angular" },
  { value: "tailwind", label: "Tailwind" },
];

const UserForm = () => {
  //#region --------------- stats ---------------------

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDate, setSelectDate] = useState("");
  const [dropDown, setDropDown] = useState("");
  //#endregion --------------- stats ---------------------
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDateChange = (date) => {
    setSelectDate(date);
  };

  return (
    <div className="h-full w-1/3 m-auto p-10 shadow-lg mt-14">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 border rounded flex justify-center gap-10  flex-col"
      >
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
          placeholder="LastName"
          className="border p-2 rounded w-full"
        />
        <div className="date-picker-container">
          <label htmlFor="date-picker" className="pr-3">
            Select a Date:
          </label>
          <DatePicker
            id="date-picker"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            className="p-2 border rounded-md shadow-md"
          />
        </div>
        <Select
          isMulti
          name="colors"
          options={selectOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded flex justify-center w-20 "
          >
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;