import { trainersData } from "../data/trainers";
import TrainerCard from "../ui/TrainersCard";

function Trainers() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {trainersData.map((trainer) => (
        <TrainerCard key={trainer.email} trainer={trainer} />
      ))}
    </div>
  );
}

export default Trainers;
