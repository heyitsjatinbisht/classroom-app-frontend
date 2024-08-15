import React, { useState } from "react";

const TimetableList = ({ timetable }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "period",
    direction: "ascending",
  });

  const sortedTimetable = [...timetable].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="overflow-x-auto">
      {timetable.length === 0 ? (
        <p className="text-gray-500">No timetable entries available.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th
                className="py-2 px-4 border-b cursor-pointer"
                onClick={() => handleSort("period")}
              >
                Period{" "}
                {sortConfig.key === "period"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th
                className="py-2 px-4 border-b cursor-pointer"
                onClick={() => handleSort("subject")}
              >
                Subject{" "}
                {sortConfig.key === "subject"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th
                className="py-2 px-4 border-b cursor-pointer"
                onClick={() => handleSort("classroomId")}
              >
                Classroom{" "}
                {sortConfig.key === "classroomId"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTimetable.map((entry) => (
              <tr key={entry._id}>
                <td className="py-2 px-4 border-b">{entry.period}</td>
                <td className="py-2 px-4 border-b">{entry.subject}</td>
                <td className="py-2 px-4 border-b">{entry.classroomId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TimetableList;
