import StatsCard from "../components/dashboard/statsCard";
import { UserRound, UserRoundPlus, BriefcaseBusiness, Clock } from "lucide-react";
import Charts from "../components/dashboard/pie-chart";

export default function dashboardpage(){
    const stats = [
        {
            id: 1,
            name: "Total Balance",
            icon: <UserRound className="text-green-500"/>,
            value:0
        },
        {
            id: 2,
            name: "Income",
            icon:<UserRoundPlus className="text-green-500" />,
            value: 5
        },
        {
            id: 3,
            name: "Net Profit",
            icon: <BriefcaseBusiness className="text-green-500" />,
            value: 3
        },
        {
            id: 4,
            name: "Total Expences",
            icon: <Clock className="text-green-500" />,
            value: "95%"
        }
    ];
    return(
        <div className="p-4 border border-solid border-red-500 h-screen flex flex-col">  
            {/* Header Text */}
            <header className="flex justify-between mb-5 border border-solid border-red-500 ">
                <div>
                    <h1 className="font-bold">Dashboard</h1>
                    <p className="text-gray-500">Welcome back, Name. Here's what's happening today.</p>
                </div>

                <div>
                    <button className="">BUTTON</button>
                    <button className="">BUTTON</button>
                    <button className="">BUTTON</button>
                </div>
            </header>

            {/* Stat Cards */}
            <div className="flex gap-5 justify-between card-container border border-solid border-blue-500">
                {stats.map( (i) => (
                    <StatsCard
                        key={i.id}
                        name={i.name}
                        icon={i.icon}
                        value={i.value}
                    />
                ))}
            </div>
            
            {/* Statistic graph */}
            <div>
                <Charts/>
            </div>

        </div>
    );

}