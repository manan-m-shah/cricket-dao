import React, { useState } from "react";
import { useWeb3Context } from "../../context/Web3Context";
import BuyTickets from "./BuyTickets";
import ChangeLineup from "./ChangeLineup";

/*
Functionalities to include:
1. Purchase Tickets
2. Change Team Lineup
*/

const NewProposal = () => {
  const options = {
    buyTickets: "buyTickets",
    changeLineup: "changeLineup",
  };

  const [option, setOption] = useState(options.buyTickets);
  const { showLineup, changeLineup } = useWeb3Context();
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-start">
        <button className="" onClick={() => setOption(options.buyTickets)}>
          Buy Tickets
        </button>
        <button className="" onClick={() => setOption(options.changeLineup)}>
          Change Lineup
        </button>
      </div>
      {option === options.buyTickets ? <BuyTickets /> : <ChangeLineup />}
    </div>
  );
};

export default NewProposal;
