import { Route, Routes } from "react-router-dom";
import AssignerDashboard from "./pages/AssignerHomePage";
import Trainers from "./pages/Trainers";
import Layout from "./ui/layout";
import Accounts from "./pages/Accounts";
import Attendance from "./pages/Attendance";
import Logout from "./pages/Logout";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<AssignerDashboard />} />
          <Route path="Trainers" element={<Trainers />} />
          <Route path='Accounts' element={ <Accounts/>} />
          <Route path='Attendance' element={<Attendance />} />
          <Route path='Logout' element={<Logout/> } />
        </Route>
      </Routes>
    </div>
  );
}
