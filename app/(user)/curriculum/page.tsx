function Curriculum() {
  const pr = ["First", "Second", "Third", "Fourth"];
  const subjects = [ 
    { title : "IRS",
      link : "/"
  },
  { title : "SAD",
      link : "/"
  },
  { title : "IOE",
      link : "/"
  },
  { title : "DS",
      link : "/"
  }
  ]
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
            <div className="space-y-3 mt-4 flex flex-col">
              {
                subjects.map((subject)=>(
                  <a key={subject.title} href={subject.link}>
                    {
                      subject.title 
                    }
                  </a>
                ))
              }
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Curriculum;
