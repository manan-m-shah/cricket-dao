import { ethers } from "ethers";
import React, { FC } from "react";
import { useWeb3Context } from "../context/Web3Context";

const Ticket: FC<{ ticket: any }> = ({ ticket }) => {
  console.log(ticket);
  const { buyTicket } = useWeb3Context();
  const seatNumber = parseInt(ticket.seatNumber);
  const price = ethers.utils.formatEther(ticket.ticketPrice);
  const gameName = ticket.gamename;
  const day = parseInt(ticket.day);
  const month = parseInt(ticket.month);
  const year = parseInt(ticket.year);
  // const category = categorize(seatNumber)

  return (
    <div className="m-6 h-fit w-fit flex flex-col items-center justify-center rounded-xl drop-shadow-xl bg-white border-gray-300 border-2">
      <div className="flex h-[300px] w-[200px] flex-col justify-between ">
        <div className="flex h-1/3 justify-start">
          <div className="p-10 text-4xl text-gray-400">{seatNumber}</div>
        </div>
        <div className="flex h-1/3 w-full justify-center p-10">
          <div className="text-3xl text-gray-400">{gameName}</div>
        </div>
        <div className="flex h-1/3 w-full justify-end">
          <div className="p-10 text-gray-400">
            {year + "/" + month + "/" + day}
          </div>
        </div>
      </div>
      <div
        className="p-4 rounded-b-xl bg-gray-200 text-gray-600 w-full justify-center items-center flex"
        onClick={() => buyTicket(gameName, seatNumber, price)}
      >
        {price + " ETH"}
      </div>
    </div>
  );
};

export default Ticket;
