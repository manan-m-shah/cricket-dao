import Typewriter from "typewriter-effect";
import vote from "../images/vote.png";
import people from "../images/people.png";
import tokens from "../images/tokens.png";
import { useNavigate } from "react-router-dom";

const TypewriterSection = () => {
  return (
    <Typewriter
      options={{ loop: true }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Welcome to the best sports dao")
          .pauseFor(1000)
          .deleteAll()
          .typeString("The cricketing world in your hands")
          .pauseFor(1000)
          .deleteAll()
          .typeString("We will sell NFTS in the future!")
          .pauseFor(1000)
          .start();
      }}
    />
  );
};

const LandingPageFirstSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 lmao-bg">
      <div className="">
        <h1 className="text-center text-8xl text-gray-200">BCCI DAO</h1>
        <h3 className="p-10 text-center text-2xl text-gray-200">
          <TypewriterSection />
        </h3>
        <div className="flex items-center justify-center">
          <button className="mr-6" onClick={() => navigate("/tickets")}>
            Get Tickets
          </button>
          <button className="mr-6" onClick={() => navigate("/proposals")}>
            Launch App
          </button>
          <button onClick={() => navigate("/team")}>Our Team</button>
        </div>
      </div>
    </div>
  );
};

const Section = ({
  img,
  title,
  description,
  flip,
}: {
  img: any;
  title: string;
  description: string;
  flip: boolean;
}) => {
  if (flip) {
    return (
      <div className="grid h-screen w-screen grid-rows-2 bg-white p-6 md:grid-cols-2 md:grid-rows-1">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="px-10 font-mono text-6xl text-gray-600 mb-5">{title}</h1>
          <h3 className="px-10 text-2xl text-gray-600">{description}</h3>
        </div>
        <img
          src={img}
          alt="image"
          className="w-[80%] self-center justify-self-center bg-auto"
        />
      </div>
    );
  } else {
    return (
      <div className="px- grid h-screen w-screen grid-rows-2 bg-white p-6 md:grid-cols-2 md:grid-rows-1">
        <img
          src={img}
          alt="image"
          className="w-[80%] self-center justify-self-center bg-auto"
        />
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="px-10 font-mono text-6xl text-gray-600 mb-5">{title}</h1>
          <h3 className="px-10 text-2xl text-gray-600">{description}</h3>
        </div>
      </div>
    );
  }
};

const LandingPage = () => {
  return (
    <div className="bg-white">
      <div>
        <LandingPageFirstSection />
        <Section
          img={vote}
          title="What is the BCCI DAO?"
          description='DAO stands for "Decentralized Autonomous Organization". The Cricket DAO owns a great team of 25 players.'
          flip={false}
        />
        <Section
          img={people}
          title="Why has the DAO been created?"
          description="This DAO gives you the power to select the team lineup and also sell tickets. "
          flip={true}
        />
        <Section
          img={tokens}
          title="How does the DAO work?"
          description="Voting takes place for a week which gives the users the power to select team lineup and also influence price of tickets. (All while enjoying the sport!!)"
          flip={false}
        />
      </div>
    </div>
  );
};

export default LandingPage;
