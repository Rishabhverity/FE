// import Button from "./Button";

function Card({ title, content, footer }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 m-4 w-80 bg-gradient-to-tr from-indigo-600 to-purple-500 shadow-lg">
      <div className="bg-white rounded-xl p-4">
        <span className="text-xl font-bold mb-2 text-gray-800">{title}</span>
        <div className="text-base mb-4 text-gray-700">{content}</div>
        <div className="text-md text-right text-black mb-4">{footer}</div>
        <div className="flex justify-between gap-2">
          <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition-colors">
            Delete
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-md border border-gray-300 transition-colors">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
