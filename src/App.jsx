import { Route, Routes } from "react-router-dom";
import AssignerDashboard from "./pages/AssignerHomePage";
import Trainers from "./pages/Trainers";
import Layout from "./ui/layout";
import Accounts from "./pages/Accounts";
import Attendance from "./pages/Attendance";
import Logout from "./pages/Logout";
import Login from "./Auth/login";
import Signup from "./Auth/SignUp";
import ProtectedRoute from "./Auth/ProtectedRoute";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="Logout" element={<Logout />} />
        <Route path="signup" element={<Signup />} />

        
        <Route path="/assigner" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<> <AssignerDashboard /> </>} />
          <Route path="Trainers" element={<> <Trainers /> </>} />
          <Route path="Accounts" element={<> <Accounts /> </>} />
          <Route path="Attendance" element={<> <Attendance /> </>} />
            
          </Route>
          
      </Routes>
    </div>
  );
}

