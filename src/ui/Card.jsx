// import Button from "./Button";

import { useState } from "react";

function Card({ clientName, email, date, time, trainer, footer, onUpdate, onDelete }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [updatedClientName, setUpdatedClientName] = useState(clientName);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedDate, setUpdatedDate] = useState(date);
  const [updatedTime, setUpdatedTime] = useState(time);
  const [updatedTrainer, setUpdatedTrainer] = useState(trainer);

  const handleUpdateClick = () => {
    setShowUpdateModal(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleUpdateSubmit = () => {
    onUpdate(updatedClientName, updatedEmail, updatedDate, updatedTime, updatedTrainer);
    setShowUpdateModal(false);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowDeleteModal(false);
  };

  return (
    <div className="border border-gray-300 rounded-xl p-4 m-4 w-80 bg-gradient-to-tr from-indigo-600 to-purple-500 shadow-lg">
      <div className="bg-white rounded-xl p-4">
        <span className="text-xl font-bold mb-2 text-gray-800">
                <p>
                  <strong className="font-semibold">Client Name:</strong>{" "}
                   {clientName}
            </p>
        </span>
        <div className="text-base mb-4 text-gray-700">
                <p>
                  <strong className="font-semibold">Email:</strong>{" "}
                   {email}
            </p>
        </div>
        <div className="text-base mb-4 text-gray-700">
                <p>
                  <strong className="font-semibold">Date:</strong>{" "}
                   {date}
            </p>  
        </div>

        <div className="text-base mb-4 text-gray-700">
                <p>
                  <strong className="font-semibold">Time:</strong>{" "}
                   {time}
            </p>
        </div>
        <div className="text-md text-right text-black mb-4">{footer}</div>
        <div className="flex justify-between gap-2">
          <button
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition-colors"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-md border border-gray-300 transition-colors"
            onClick={handleUpdateClick}
          >
            Update
          </button>
        </div>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Update Card</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={updatedClientName}
                onChange={(e) => setUpdatedClientName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Update Client Name"
              />
              <input
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Update Email"
              />
               <input
                value={updatedDate}
                onChange={(e) => setUpdatedDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Update Date"
              />
               <input
                value={updatedTime}
                onChange={(e) => setUpdatedTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Update Time"
              />
               <input
                value={updatedTrainer}
                onChange={(e) => setUpdatedTrainer(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Update Trainer"
              />
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition-colors"
                onClick={() => setShowUpdateModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={handleUpdateSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Delete Confirmation</h3>
            <p>Are you sure you want to delete this class?</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition-colors"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition-colors"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

