import React from "react";
import {useNavigate} from "react-router-dom";
import {AreaChart,Area,ResponsiveContainer,XAxis,YAxis,Tooltip} from "recharts";
import {Card,SectionTitle,StatCard,PageTransition,Icon} from "../components";
import {investments} from "../data";
const chart=[{m:"Jan",v:92000},{m:"Feb",v:96400},{m:"Mar",v:101000},{m:"Apr",v:98000},{m:"May",v:108000},{m:"Jun",v:111000},{m:"Jul",v:109500},{m:"Aug",v:115000},{m:"Sep",v:116800},{m:"Oct",v:118250}];
export default function Investments(){
 const nav=useNavigate();
 return <PageTransition><main className="page">
  <div className="welcome-row"><div><span className="eyebrow">Wealth</span><h1>Investments</h1><p>Your portfolio at a glance, with performance and allocation insights.</p></div><button className="primary-btn"><Icon name="Plus" size={16}/> Invest</button></div>
  <div className="stat-grid three"><StatCard label="Portfolio value" value="$118,250" change={14.2} icon="BriefcaseBusiness" tone="green"/><StatCard label="Today's return" value="+$1,284" change={2.1} icon="TrendingUp" tone="teal"/><StatCard label="Total return" value="+$18,420" change={18.4} icon="ChartNoAxesCombined" tone="purple"/></div>
  <div className="dashboard-grid investment-grid"><Card className="chart-card"><SectionTitle title="Portfolio performance" action={{label:"1Y",to:"/investments"}}/><div className="range-row">{["1D","1W","1M","6M","1Y","ALL"].map(x=><button className={x==="1Y"?"range-active":""} key={x}>{x}</button>)}</div><div className="chart-invest"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chart}><defs><linearGradient id="inv" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2c9c83" stopOpacity=".28"/><stop offset="100%" stopColor="#2c9c83" stopOpacity="0"/></linearGradient></defs><XAxis dataKey="m" axisLine={false} tickLine={false}/><YAxis hide/><Tooltip/><Area type="monotone" dataKey="v" stroke="#2c9c83" fill="url(#inv)" strokeWidth={3}/></AreaChart></ResponsiveContainer></div></Card>
  <Card><SectionTitle title="Allocation"/><div className="allocation"><div className="allocation-ring"/><div className="allocation-list"><span><i className="alloc a1"/>Stocks <b>58%</b></span><span><i className="alloc a2"/>ETFs <b>24%</b></span><span><i className="alloc a3"/>Bonds <b>12%</b></span><span><i className="alloc a4"/>Cash <b>6%</b></span></div></div></Card></div>
  <Card><SectionTitle title="My investments" action={{label:"Markets",to:"/investments"}}/><div className="investment-table">{investments.map((x,i)=><button className="investment-row" key={x.ticker} onClick={()=>nav("/investments/"+x.ticker)}><div className={`stock-logo ${x.color}`}>{x.ticker[0]}</div><div><b>{x.name}</b><span>{x.shares} shares · {x.ticker}</span></div><strong>${x.value.toLocaleString()}</strong><span className={x.change>0?"positive":"negative"}>{x.change>0?"+":""}{x.change}%</span><Icon name="ChevronRight"/></button>)}</div></Card>
 </main></PageTransition>
}
