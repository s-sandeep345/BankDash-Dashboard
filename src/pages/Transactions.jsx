import React,{useMemo,useState} from "react";
import {useNavigate,useSearchParams} from "react-router-dom";
import {Card,SectionTitle,TransactionRow,PageTransition,Icon,EmptyState} from "../components";
import {transactions} from "../data";

export default function Transactions(){
 const nav=useNavigate(); const [params]=useSearchParams();
 const [filter,setFilter]=useState("All"); const [query,setQuery]=useState(params.get("search")||"");
 const list=useMemo(()=>transactions.filter(t=>(filter==="All"||t.type===filter||t.status.toLowerCase()===filter.toLowerCase())&&(t.name.toLowerCase().includes(query.toLowerCase())||t.category.toLowerCase().includes(query.toLowerCase()))),[filter,query]);
 return <PageTransition><main className="page">
  <div className="welcome-row"><div><span className="eyebrow">Activity</span><h1>Transactions</h1><p>Track every payment, transfer and deposit in one place.</p></div><button className="primary-btn"><Icon name="Download" size={16}/> Export</button></div>
  <div className="stat-grid three"><Card className="summary-card"><span>Total this month</span><b>$2,384.62</b><small className="positive">↓ 4.8% lower</small></Card><Card className="summary-card"><span>Income</span><b>$7,240.00</b><small className="positive">↑ 12.4%</small></Card><Card className="summary-card"><span>Transactions</span><b>84</b><small>12 pending</small></Card></div>
  <Card className="table-card">
   <div className="filter-row"><div className="inline-search"><Icon name="Search"/><input placeholder="Search transactions..." value={query} onChange={e=>setQuery(e.target.value)}/></div><div className="filters">{["All","income","expense","Pending"].map(x=><button key={x} className={filter===x?"filter-active":""} onClick={()=>setFilter(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}</div></div>
   <div className="table-head"><span>Transaction</span><span>Status</span><span>Amount</span><span/></div>
   {list.length?list.map(tx=><TransactionRow key={tx.id} tx={tx} onClick={()=>nav("/transactions/"+tx.id)}/>):<EmptyState title="No transactions found" text="Try changing your search or filters."/>}
  </Card>
 </main></PageTransition>
}
