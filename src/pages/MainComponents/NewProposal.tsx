import React, { useState } from "react";
import { useWeb3Context } from "../../context/Web3Context";
import BuyTickets from "./AddTickets";
import ChangeLineup from "./ChangeLineup";

/*
Functionalities to include:
1. Purchase Tickets
2. Change Team Lineup
*/

const NewProposal = () => {
  const options = {
    addTicket: "addTicket",
    changeLineup: "changeLineup",
  };

  const [option, setOption] = useState(options.addTicket);
  const { showLineup, changeLineup } = useWeb3Context();
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-start">
        <div
          className="text-xl p-2 text-gray-600 border-b-2 m-2 drop-shadow-none hover:border-gray-800"
          onClick={() => setOption(options.addTicket)}
        >
          Add Tickets
        </div>
        <div
          className="text-xl p-2 text-gray-600 border-b-2 m-2 drop-shadow-none hover:border-gray-800"
          onClick={() => setOption(options.changeLineup)}
        >
          Change Lineup
        </div>
      </div>
      {option === options.addTicket ? <BuyTickets /> : <ChangeLineup />}
    </div>
  );
};

export default NewProposal;
