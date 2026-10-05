import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import {AreaChart,Area,ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip,PieChart,Pie,Cell} from "recharts";
import {Card,StatCard,SectionTitle,AccountCard,TransactionRow,MiniBars,Donut,TransferModal,Icon,PageTransition} from "../components";
import {accounts,transactions} from "../data";

const activity=[{m:"Jan",v:420},{m:"Feb",v:530},{m:"Mar",v:470},{m:"Apr",v:690},{m:"May",v:580},{m:"Jun",v:820},{m:"Jul",v:710},{m:"Aug",v:930},{m:"Sep",v:780},{m:"Oct",v:880}];
const expense=[{n:"Housing",v:34},{n:"Food",v:24},{n:"Transport",v:17},{n:"Fun",v:25}];

export default function Dashboard(){
 const [transfer,setTransfer]=useState(false);
 const nav=useNavigate();
 return <PageTransition><main className="page">
  <div className="welcome-row"><div><span className="eyebrow">Monday, October 5, 2026</span><h1>Good morning, Sandeep <span></span></h1><p>Here’s your financial snapshot for today.</p></div><button className="primary-btn" onClick={()=>setTransfer(true)}><Icon name="Send" size={16}/> Transfer money</button></div>
  <div className="stat-grid">
   <StatCard label="Total balance" value="$16,796.40" change={8.6} icon="WalletCards" tone="green" note="from last month"/>
   <StatCard label="Monthly income" value="$7,240.00" change={12.4} icon="ArrowDownToLine" tone="teal" note="from last month"/>
   <StatCard label="Monthly spending" value="$2,384.62" change={-4.8} icon="ArrowUpFromLine" tone="orange" note="from last month"/>
   <StatCard label="Investments" value="$118,250" change={14.2} icon="TrendingUp" tone="purple" note="portfolio return"/>
  </div>

  <div className="dashboard-grid top-grid">
   <Card className="cards-panel"><SectionTitle title="My cards" action={{label:"See all",to:"/cards"}}/>
    <div className="bank-card-preview">
      <div><span>BankDash.</span><Icon name="Contactless"/></div><b>$3,760.00</b><div className="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 1234</div><small>Sandeep S <span>09/28</span></small>
    </div>
    <div className="balance-row"><div><span>Available credit</span><b>$8,240.00</b></div><div><span>Payment due</span><b>Oct 18</b></div></div>
   </Card>
   <Card className="activity-card"><SectionTitle title="Recent activity" action={{label:"View all",to:"/transactions"}}/>
    <div className="recent-list">{transactions.slice(0,4).map(tx=><TransactionRow key={tx.id} tx={tx} onClick={()=>nav("/transactions/"+tx.id)}/>)}</div>
   </Card>
  </div>

  <div className="dashboard-grid analytics-grid">
   <Card className="chart-card"><SectionTitle eyebrow="Cash flow" title="Weekly activity"/><div className="chart-legend"><span><i className="dot income"/>Income</span><span><i className="dot expense"/>Expenses</span><select><option>Last 10 months</option><option>Last 30 days</option></select></div>
    <div className="chart-large"><ResponsiveContainer width="100%" height="100%"><AreaChart data={activity}><defs><linearGradient id="cash" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2c9c83" stopOpacity=".25"/><stop offset="100%" stopColor="#2c9c83" stopOpacity="0"/></linearGradient></defs><XAxis dataKey="m" axisLine={false} tickLine={false}/><YAxis axisLine={false} tickLine={false}/><Tooltip/><Area type="monotone" dataKey="v" stroke="#2c9c83" fill="url(#cash)" strokeWidth={3}/></AreaChart></ResponsiveContainer></div>
   </Card>
   <Card className="expense-card"><SectionTitle title="Expense statistics"/><div className="donut-center"><Donut percent={68} label="Budget used"/><div className="expense-list">{expense.map((x,i)=><div key={x.n}><span><i className={`dot c${i}`}/>{x.n}</span><b>{x.v}%</b></div>)}</div></div></Card>
  </div>

  <div className="dashboard-grid lower-grid">
   <Card><SectionTitle title="Quick transfer"/><div className="people-row">{["Lina Baker","Henry Peters","Wilson"].map((x,i)=><button key={x} className="person"><div className={`person-avatar p${i}`}>{x[0]}</div><span>{x}</span></button>)}<button className="person add-person"><Icon name="Plus"/><span>Add</span></button></div><button className="wide-secondary" onClick={()=>setTransfer(true)}>Send money <Icon name="ArrowUpRight"/></button></Card>
   <Card><SectionTitle title="Balance history" action={{label:"Details",to:"/accounts"}}/><div className="balance-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={activity}><XAxis dataKey="m" hide/><YAxis hide/><Area type="monotone" dataKey="v" stroke="#7a6dd8" fill="#7a6dd8" fillOpacity=".1" strokeWidth={2}/></AreaChart></ResponsiveContainer></div><div className="history-foot"><b>$16,796.40</b><span>+8.6% this month</span></div></Card>
  </div>
  <TransferModal open={transfer} onClose={()=>setTransfer(false)}/>
 </main></PageTransition>
}
