import { useState, useEffect } from "react";
import axios from "axios";

function AttendancePage() {
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch batches data from database
  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get("http://localhost:5000/TrainingApp/batches");
        setBatches(response.data);
      } catch (error) {
        console.error("Error fetching batches:", error);
      }
    };

    fetchBatches();
  }, []);

  // Handle row click to fetch attendance data and open modal
  const handleRowClick = async (batch) => {
    try {
      setSelectedBatch(batch);

      // Fetch attendance data for the selected batch
      const response = await axios.get(`http://localhost:5000/TrainingApp/attendance/${batch._id}`);
      setAttendanceData(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  // Toggle attendance status
  const toggleAttendance = (index) => {
    const updatedAttendance = [...attendanceData];
    updatedAttendance[index].present = !updatedAttendance[index].present;
    setAttendanceData(updatedAttendance);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Attendance</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                Client Name
              </th>
              {/* <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                Designation
              </th> */}
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                Date of Training
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                Participants
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                Trainer Name
              </th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch, index) => (
              <tr
                key={index}
                className="hover:bg-blue-100 cursor-pointer"
                onClick={() => handleRowClick(batch)}
              >
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{batch.clientName}</td>
                {/* <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{batch.designation}</td> */}
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{batch.email}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{batch.date}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{batch.noOfParticipants}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{batch.trainerAssigned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Attendance for {selectedBatch.clientName}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 shadow-md">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                      S. No.
                    </th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                      Name
                    </th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                      Email
                    </th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 text-left text-sm leading-4 text-gray-700 uppercase">
                      Present/Absent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((student, index) => (
                    <tr key={index} className="hover:bg-blue-50">
                      <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{index + 1}</td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{student.name}</td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{student.email}</td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-blue-600"
                            checked={student.present}
                            onChange={() => toggleAttendance(index)}
                          />
                          <span className="ml-2">{student.present ? "Present" : "Absent"}</span>
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendancePage;
