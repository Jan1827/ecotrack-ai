type Props = {
  total: number;
};

export default function CarbonScore({ total }: Props) {
  let score = "";
  let color = "";

  if (total < 200) {
    score = "Green Hero 🟢";
    color = "text-green-600";
  } else if (total < 400) {
    score = "Eco Explorer 🟡";
    color = "text-yellow-600";
  } else {
    score = "Carbon Heavy 🔴";
    color = "text-red-600";
  }

  return (
    <div className="mt-6 p-5 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">
        Carbon Score
      </h2>

      <p className={`text-2xl font-bold ${color}`}>
        {score}
      </p>

      <p className="mt-2 text-gray-600">
        Total Emissions: {total.toFixed(2)} kg CO₂
      </p>
    </div>
  );
}