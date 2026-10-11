export default function Home() {
  return (
    <main className="graph-paper min-h-screen">
      <div className="container-page py-20">
        <p className="eyebrow text-cobalt">
          TSA Webmaster 2026–2027
        </p>

        <h1 className="mt-4 text-display-xl font-extrabold">
          Welcome to{" "}
          <span className="highlight">Tokenline.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-2">
          Learn how AI works, use it well, and responsibly.
        </p>

        <div className="mt-10 flex gap-3">
          <div className="h-4 w-24 rounded-full bg-cobalt" />
          <div className="h-4 w-24 rounded-full bg-tangerine" />
          <div className="h-4 w-24 rounded-full bg-emerald" />
        </div>
      </div>
    </main>
  );
}