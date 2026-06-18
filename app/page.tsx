import CalculatorForm from "../components/CalculatorForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-green-700">
            EcoTrack AI 🌱
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            Track, Understand & Reduce Your Carbon Footprint
          </p>

          <p className="mt-2 text-gray-500">
            Personalized sustainability insights powered by AI
          </p>
        </div>

        <CalculatorForm />

      </div>
    </main>
  );
}