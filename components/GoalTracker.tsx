type Props = {
  currentEmission: number;
};

export default function GoalTracker({ currentEmission }: Props) {
  const target = 200;

  const progress = Math.min(
    100,
    Math.max(0, ((target / currentEmission) * 100))
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">
        Sustainability Goal 🎯
      </h2>

      <p className="mb-2">
        Target: Stay below {target} kg CO₂
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-600 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-gray-600">
        Progress: {progress.toFixed(0)}%
      </p>
    </div>
  );
}