import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import axios from "axios";
import * as XLSX from "xlsx";

const NewBatchForm = ({ onClose, onAddNewBatch }) => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  // const [companyDesignation, setCompanyDesignation] = useState("");
  const [noOfParticipants, setNoOfParticipants] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [trainer, setTrainer] = useState("");
  const [excelFile, setExcelFile] = useState(null);

  // Handle Excel file upload
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setExcelFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedTime = format(selectedTime, "hh:mm aa");

    const newBatch = {
      clientName,
      email: clientEmail,
      companyName,
      mobileNumber,
      noOfParticipants,
      //companyDesignation,
      date: selectedDate,
      timeOfClass: formattedTime,
      trainerAssigned: trainer,
    };

    if (excelFile) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const students = jsonData.slice(1).map((row) => ({
          serialNo: row[0],
          name: row[1],
          email: row[2],
          presentAbsent: row[3],
        }));

        try {
          const response = await axios.post("http://localhost:5000/TrainingApp/batches", {
            newBatch,
            students,
          });

          onAddNewBatch(response.data);
          onClose();
        } catch (error) {
          console.error("Error uploading Excel file:", error);
        }
      };

      reader.readAsArrayBuffer(excelFile);
    } else {
      try {
        const response = await axios.post("http://localhost:5000/TrainingApp/batches", newBatch);
        onAddNewBatch(response.data);
        onClose();
      } catch (error) {
        console.error("Error creating new batch:", error);
      }
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full h-4/5 p-6 mx-4 my-2 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">New Batch Form</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-3xl"
          >
            &times;
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter client name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Client Email</label>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter client email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter company name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter mobile number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">No. of participants</label>
            <input
              type="number"
              value={noOfParticipants}
              onChange={(e) => setNoOfParticipants(e.target.value)}
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter No. of participants"
          
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Company Designation</label>
            <input
              type="text"
              value={companyDesignation}
              onChange={(e) => setCompanyDesignation(e.target.value)}
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter designation"
              required
            />
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MM-yyyy"
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholderText="Select a date"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <DatePicker
              selected={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="hh:mm aa"
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholderText="Select time"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Assign Trainer</label>
            <input
              type="text"
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              className="mt-1 block w-full p-2 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter Trainer name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Student Data (Excel)</label>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleExcelUpload}
              className="mt-1 block w-full text-gray-900 border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBatchForm;
