import { useState } from "react";
import Card from "../ui/Card";
import batchData from "../data/batch";
import NewBatchForm from "../ui/NewBatchForm"; // Import the form component

function AssignerDashboard() {
  const [openForm, setOpenForm] = useState(false);

  const handleForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="h-screen">
      <div className="bg-blue-50 p-6 text-white">
        <div className="flex flex-row justify-center items-center">
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-400 transition-colors w-full"
            onClick={handleForm}
          >
            Add New Class
          </button>
        </div>
        {openForm && <NewBatchForm />} {/* Use the imported form component */}
      </div>

      <div className="p-8 flex flex-wrap gap-6 justify-center">
        {batchData.map((batch) => (
          <Card
            key={batch.batch_id}
            className="bg-white shadow-lg rounded-lg p-4 w-80"
            title={`Batch ID: ${batch.batch_id}`}
            content={
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold">Client Name:</strong>{" "}
                  {batch.client_name}
                </p>
                <p>
                  <strong className="font-semibold">Email:</strong>{" "}
                  {batch.email}
                </p>
                <p>
                  <strong className="font-semibold">Date:</strong> {batch.date}
                </p>
                <p>
                  <strong className="font-semibold">Time:</strong>{" "}
                  {batch.time_of_class}
                </p>
              </div>
            }
            footer={
              <span className="p-4">Trainer: {batch.trainer_assigned}</span>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default AssignerDashboard;
