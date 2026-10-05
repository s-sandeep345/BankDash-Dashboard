import React,{useState} from "react";
import * as Icons from "lucide-react";
import {Link,useLocation,useNavigate} from "react-router-dom";
import {menu,transactions} from "./data";

export function Icon({name,size=18,...p}){const C=Icons[name]||Icons.Circle;return <C size={size} {...p}/>}

export function Avatar({name="Sandeep S",small=false}){
 return <div className={`avatar ${small?"avatar-sm":""}`}>{name.split(" ").map(x=>x[0]).join("").slice(0,2)}</div>
}

export function PageTransition({children}){return <div className="page-enter">{children}</div>}

export function Sidebar({open,onClose,collapsed,setCollapsed}){
 const loc=useLocation();
 return <>
  {open&&<button className="drawer-backdrop" onClick={onClose} aria-label="Close menu"/>}
  <aside className={`sidebar ${open?"sidebar-open":""} ${collapsed?"sidebar-collapsed":""}`}>
   <div className="brand">
    <div className="brand-mark"><Icon name="Landmark" size={18}/></div>
    {!collapsed&&<div><strong>BankDash.</strong><span>PRIVATE BANKING</span></div>}
    <button className="collapse-btn" onClick={()=>setCollapsed(!collapsed)}><Icon name={collapsed?"PanelLeftOpen":"PanelLeftClose"} size={17}/></button>
   </div>
   <div className="side-label">{!collapsed&&"MAIN MENU"}</div>
   <nav className="side-nav">
    {menu.map(item=><Link key={item.to} to={item.to} onClick={onClose} className={`side-link ${loc.pathname===item.to?"active":""}`}>
      <Icon name={item.icon}/>{!collapsed&&<span>{item.label}</span>}
      {!collapsed&&item.label==="Transactions"&&<span className="nav-badge">8</span>}
    </Link>)}
   </nav>
   {!collapsed&&<div className="side-help">
    <div className="help-icon"><Icon name="Headphones" size={17}/></div>
    <div><b>Need help?</b><span>Talk to support</span></div>
    <Icon name="ChevronRight" size={15}/>
   </div>}
   <div className="profile-mini">
    <Avatar small/>
    {!collapsed&&<><div className="profile-copy"><b>Sandeep S</b><span>Personal account</span></div><Icon name="MoreHorizontal" size={18}/></>}
   </div>
  </aside>
 </>;
}

export function Header({onMenu}){
 const [q,setQ]=useState("");
 const nav=useNavigate();
 const submit=e=>{e.preventDefault(); if(q.trim()) nav("/transactions?search="+encodeURIComponent(q));};
 return <header className="topbar">
  <button className="mobile-menu" onClick={onMenu}><Icon name="Menu"/></button>
  <div className="mobile-brand"><div className="brand-mark"><Icon name="Landmark" size={16}/></div><b>BankDash.</b></div>
  <form className="global-search" onSubmit={submit}><Icon name="Search" size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search transactions, accounts..."/><kbd>⌘ K</kbd></form>
  <div className="top-actions">
   <button className="top-icon"><Icon name="HelpCircle"/></button>
   <button className="top-icon notification"><Icon name="Bell"/><i/></button>
   <Avatar/>
  </div>
 </header>;
}

export function StatCard({label,value,change,icon="WalletCards",tone="green",note}){
 return <div className="stat-card hover-lift">
  <div className="stat-top"><span>{label}</span><div className={`stat-icon ${tone}`}><Icon name={icon}/></div></div>
  <strong>{value}</strong>
  <div className="stat-bottom">{change&&<span className={change>0?"positive":"negative"}>{change>0?"↗":"↘"} {Math.abs(change)}%</span>}<small>{note||"vs. last month"}</small></div>
 </div>
}

export function SectionTitle({eyebrow,title,action,icon}){
 return <div className="section-title"><div>{eyebrow&&<span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>{action&&<Link className="text-action" to={action.to}>{action.label}<Icon name={icon||"ArrowUpRight"} size={15}/></Link>}</div>
}

export function Card({children,className=""}){return <div className={`card ${className}`}>{children}</div>}

export function Money({value,plus=false}){return <span className={value>=0?"money-positive":"money-negative"}>{plus&&value>=0?"+":""}{value<0?"-":""}${Math.abs(value).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</span>}

export function MiniBars({values=[30,55,40,70,46,82,62,90],color="var(--accent)"}){
 return <div className="mini-bars">{values.map((v,i)=><span key={i} style={{height:`${v}%`,background:color}}/>)}</div>
}

export function AccountCard({account,onClick}){
 return <button className={`account-card tone-${account.color}`} onClick={onClick}>
  <div className="account-card-top"><span>{account.type}</span><Icon name="MoreHorizontal"/></div>
  <div className="account-name">{account.name}</div>
  <div className="account-number">{account.number}</div>
  <strong>${account.balance.toLocaleString(undefined,{minimumFractionDigits:2})}</strong>
  <div className="account-footer"><span>Available ${account.available.toLocaleString(undefined,{minimumFractionDigits:2})}</span><span>{account.rate}</span></div>
 </button>
}

export function TransactionRow({tx,onClick}){
 return <button className="tx-row" onClick={onClick}>
  <div className={`tx-avatar ${tx.color}`}>{tx.initial}</div>
  <div className="tx-main"><b>{tx.name}</b><span>{tx.category} · {tx.date}</span></div>
  <div className={`tx-status ${tx.status.toLowerCase()}`}>{tx.status}</div>
  <strong className={tx.amount>0?"money-positive":"money-negative"}>{tx.amount>0?"+":"-"}${Math.abs(tx.amount).toLocaleString(undefined,{minimumFractionDigits:2})}</strong>
  <Icon name="ChevronRight" className="row-chevron"/>
 </button>
}

export function EmptyState({icon="Inbox",title="Nothing here yet",text="New activity will appear here."}){
 return <div className="empty-state"><div><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></div>
}

export function Modal({open,onClose,title,children}){
 if(!open)return null;
 return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
  <div className="modal"><div className="modal-head"><h3>{title}</h3><button onClick={onClose}><Icon name="X"/></button></div>{children}</div>
 </div>
}

export function TransferModal({open,onClose}){
 const [done,setDone]=useState(false);
 return <Modal open={open} onClose={onClose} title={done?"Transfer scheduled":"Quick transfer"}>
  {done?<div className="success-box"><div><Icon name="Check"/></div><h3>Transfer scheduled</h3><p>Your $500 transfer will arrive tomorrow.</p><button className="primary-btn" onClick={()=>{setDone(false);onClose()}}>Done</button></div>:
  <form className="form" onSubmit={e=>{e.preventDefault();setDone(true)}}>
   <label>From<select><option>Everyday Checking •••• 1234</option><option>Growth Savings •••• 7821</option></select></label>
   <label>To<select><option>Growth Savings •••• 7821</option><option>Jordan Wilson •••• 4410</option></select></label>
   <label>Amount<input defaultValue="500" type="number"/></label>
   <label>Note<input placeholder="What's this for?"/></label>
   <button className="primary-btn" type="submit">Review transfer <Icon name="ArrowRight" size={16}/></button>
  </form>}
 </Modal>;
}

export function Donut({percent=68,label="Spending"}){
 return <div className="donut-wrap"><div className="donut" style={{"--pct":`${percent}%`}}><div><b>{percent}%</b><span>{label}</span></div></div></div>
}

export function Progress({value}){return <div className="progress"><span style={{width:`${value}%`}}/></div>}

export function BottomNav(){
 const loc=useLocation();
 return <nav className="bottom-nav">{menu.slice(0,4).map(x=><Link key={x.to} className={loc.pathname===x.to?"active":""} to={x.to}><Icon name={x.icon}/><span>{x.label.split(" ")[0]}</span></Link>)}</nav>;
}
