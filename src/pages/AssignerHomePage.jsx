import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../ui/Card";
import NewBatchForm from "../ui/NewBatchForm"; // Import the form component
import { formatDate } from '../utils/dateUtils';
//import { AiOutlineSearch } from "react-icons/ai";


function AssignerDashboard() {
  const [batches, setBatches] = useState([]);
  const [showNewBatchForm, setShowNewBatchForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Fetch batch data from backend
  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/TrainingApp/batches');
        setBatches(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching batches:", error);
      }
    };

    fetchBatches();
  }, []);

  const handleAddNewBatch = async (newBatch) => {
    try {
      // Send a POST request to create a new batch
      const response = await axios.post('http://localhost:5000/TrainingApp/batches', newBatch);
  
      const { savedBatch, savedAccount } = response.data;
  
      // Update the local state with the new batch
      setBatches([savedBatch, ...batches]);
  
      console.log('New batch added:', savedBatch);
      console.log('New account created:', savedAccount);
    } catch (error) {
      console.error('Error adding new batch and creating account:', error);
    }
  };

    // Function to convert date from dd-mm-yyyy format to ISO 8601 format
    const convertDateToISO = (dateStr) => {
      const [day, month, year] = dateStr.split('-').map(Number);
      return new Date(year, month - 1, day).toISOString();
    };
  

  const handleUpdateBatch = async (index, batchId, updatedClientName, updatedEmail, updatedDate, updatedTime, updatedTrainer) => {
    try {

      const isoDate = convertDateToISO(updatedDate);
      // Update batch in the backend
      await axios.put(`http://localhost:5000/TrainingApp/batches/${batchId}`, {
        clientName: updatedClientName,
        email: updatedEmail,
        date: isoDate,
        timeOfClass: updatedTime,
        trainerAssigned: updatedTrainer,
      });

      // Update the batch in the local state
      const updatedBatches = [...batches];
      updatedBatches[index] = {
        ...updatedBatches[index],
        clientName: updatedClientName,
        email: updatedEmail,
        date: isoDate,
        timeOfClass: updatedTime,
        trainerAssigned: updatedTrainer,
      };
      setBatches(updatedBatches);
    } catch (error) {
      console.error("Error updating batch:", error);
    }
  };

  const handleDeleteBatch = async (id, index) => {
    try {
      // Delete batch from the backend
      await axios.delete(`http://localhost:5000/TrainingApp/batches/${id}`);

      // Update the state to remove the deleted batch
      const updatedBatches = batches.filter((_, i) => i !== index);
      setBatches(updatedBatches);
    } catch (error) {
      console.error("Error deleting batch:", error);
    }
  };

  // Function to filter batches based on search term
  const filteredBatches = batches.filter((batch) =>
    batch.clientName?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
    batch.date?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
    batch.trainer_assigned?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="h-screen">
      <div className="bg-blue-50 p-6 text-white">
        <div className="flex flex-row justify-center items-center">
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-400 transition-colors w-full"
            onClick={() => setShowNewBatchForm(!showNewBatchForm)}
          >
            Add New Training
          </button>
        </div>

        {/* New Batch Form Modal */}
        {showNewBatchForm && (
          <NewBatchForm
            onClose={() => setShowNewBatchForm(false)}
            onAddNewBatch={handleAddNewBatch}
          />
        )}
      </div>

      {/* Search Input */}
      <div className="mt-4 mb-4 flex justify-center">
        {/* <AiOutlineSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        /> */}
        <input
          type="text"
          placeholder="Search by client name, date, or trainer"
          className="w-full mx-10 p-2 px-8 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
        />
        
      </div>

      {/* Display filtered cards */}
      <div className="p-8 flex flex-wrap gap-6 justify-center">
        {filteredBatches.map((batch, index) => (
          <Card
            key={batch._id}
            className="bg-white shadow-lg rounded-lg p-4 w-80"
            title={`Batch ID: ${batch._id}`}
            clientName={batch.clientName}
            email={batch.email}
            date={formatDate(batch.date)}
            time={batch.timeOfClass}
            trainer={batch.trainerAssigned}
            footer={
              <span className="p-4">Trainer: {batch.trainerAssigned}</span>
            }
            onUpdate={(newClientName, newEmail, newDate, newTime, newTrainer) =>
              handleUpdateBatch(index, batch._id, newClientName, newEmail, newDate, newTime, newTrainer)
            }
            onDelete={() => handleDeleteBatch(batch._id, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default AssignerDashboard;
