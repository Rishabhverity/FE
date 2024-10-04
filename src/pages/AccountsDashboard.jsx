import AccountsTable from "../components/AccountsTable";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";




export default function AccountDashboard() {
  return (
    <div className='flex'>
      <Sidebar />
      

      <div className="App">
      <Header/>
 
      <div className="App">
      <AccountsTable />
    </div>

</div>
    </div>

    
    
  )
}
