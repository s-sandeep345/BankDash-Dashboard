export const transactions=[
 {id:"TX-10482",name:"Spotify Subscription",category:"Entertainment",date:"Oct 04, 2026",time:"09:42 AM",amount:-12.99,status:"Completed",type:"expense",initial:"S",color:"mint"},
 {id:"TX-10481",name:"Salary Credit",category:"Income",date:"Oct 03, 2026",time:"08:20 AM",amount:5750,status:"Completed",type:"income",initial:"SC",color:"green"},
 {id:"TX-10480",name:"Whole Foods Market",category:"Groceries",date:"Oct 02, 2026",time:"06:14 PM",amount:-84.42,status:"Completed",type:"expense",initial:"W",color:"orange"},
 {id:"TX-10479",name:"Adobe Creative Cloud",category:"Services",date:"Oct 01, 2026",time:"10:18 AM",amount:-59.99,status:"Completed",type:"expense",initial:"A",color:"red"},
 {id:"TX-10478",name:"Transfer from Savings",category:"Transfer",date:"Sep 30, 2026",time:"02:30 PM",amount:700,status:"Completed",type:"income",initial:"T",color:"teal"},
 {id:"TX-10477",name:"Uber",category:"Transport",date:"Sep 29, 2026",time:"09:12 PM",amount:-27.60,status:"Pending",type:"expense",initial:"U",color:"purple"},
 {id:"TX-10476",name:"Netflix",category:"Entertainment",date:"Sep 28, 2026",time:"07:30 PM",amount:-15.49,status:"Completed",type:"expense",initial:"N",color:"black"},
 {id:"TX-10475",name:"Freelance Payment",category:"Income",date:"Sep 27, 2026",time:"11:00 AM",amount:1240,status:"Completed",type:"income",initial:"FP",color:"blue"}
];

export const accounts=[
 {id:"checking",name:"Everyday Checking",number:"•••• 1234",balance:5756.40,type:"Checking",available:5312.20,rate:"0.15%",color:"green"},
 {id:"savings",name:"Growth Savings",number:"•••• 7821",balance:9200.00,type:"Savings",available:9200,rate:"4.25%",color:"teal"},
 {id:"travel",name:"Travel Wallet",number:"•••• 4410",balance:1840.75,type:"Savings",available:1840.75,rate:"2.80%",color:"orange"}
];

export const investments=[
 {name:"Apple Inc.",ticker:"AAPL",value:55420,change:12.8,shares:72,color:"blue"},
 {name:"Microsoft",ticker:"MSFT",value:32980,change:8.4,shares:58,color:"purple"},
 {name:"Vanguard ETF",ticker:"VOO",value:21650,change:5.7,shares:42,color:"green"},
 {name:"Tesla",ticker:"TSLA",value:8200,change:-2.1,shares:19,color:"red"}
];

export const cards=[
 {name:"BankDash.Platinum",number:"•••• 1234",limit:12000,used:3760,color:"dark",due:"Oct 18",status:"Active"},
 {name:"Travel Rewards",number:"•••• 8890",limit:8000,used:2180,color:"sand",due:"Oct 22",status:"Active"}
];

export const loans=[
 {name:"Home Renovation Loan",type:"Personal",principal:42000,paid:16800,next:"Oct 15, 2026",monthly:740,rate:"6.9%"},
 {name:"Auto Loan",type:"Vehicle",principal:18500,paid:9200,next:"Oct 12, 2026",monthly:520,rate:"5.4%"}
];

export const menu=[
 {label:"Dashboard",to:"/",icon:"LayoutDashboard"},
 {label:"Transactions",to:"/transactions",icon:"ArrowLeftRight"},
 {label:"Accounts",to:"/accounts",icon:"WalletCards"},
 {label:"Investments",to:"/investments",icon:"TrendingUp"},
 {label:"Credit Cards",to:"/cards",icon:"CreditCard"},
 {label:"Loans",to:"/loans",icon:"Landmark"},
 {label:"Services",to:"/services",icon:"Grid2X2"},
 {label:"My Privileges",to:"/privileges",icon:"Gift"},
 {label:"Settings",to:"/settings",icon:"Settings"}
];