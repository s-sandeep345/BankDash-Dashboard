import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import {Card,SectionTitle,AccountCard,StatCard,Modal,PageTransition,Icon} from "../components";
import {accounts} from "../data";

export default function Accounts(){
 const nav=useNavigate(); const [add,setAdd]=useState(false);
 return <PageTransition><main className="page">
  <div className="welcome-row"><div><span className="eyebrow">Banking</span><h1>Accounts</h1><p>Manage your cash, savings and everyday money.</p></div><button className="primary-btn" onClick={()=>setAdd(true)}><Icon name="Plus" size={16}/> Add account</button></div>
  <div className="stat-grid three"><StatCard label="Total balance" value="$16,796.40" change={8.6} icon="Wallet" tone="green"/><StatCard label="Available today" value="$16,352.95" change={3.2} icon="CircleDollarSign" tone="teal"/><StatCard label="Interest earned" value="$182.40" change={18.4} icon="Sparkles" tone="purple"/></div>
  <SectionTitle eyebrow="Your money" title="All accounts"/>
  <div className="account-grid">{accounts.map(a=><AccountCard key={a.id} account={a} onClick={()=>nav("/accounts/"+a.id)}/>)}</div>
  <div className="dashboard-grid detail-grid"><Card><SectionTitle title="Money movement"/><div className="movement"><div><Icon name="ArrowDownLeft"/><b>$7,240</b><span>Money in</span></div><div><Icon name="ArrowUpRight"/><b>$2,384</b><span>Money out</span></div><div><Icon name="Repeat2"/><b>$700</b><span>Transfers</span></div></div></Card><Card><SectionTitle title="Savings goal"/><div className="goal"><div className="goal-icon"><Icon name="Plane"/></div><div><b>Japan trip</b><span>$1,840 of $3,000</span></div><strong>61%</strong></div><div className="progress"><span style={{width:"61%"}}/></div><button className="text-action">Add money <Icon name="ArrowUpRight"/></button></Card></div>
  <Modal open={add} onClose={()=>setAdd(false)} title="Add a new account"><form className="form" onSubmit={e=>{e.preventDefault();setAdd(false)}}><label>Account type<select><option>Savings account</option><option>Checking account</option><option>Travel wallet</option></select></label><label>Account name<input defaultValue="My new account"/></label><button className="primary-btn">Create account</button></form></Modal>
 </main></PageTransition>
}
