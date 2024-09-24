import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

function AccountsTable() {
  const [data, setData] = useState([]); // Initial state is an empty array
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [accountToDelete, setAccountToDelete] = useState(null); // Store the account to be deleted

  // Function to format the date to 'dd-mm-yyyy'
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Fetch accounts data from backend on component mount
  useEffect(() => {
    const fetchAccountsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/TrainingApp/accounts");
        setData(response.data); // Update state with the fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching accounts data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchAccountsData(); // Fetch data when the component mounts
  }, []);

  const handleFileUpload = async (e, index, field) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("accountId", data[index]._id); // Include the account ID
  
      try {
        const res = await axios.post(
          `http://localhost:5000/TrainingApp/upload/${field}`, // Backend route for file uploads
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
  
        const newData = [...data];
        if (field === "purchaseOrder") {
          newData[index].purchase_order = res.data.fileUrl;
        } else if (field === "invoice") {
          newData[index].invoice = res.data.fileUrl;
        }
  
        setData(newData); // Update the state with new file URLs
      } catch (error) {
        console.error("Error uploading file", error);
      }
    }
  };
  

  const handleDelete = async () => {
    try {
      // Make DELETE request to the backend
      await axios.delete(`http://localhost:5000/TrainingApp/accounts/${accountToDelete._id}`);
      // Remove the deleted account from the frontend
      setData(data.filter((item) => item._id !== accountToDelete._id));
      // Close the modal after successful deletion
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-blue-50 w-full">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-6">Client Name</th>
            <th className="py-3 px-6">Purchase Order</th>
            <th className="py-3 px-6">Invoice</th>
            <th className="py-3 px-6">Date</th>
            <th className="py-3 px-6">Fee Status</th>
            <th className="py-3 px-6">Fee Overdue Duration (Days)</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-gray-700">
              <td className="py-4 px-6">{item.clientName || "N/A"}</td>
              <td className="py-4 px-6">
  {item.purchaseOrder ? (
    <div className="flex items-center space-x-4">
      <a
        href={`http://localhost:5000${item.purchaseOrder}`}
        className="text-blue-500 underline flex items-center"
        download
      >
        View / Download
      </a>
    </div>
  ) : (
    <input
      type="file"
      accept="application/pdf"
      className="hidden"
      id={`purchaseOrder-${index}`}
      onChange={(e) => handleFileUpload(e, index, "purchaseOrder")}
    />
  )}
  <label
    htmlFor={`purchaseOrder-${index}`}
    className={`${
      item.purchaseOrder ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
    } text-white px-4 py-2 rounded-md cursor-pointer`}
  >
    {item.purchaseOrder ? "Uploaded" : "Upload"}
  </label>
</td>

<td className="py-4 px-6">
  {item.invoice ? (
    <div className="flex items-center space-x-4">
      <a
        href={`http://localhost:5000${item.invoice}`}
        className="text-blue-500 underline flex items-center"
        download
      >
        View / Download
      </a>
    </div>
  ) : (
    <input
      type="file"
      accept="application/pdf"
      className="hidden"
      id={`invoice-${index}`}
      onChange={(e) => handleFileUpload(e, index, "invoice")}
    />
  )}
  <label
    htmlFor={`invoice-${index}`}
    className={`${
      item.invoice ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
    } text-white px-4 py-2 rounded-md cursor-pointer`}
  >
    {item.invoice ? "Uploaded" : "Upload"}
  </label>
</td>

              <td className="py-4 px-6">{item.date ? formatDate(item.date) : "N/A"}</td>
              <td
                className={`py-4 px-6 font-semibold ${
                  item.feePaid ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.feePaid ? "Paid" : "Not Paid"}
              </td>
              <td className="py-4 px-6">
                {item.feeOverdueDuration || "N/A"}
              </td>
              <td className="py-4 px-6">
                {/* Delete Icon */}
                <button>
                <MdDelete color="red" onClick={() => {
                  setAccountToDelete(item);
                  setShowModal(true);
                  }} />
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Modal */}
      {showModal && accountToDelete && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete <strong>{accountToDelete.clientName}</strong> from accounts?</p>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={handleDelete}
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

export default AccountsTable;
