import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../ui/LoadingSpinner"; // Import the loading spinner component

const Login = () => {
  const [user, setUser] = useState("Assigner");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To handle error messages
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();


  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/TrainingApp/users/",
        { email, password, role: user },
        { withCredentials: true }
      );

      const userData = response.data;

      if (userData && userData.role) {
        switch (userData.role) {
          case "Assigner":
            navigate("/assigner");
            break;
          case "Trainer":
            navigate("/trainer-dashboard");
            break;
          case "Accounts":
            navigate("/accounts-dashboard");
            break;
          default:
            setErrorMessage("Invalid user role");
        }
      } else {
        setErrorMessage("No user data returned. Please try again.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-8 mx-4">
        <h1 className="font-bold text-center text-4xl mb-8">Login as</h1>

        {isLoading ? (
          <LoadingSpinner /> // Show the spinner when loading
        ) : (
          <>
            <div className="flex flex-col md:flex-row justify-around mb-8 text-xl">
              <label
                htmlFor="assigner"
                className="flex items-center mb-2 md:mb-0"
              >
                <input
                  id="assigner"
                  type="radio"
                  name="user"
                  value="Assigner"
                  checked={user === "Assigner"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Assigner
              </label>
              <label
                htmlFor="trainer"
                className="flex items-center mb-2 md:mb-0"
              >
                <input
                  id="trainer"
                  type="radio"
                  name="user"
                  value="Trainer"
                  checked={user === "Trainer"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Trainer
              </label>
              <label htmlFor="accounts" className="flex items-center">
                <input
                  id="accounts"
                  type="radio"
                  name="user"
                  value="Accounts"
                  checked={user === "Accounts"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Accounts
              </label>
            </div>

            {/* Email and Password Fields */}
            <div className="flex flex-col mb-6">
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="mb-1 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 text-lg">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Display error message */}
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}

            {/* Clear and Submit Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                className="px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <p className="mt-6 text-center text-gray-700">
          Create an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
