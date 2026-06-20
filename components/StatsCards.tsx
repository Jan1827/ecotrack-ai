type Props = {
  total: number;
};

export default function StatsCards({ total }: Props) {
  let ecoLevel = "Explorer";
  let ecoColor = "text-yellow-600";

  if (total < 200) {
    ecoLevel = "Green Hero";
    ecoColor = "text-green-600";
  } else if (total < 400) {
    ecoLevel = "Explorer";
    ecoColor = "text-yellow-600";
  } else {
    ecoLevel = "Carbon Heavy";
    ecoColor = "text-red-600";
  }

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      <div
        className="bg-white p-5 rounded-xl shadow"
        aria-label="Carbon Footprint Card"
      >
        <p className="text-gray-500 text-sm">
          Carbon Footprint
        </p>

        <h3 className="text-3xl font-bold text-green-600">
          {total.toFixed(0)}
        </h3>

        <p className="text-sm text-gray-500">
          kg CO₂
        </p>
      </div>

      <div
        className="bg-white p-5 rounded-xl shadow"
        aria-label="Reduction Goal Card"
      >
        <p className="text-gray-500 text-sm">
          Reduction Goal
        </p>

        <h3 className="text-3xl font-bold text-blue-600">
          20%
        </h3>
      </div>

      <div
        className="bg-white p-5 rounded-xl shadow"
        aria-label="Eco Level Card"
      >
        <p className="text-gray-500 text-sm">
          Eco Level
        </p>

        <h3 className={`text-2xl font-bold ${ecoColor}`}>
          {ecoLevel}
        </h3>
      </div>
    </div>
  );
}