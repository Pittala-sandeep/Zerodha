import SignUp from "./Signup";

export default function Hero() {
  return (
    <div className="container  my-5">
      <h1 className="lh-lg fw-semibold text-center">
        Open a free demat and trading account online
      </h1>
      <p className="lead text-center">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>

      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-5">
          <img
            src="/images/signup.png"
            alt="Kite preview"
            className="img-fluid"
            style={{ height: 380, width: 550 }}
          />
        </div>
        <div className="col-1"></div>
        <SignUp />
      </div>
    </div>
  );
}