import StatsCard from "../components/statsCard";
import { UserRound, UserRoundPlus, BriefcaseBusiness, Clock } from "lucide-react";
export default function dashboardpage(){
    const stats = [
        {
            id: 1,
            name: "Total Employees",
            icon: <UserRound className="text-green-500"/>,
            value:0
        },
        {
            id: 2,
            name: "New Hires",
            icon:<UserRoundPlus className="text-green-500" />,
            value: 5
        },
        {
            id: 3,
            name: "Open Positions",
            icon: <BriefcaseBusiness className="text-green-500" />,
            value: 3
        },
        {
            id: 4,
            name: "Attendance Rate",
            icon: <Clock className="text-green-500" />,
            value: "95%"
        }
    ];
    return(
        <div className="p-4 border border-solid border-red-500 h-screen flex flex-col">  
            <header className="flex justify-between mb-5 border border-solid border-red-500 ">
                <div>
                    <h1 className="font-bold">Dashboard</h1>
                    <p className="text-gray-500">Welcome back, Name. Here's what's happening today.</p>
                </div>

                <div>
                    <button className="">add employee</button>
                    <button className="">post Job</button>
                    <button className="">Approve Leave</button>
                </div>
            </header>

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
        </div>
    );

}