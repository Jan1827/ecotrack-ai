"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type Props = {
  electricity: number;
  transport: number;
  flights: number;
};

export default function CarbonChart({
  electricity,
  transport,
  flights,
}: Props) {
  const data = [
    {
      name: "Electricity",
      value: electricity || 0,
    },
    {
      name: "Transport",
      value: transport || 0,
    },
    {
      name: "Flights",
      value: flights || 0,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#3b82f6",
    "#f59e0b",
  ];

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg mt-6"
      aria-label="Carbon Emission Chart"
    >
      <h2 className="text-xl font-bold mb-4">
        Emission Breakdown
      </h2>

      <p className="text-gray-500 mb-4">
        Distribution of emissions across
        electricity, transport, and flights.
      </p>

      <div className="w-full" style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}