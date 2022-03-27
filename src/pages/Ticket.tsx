import React, { FC } from "react";

const Ticket: FC<{ ticket: any }> = ({ ticket }) => {
  console.log(ticket);

  const seatNumber = parseInt(ticket.seatNumber);
  const price = parseInt(ticket.ticketPrice);
  const gameName = ticket.gamename;
  const day = parseInt(ticket.day);
  const month = parseInt(ticket.month);
  const year = parseInt(ticket.year);
  // const category = categorize(seatNumber)

  return (
    <div className="m-4 flex items-center justify-center">
      <div className="flex h-[300px] w-[200px] flex-col justify-between rounded-xl drop-shadow-xl bg-white">
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
    </div>
  );
};

export default Ticket;
