import React from "react";
import {Card,SectionTitle,Icon,PageTransition} from "../components";
const services=[
 ["Bank transfer","Send money securely to any bank account.","Send","ArrowUpRight"],
 ["Pay bills","Manage utilities, subscriptions and recurring bills.","Pay now","ReceiptText"],
 ["Mobile deposit","Deposit a check directly from your phone.","Deposit","ScanLine"],
 ["Currency exchange","Exchange currencies at competitive rates.","Exchange","RefreshCcw"],
 ["Statements","Download monthly account statements.","View","FileText"],
 ["Support center","Get help from a banking specialist.","Contact","Headphones"]
];
export default function Services(){return <PageTransition><main className="page"><div className="welcome-row"><div><span className="eyebrow">Explore</span><h1>Services</h1><p>Everything you need to manage your money, all in one place.</p></div></div><div className="service-grid">{services.map(([title,text,action,icon],i)=><Card className="service-card" key={title}><div className={`service-icon s${i}`}><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p><button className="text-action">{action}<Icon name="ArrowUpRight"/></button></Card>)}</div><Card className="service-banner"><div><span className="eyebrow">BankDash.Assist</span><h2>Have a question?<br/>We’re here 24/7.</h2><p>Get answers, explore products or talk to a real banking specialist.</p><button className="primary-btn">Start a conversation <Icon name="MessageCircle"/></button></div><div className="support-art"><Icon name="Headphones" size={72}/></div></Card></main></PageTransition>}
