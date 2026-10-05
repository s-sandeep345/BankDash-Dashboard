import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";
import {Sidebar,Header,BottomNav} from "./components";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Privileges from "./pages/Privileges";
import Settings from "./pages/Settings";
import Detail from "./pages/Detail";

export default function App(){
 const [mobileOpen,setMobileOpen]=useState(false);
 const [collapsed,setCollapsed]=useState(false);
 return <div className={`app ${collapsed?"sidebar-space-small":""}`}>
  <Sidebar open={mobileOpen} onClose={()=>setMobileOpen(false)} collapsed={collapsed} setCollapsed={setCollapsed}/>
  <div className="app-main">
   <Header onMenu={()=>setMobileOpen(true)}/>
   <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/transactions" element={<Transactions/>}/>
    <Route path="/transactions/:id" element={<Detail type="transaction"/>}/>
    <Route path="/accounts" element={<Accounts/>}/>
    <Route path="/accounts/:id" element={<Detail type="account"/>}/>
    <Route path="/investments" element={<Investments/>}/>
    <Route path="/investments/:id" element={<Detail type="investment"/>}/>
    <Route path="/cards" element={<Cards/>}/>
    <Route path="/loans" element={<Loans/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/privileges" element={<Privileges/>}/>
    <Route path="/settings" element={<Settings/>}/>
   </Routes>
  </div>
  <BottomNav/>
 </div>;
}
