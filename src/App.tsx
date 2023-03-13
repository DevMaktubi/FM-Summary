import "./styles/global.css";

function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-very-light-blue">
      <div className="flex md:flex-row flex-col md:w-[736px] w-full md:h-[512px] h-screen bg-white rounded-3xl p-0 m-0">
        <div className="md:max-w-[50%] bg-gradient-to-t from-gradient-1-from to-gradient-1-to flex flex-1 flex-col justify-around items-center rounded-3xl py-5">
          <h1 className="text-light-blue md:text-m text-body font-bold">
            Your Result
          </h1>
          <div className="md:h-[200px] h-[140px] md:w-[200px] w-[140px] rounded-full bg-gradient-to-t from-transparent to-gradient-2-to  flex flex-col items-center justify-center">
            <h1 className="md:text-xl text-[56px] text-white font-extrabold">
              76
            </h1>
            <p className="text-light-blue font-bold md:text-body text-base opacity-50">
              of 100
            </p>
          </div>
          <h2 className="text-m md:text-l text-white font-bold">Great</h2>
          <p className="md:text-body text-base text-light-blue max-w-[260px] text-center">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-around py-5 md:px-10 px-5 md:max-w-[50%]">
          <h2 className="md:text-m text-body text-dark-navy font-bold">
            Summary
          </h2>
          <div className="flex flex-col md:gap-4 gap-3">
            <div className="bg-red bg-opacity-5 flex justify-around items-center rounded-xl px-2 py-3">
              <img src="/assets/icon-reaction.svg" alt="icon" />
              <h3 className="text-red md:text-body text-base">Reaction</h3>
              <h3 className="text-bold font-bold text-dark-navy">
                <strong className="opacity-100">80</strong>
                <span className="opacity-50"> / 100</span>
              </h3>
            </div>
            <div className="bg-yellow bg-opacity-5 flex justify-around items-center rounded-xl px-2 py-3">
              <img src="/assets/icon-memory.svg" alt="icon" />
              <h3 className="text-yellow md:text-body text-base">Memory</h3>
              <h3 className="text-bold font-bold text-dark-navy">
                <strong className="opacity-100">92</strong>
                <span className="opacity-50"> / 100</span>
              </h3>
            </div>
            <div className="bg-green bg-opacity-5 flex justify-around items-center rounded-xl px-2 py-3">
              <img src="/assets/icon-verbal.svg" alt="icon" />
              <h3 className="text-green md:text-body text-base">Verbal</h3>
              <h3 className="text-bold font-bold text-dark-navy">
                <strong className="opacity-100">61</strong>
                <span className="opacity-50"> / 100</span>
              </h3>
            </div>
            <div className="bg-blue bg-opacity-5 flex justify-around items-center rounded-xl px-2 py-3">
              <img src="/assets/icon-visual.svg" alt="icon" />
              <h3 className="text-blue md:text-body text-base">Visual</h3>
              <h3 className="text-bold font-bold text-dark-navy">
                <strong className="opacity-100">73</strong>
                <span className="opacity-50"> / 100</span>
              </h3>
            </div>
          </div>
          <a
            href="#"
            className="bg-dark-navy text-white h-14 md:w-72 flex justify-center items-center text-bold rounded-full hover:bg-gradient-to-t from-gradient-1-from to-gradient-1-to"
          >
            Continue
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
