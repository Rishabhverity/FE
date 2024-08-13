
import AssignerDashboard from "./pages/assigner/AssignerDashboard";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";

export default function App() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />

        <div>
        <Header />
        <AssignerDashboard />
        </div>
    </div>
  )
}

