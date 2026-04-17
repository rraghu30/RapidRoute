import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Dashboard & Ops Pages
import Dashboard from "./pages/Dashboard";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Trucks from "./pages/Trucks";
import Drivers from "./pages/Drivers";
import Carriers from "./pages/Carriers";
import Cargo from "./pages/Cargo";
import Address from "./pages/Address";
import ShipmentDashboard from "./pages/ShipmentDashboard";

import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";


import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected layout routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/carriers" element={<Carriers />} />
          <Route path="/cargo" element={<Cargo />} />
          <Route path="/addresses" element={<Address />} />
          <Route path="/shipments" element={<ShipmentDashboard />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;