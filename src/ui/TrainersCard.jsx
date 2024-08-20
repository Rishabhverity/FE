

function TrainerCard({ trainer }) {
    return (
      <div className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white p-6 rounded-lg shadow-lg max-w-xs">
        <img
          src={trainer.profileImage}
          alt={`${trainer.name}'s profile`}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-center">{trainer.name}</h3>
        <p className="text-center text-base mt-2">
          <strong>Email:</strong> {trainer.email}
        </p>
        <p className="text-center text-base mt-2">
          <strong>Phone:</strong> {trainer.phone}
        </p>
        <p className="text-center text-base mt-2">
          <strong>Skill:</strong> {trainer.skill}
        </p>
      </div>
    );
}
  
export default TrainerCard;