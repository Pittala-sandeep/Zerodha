export default function Inverstime() {
  return (
    <section className="text-center py-5">
      <h2>Investment options with Zerodha demat account</h2>
      <div className="container mt-4">
        <div className="row g-4">
          {[
            {
              title: "Stocks",
              desc: "Invest in all exchange-listed securities",
              img:"/images/stock.png"
            },
            {
              title: "Mutual funds",
              desc: "Invest in commission-free direct mutual funds",
              img:"/images/mutual.png"
            },
            {
              title: "IPO",
              desc: "Apply to the latest IPOs instantly via UPI",
              img:"/images/ipo.png"
            },
            {
              title: "Futures & options",
              desc: "Hedge and mitigate market risk through simplified F&O trading",
              img:"/images/futures.png"
            },
          ].map((item, i) => (
            <div className="col-md-6 d-flex" key={i}>
              <div>
                <img src={item.img} alt="stock" />
              </div>
              <div className="mt-4 p-3 h-100 ">
                <h5>{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary mt-4">Explore Investments</button>
      </div>
    </section>
  );
}
