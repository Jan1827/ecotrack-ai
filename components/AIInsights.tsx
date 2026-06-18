"use client";

import { useEffect, useState } from "react";

type Props = {
  electricity: number;
  transport: number;
  flights: number;
};

export default function AIInsights({
  electricity,
  transport,
  flights,
}: Props) {
  const [insight, setInsight] = useState("Generating AI insights...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInsights() {
      try {
        const response = await fetch("/api/insights", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            electricity,
            transport,
            flights,
          }),
        });

        const data = await response.json();

        setInsight(data.insight);
      } catch (error) {
        setInsight(
          "Unable to generate recommendations right now."
        );
      } finally {
        setLoading(false);
      }
    }

    getInsights();
  }, [electricity, transport, flights]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">
        AI Sustainability Coach 🤖
      </h2>

      {loading ? (
        <p>Generating AI insights...</p>
      ) : (
        <p className="whitespace-pre-line">
          {insight}
        </p>
      )}
    </div>
  );
}