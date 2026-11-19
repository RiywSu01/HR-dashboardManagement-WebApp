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
  return (
  <div className="flex flex-col gap-6 p-6">

    {/* TOP */}
    <div className="grid grid-cols-4 gap-6">
      {stats.map( (i) => (
        <StatsCard
            key={i.id}
            name={i.name}
            icon={i.icon}
            value={i.value}
        />
      ))}
    </div>


    {/* MIDDLE */}
    <div className="grid grid-cols-[2fr_1fr] gap-6">
      <div className="border border-black">
        Statistics
        <Charts/>
      </div>

      <div className="border border-black">
        Recent Activities
      </div>
    </div>


    {/* BOTTOM */}
    <div className="grid grid-cols-[2fr_1fr] gap-6">
      <div className="h-[250px] border border-black">
        Overview
      </div>

      <div className="h-[250px] border border-black">
        Active Percentage
      </div>
    </div>

  </div>
    );

}