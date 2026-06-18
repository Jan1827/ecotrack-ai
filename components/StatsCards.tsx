type Props = {
  total: number;
};

export default function StatsCards({ total }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      <div className="bg-white p-5 rounded-xl shadow">
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

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">
          Reduction Goal
        </p>

        <h3 className="text-3xl font-bold text-blue-600">
          20%
        </h3>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <p className="text-gray-500 text-sm">
          Eco Level
        </p>

        <h3 className="text-2xl font-bold text-yellow-600">
          Explorer
        </h3>
      </div>
    </div>
  );
}