import React from "react";

const Home = () => {
  return (
    <>
      {/* <div className='bg-[url("/src/assets/images/ai.jpg")] backdrop-brightness-50 h-[calc(100vh-48px)] bg-cover bg-center'>
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
          <h2 className="title-text tracking-wide text-3xl md:text-5xl lg:text-7xl text-center">
            Welcome to the Future of <br /> Artificial Intelligence <br />
            and Technology Services
          </h2>
        </div>
      </div> */}

      <div
        className="hero bg-cover bg-center  h-[calc(100vh-56px)]"
        style={{backgroundImage: `url("/src/assets/images/ai.jpg")`,}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl lg:max-w-4xl">
            <h1 className="-mt-20 lg:-mt-32 text-6xl lg:text-7xl font-bold title-text">
              Welcome to the Future of Artificial Intelligence and Technology
              Services
            </h1>
            <p className="mb-5 pt-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
