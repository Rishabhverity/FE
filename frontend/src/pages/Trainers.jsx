import { useState, useEffect } from 'react';
import TrainersCard from "../ui/TrainersCard";
import { AiOutlineSearch } from 'react-icons/ai';
 

function Trainers() {
  const [trainersData, setTrainersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTrainers = async () => {
    try {
      const response = await fetch('http://localhost:5000/TrainingApp/trainers'); // Your backend endpoint
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching trainers:", error);
      return [];
    }
  };
  

  // Fetch trainers from the backend when component mounts
  useEffect(() => {
    const getTrainers = async () => {
      const response = await fetchTrainers();
      setTrainersData(response);
    };
    getTrainers();
  }, []);

  // Function to filter trainers based on search term
  const filteredTrainers = trainersData.filter((trainer) =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search by name or skill..."
          className="w-full px-10 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          <AiOutlineSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTrainers.map((trainer) => (
          <TrainersCard key={trainer.email} trainer={trainer} />
        ))}
      </div>
    </div>
  );
}

export default Trainers;
