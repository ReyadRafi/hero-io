export default function Home() {
  return (
    <div>

      {/* Banner */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold">
          We Build <span className="text-purple-600">Productive</span> Apps
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="https://play.google.com" className="border px-4 py-2 rounded">
            Google Play
          </a>
          <a href="https://apple.com/app-store" className="border px-4 py-2 rounded">
            App Store
          </a>
        </div>
      </section>

    </div>
  );
}