import Features from "./features";

export default function Home() {
  return (
    <div className="h-lvh font-[family-name:var(--font-geist-sans)] bg-white  text-gray-700 px-4 py-10">
      <h1 className="text-xl font-semibold text-gray-950 mb-24">active</h1>
      <div className="mb-4">
        <Features />
      </div>
      <p className="text-xs text-gray-500 text-center">
        For the best experience, please use Safari to view this site.
      </p>
      <footer className="row-start-3 text-xs fixed bottom-4 left-1/2 -translate-x-1/2 bg-white">
        <p>&copy; 2024 Active</p>
      </footer>
    </div>
  );
}
