import { ethers } from "ethers";
import { FC } from "react";
import { useWeb3Context } from "../../context/Web3Context";

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

  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);

  return (
    <div
      className="m-8 h-fit w-fit flex flex-col items-center justify-center rounded-xl drop-shadow-xl bg-white border-gray-300 border-2"
      style={{
        backgroundImage: `linear-gradient(135deg, #${randomColor}, white)`,
      }}
    >
      <div className="flex h-[300px] w-[200px] flex-col justify-between ">
        <div className="flex h-1/3 justify-start">
          <div className="p-10 text-5xl outline-baby">{seatNumber}</div>
        </div>
        <div className="flex h-1/3 w-full justify-center p-10">
          <div className="text-3xl text-black">{gameName}</div>
        </div>
        <div className="flex h-1/3 w-full justify-end">
          <div className="p-10">{year + "/" + month + "/" + day}</div>
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
