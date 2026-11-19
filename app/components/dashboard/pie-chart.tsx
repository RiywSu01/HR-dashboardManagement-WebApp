"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  { name: "Malware", value: 400 },
  { name: "Phishing", value: 300 },
  { name: "DDoS", value: 200 },
  { name: "Brute Force", value: 100 },
]

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
]

export default function DashboardPieChart() {
  return (
    <Card className="border border-solid border-blue-500">
      <CardHeader>
        <CardTitle>Threat Distribution</CardTitle>
        <CardDescription>
          Detected threats by category
        </CardDescription>
      </CardHeader>

      <CardContent className=" border border-solid border-red-500">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}