"use client";

import AIInsights from "./AIInsights";
import GoalTracker from "./GoalTracker";
import CarbonChart from "./CarbonChart";
import CarbonScore from "./CarbonScore";
import StatsCards from "./StatsCards";
import DownloadReport from "./DownloadReport";


import { useState } from "react";

export default function CalculatorForm() {
  const [electricity, setElectricity] = useState("");
  const [vehicleKm, setVehicleKm] = useState("");
  const [flights, setFlights] = useState("");

  const [result, setResult] = useState<number | null>(null);

  const [electricityEmission, setElectricityEmission] = useState(0);
const [transportEmission, setTransportEmission] = useState(0);
const [flightEmission, setFlightEmission] = useState(0);

const calculate = () => {
  const e = Math.max(0, Number(electricity) || 0);
  const t = Math.max(0, Number(vehicleKm) || 0);
  const f = Math.max(0, Number(flights) || 0);

  const electricityValue = e * 0.82;
  const transportValue = t * 0.21;
  const flightValue = f * 90;

  const total =
    electricityValue +
    transportValue +
    flightValue;

  setElectricityEmission(electricityValue);
  setTransportEmission(transportValue);
  setFlightEmission(flightValue);

  setResult(total);
};


  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Carbon Calculator
      </h2>

      <label htmlFor="electricity" className="block mb-1 font-medium">
  Electricity Units
</label>

<input
  id="electricity"
  type="number"
  aria-label="Electricity Units"
  className="border p-2 w-full mb-3 rounded"
  value={electricity}
  onChange={(e) => setElectricity(e.target.value)}
/>

      <label htmlFor="vehicleKm" className="block mb-1 font-medium">
  Vehicle KM
</label>

<input
  id="vehicleKm"
  type="number"
  aria-label="Vehicle Kilometers"
  className="border p-2 w-full mb-3 rounded"
  value={vehicleKm}
  onChange={(e) => setVehicleKm(e.target.value)}
/>

      <label htmlFor="flights" className="block mb-1 font-medium">
  Flights Taken
</label>

<input
  id="flights"
  type="number"
  aria-label="Flights Taken"
  className="border p-2 w-full mb-3 rounded"
  value={flights}
  onChange={(e) => setFlights(e.target.value)}
/>

      <button
        onClick={calculate}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Calculate
      </button>
      {result !== null && (
  <>
    <div className="mt-4 p-4 bg-green-100 rounded">
      <h3 className="font-bold">
        Estimated Carbon Footprint
      </h3>

      <p className="text-xl">
        {result.toFixed(2)} kg CO₂
      </p>
    </div>

    <CarbonScore total={result} />
    <StatsCards total={result} />
    <CarbonChart
  electricity={electricityEmission}
  transport={transportEmission}
  flights={flightEmission}
/>
<GoalTracker currentEmission={result} />
<AIInsights
  electricity={electricityEmission}
  transport={transportEmission}
  flights={flightEmission}
/>
<DownloadReport total={result} />
  </>
)}

    </div>
  );
}