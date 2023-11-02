function Curriculum() {
  const pr = ["First", "Second", "Third", "Fourth"];
  return (
    <main className="max-w-7xl mx-auto p-5">
      <h1 className="font-bold text-4xl">
        Curriculum - Information Technology
      </h1>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {pr.map((p) => (
          <div className="border p-5" key={p}>
            <p className="font-semibold text-xl">
              {p} Year - Information Technology
            </p>
            <div className="space-y-3 mt-4">
              <p>Subject</p>
              <p>Subject</p>
              <p>Subject</p>
              <p>Subject</p>
              <p>Subject</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Curriculum;
