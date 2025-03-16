const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen bg-gradient-to-b from-blue-500 via-purple-400 to-white"
    >
      <div className="hero-overlay bg-opacity-60 bg-black max-w-[calc(100%-500px)] h-80 rounded-lg"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold bg-gradient-to-b from-blue-500 via-sky-400 to-white bg-clip-text text-transparent">404</h1>
          <p className="mb-5 text-3xl text-white">
            Oops! The page you are looking for could not be found.
          </p>
          <button className="btn bg-gradient-to-b from-blue-500 via-sky-400 to-white text-black border-none" onClick={() => window.location.href = '/'}>
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;