export default function Benefits() {
  return (
    <section className="py-5 text-center">
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <img src="/images/benefits.png" alt="benefits" />
          </div>
          <div className="col-6">
            {[
              {
                title: "Unbeatable pricing",
                desc: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
              },
              {
                title: "Best investing experience",
                desc: "Simple and intuitive trading platform with an easy-to-understand user interface.",
              },
              {
                title: "No spam or gimmicks",
                desc: "Committed to transparency — no gimmicks, spam, or intrusive push notifications.",
              },
              {
                title: "The Zerodha universe",
                desc: "Gain free access to the entire ecosystem of our partner products.",
              },
            ].map((item, i) => (
              <div className="col-md-10 mb-4 text-start" key={i}>
                <h5 className="lh-lg">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
