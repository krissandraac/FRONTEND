import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InventoryDashboard from "./pages/inventoryDashboard";
import ExitClearanceSystem from "./pages/ExitClearanceSystem";
import UserList from "./pages/userList";
import MenuInventory from "./pages/menuInventory";
import InventoryUserList from "./pages/inventoryUserlist";

function App() {
    return (
        <Router>
            <Routes>;
                <Route path="/" element={<Home />} />
                <Route path="/inventory-dashboard" element={<InventoryDashboard />} />
                <Route path="/exitclearance-login" element={<ExitClearanceSystem />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/menu-inventory" element={<MenuInventory />} />
                <Route path="/inventory-userlist" element={<InventoryUserList />} />
            </Routes>
        </Router>
    );
}

export default App;


