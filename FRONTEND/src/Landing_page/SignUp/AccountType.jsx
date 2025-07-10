export default function AccountType() {
  return (
    <section className="bg-light py-5 text-center">
      <h2>Explore different account types</h2>
      <div className="container mt-4">
        <div className="row g-4">
          {[
            [
              "Individual Account",
              "Invest in equity, mutual funds and derivatives",
            ],
            ["HUF Account", "Make tax-efficient investments for your family"],
            [
              "NRI Account",
              "Invest in equity, mutual funds, debentures, and more",
            ],
            [
              "Minor Account",
              "Teach your little ones about money & invest for their future",
            ],
            [
              "Corporate / LLP/ Partnership",
              "Manage business surplus and investments easily",
            ],
          ].map(([title, desc], i) => (
            <div className="col-md-4" key={i}>
              <div className="border rounded p-3 h-100 shadow-sm">
                <h5>{title}</h5>
                <p className="text-muted small">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
