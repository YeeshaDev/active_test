import ButtonLink from "@/components/button-link";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* App Name */}
      <header className="row-start-1 text-center">
        <h1 className="text-4xl font-bold">Active-Testing</h1>
        <p className="text-lg mt-2">Select a test to begin</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Color Test Button */}
        <ButtonLink
          href="/color"
          className="bg-slate-100 text-gray-900 w-36 py rounded-md hover:bg-gray-200 hover:shadow-lg transition-all duration-300"
        >
          Color
        </ButtonLink>
        {/* Touch Test Button */}
        <ButtonLink
          href="/touch"
          className="bg-slate-100 text-gray-900 w-36 py rounded-md hover:bg-gray-200 hover:shadow-lg transition-all duration-300"
        >
          Touch
        </ButtonLink>
      </main>

      {/* Footer */}
      <footer className="row-start-3 text-sm">
        <p>&copy; 2024 Active-Testing</p>
      </footer>
    </div>
  );
}
