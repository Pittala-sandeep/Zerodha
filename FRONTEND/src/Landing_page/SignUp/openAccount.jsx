export default function OpenAccount() {
  return (
    <section className="bg-light py-5 text-center">
      <h2>Steps to open a demat account with Zerodha</h2>
      <div className="container mt-4 d-flex">
        <div className="col-6">
          <img src="/images/account.png" alt="account" />
        </div>
        <div className="col-6 my-5 py-5">
          <ul className="list-group list-group-flush bg-light">
            <li className="list-group-item bg-light fs-4">Enter the requested details</li>
            <li className="list-group-item bg-light fs-4">Complete e-sign & verification</li>
            <li className="list-group-item bg-light fs-4">Start investing!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
