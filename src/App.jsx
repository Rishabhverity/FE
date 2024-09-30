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
import AccountDashboard from "./pages/AccountsDashboard";
import Main from "./pages/TrainerMain";
import MoreDetails from "./pages/MoreDetails"
import MoreDetails3 from "./pages/MoreDetails3"
import MoreDetails4 from "./pages/MoreDetails4"
import MoreDetails5 from "./pages/MoreDetails5"
import MoreDetails7 from "./pages/MoreDetails7"
import MoreDetails9 from "./pages/MoreDetails9"
import Calendar from "./pages/Calendar";
import SimpleCalendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import AttendancePage from "./pages/Attendance";

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
          <Route path="accounts-dashboard" element={<AccountDashboard/>}/>
          <Route path="/trainer-dashboard" element={<Layout/>}>
          <Route index={true} element={<Main/>} />
          <Route path='attendance' element={<AttendancePage />} />
          <Route path="MoreDetails" element={<MoreDetails/>}/>
          <Route path="MoreDetails3" element={<MoreDetails3/>}/>
          <Route path="MoreDetails4" element={<MoreDetails4/>}/>
          <Route path="MoreDetails5" element={<MoreDetails5/>}/>
          <Route path="MoreDetails7" element={<MoreDetails7/>}/>
          <Route path="MoreDetails9" element={<MoreDetails9/>}/>
          <Route path="Calendar" element={<Calendar/>}/>
          <Route path="SimpleCalendar" element={<SimpleCalendar/>}/>
          <Route path="Profile" element={<Profile/>}/>
          
          </Route>
      </Routes>
    </div>
  );
}

