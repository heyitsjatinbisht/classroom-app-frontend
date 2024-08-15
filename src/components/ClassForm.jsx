import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClassroom } from "../features/classroomSlice";
import { toast } from "react-toastify";

const ClassForm = () => {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [days, setDays] = useState([]);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.classroom);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !startTime || !endTime) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (startTime >= endTime) {
      toast.error("Start time must be before end time.");
      return;
    }

    const classroomData = {
      name,
      startTime,
      endTime,
      days,
    };

    // Dispatch createClassroom action
    dispatch(createClassroom(classroomData))
      .unwrap()
      .then(() => {
        toast.success("Classroom created successfully!");

        // Clear the form fields after success
        setName("");
        setStartTime("");
        setEndTime("");
        setDays([]);
      })
      .catch((error) => {
        toast.error("Failed to create classroom. Please try again.");
        console.error("Error creating classroom:", error);
      });
  };

  const handleDayToggle = (day) => {
    setDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Create New Classroom</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Classroom Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Classroom Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Start Time */}
        <div>
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-gray-700"
          >
            Start Time
          </label>
          <input
            id="startTime"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* End Time */}
        <div>
          <label
            htmlFor="endTime"
            className="block text-sm font-medium text-gray-700"
          >
            End Time
          </label>
          <input
            id="endTime"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Days */}
        <div>
          <label
            htmlFor="days"
            className="block text-sm font-medium text-gray-700"
          >
            Days
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <div key={day} className="flex items-center">
                <input
                  type="checkbox"
                  id={day}
                  value={day}
                  checked={days.includes(day)}
                  onChange={() => handleDayToggle(day)}
                  className="mr-2"
                />
                <label htmlFor={day} className="text-gray-700">
                  {day}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={status === "loading"} // Disable button while loading
        >
          {status === "loading" ? "Creating..." : "Create Classroom"}
        </button>

        {/* Display Error */}
        {status === "failed" && (
          <p className="text-red-500 mt-2">Error: {error}</p>
        )}
      </form>
    </div>
  );
};

export default ClassForm;
