import React from "react";

const TimetableList = ({ timetable }) => {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Period</th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Classroom</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry) => (
            <tr key={entry._id}>
              <td className="py-2 px-4 border-b">{entry.period}</td>
              <td className="py-2 px-4 border-b">{entry.subject}</td>
              <td className="py-2 px-4 border-b">{entry.classroomId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableList;
