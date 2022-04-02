import React, { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { useWeb3Context } from "../../context/Web3Context";

const BuyTickets = () => {
  const { currentDate, setCurrentDate, addTicket, submitProposalForTickets } =
    useWeb3Context();

  const [gameName, setGameName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const now = new Date();
  const futureLimit = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate()
  );

  return (
    <div className="w-full h-full justify-around items-center flex">
      <div className="border-2 p-8 rounded-xl">
        <DayPicker
          canChangeMonth={true}
          selectedDays={currentDate}
          disabledDays={{
            before: now,
            after: futureLimit,
          }}
          onDayClick={(day) => {
            setCurrentDate({
              date: day.getDate(),
              month: day.getMonth() + 1,
              year: day.getFullYear(),
            });
          }}
        />
      </div>
      <div>
        <div className="flex flex-col justify-center items-center border-2 border-gray-200 p-6 rounded-xl">
          <h1 className="text-2xl text-gray-600">Details</h1>
          <input
            className="w-full text-gray-600 p-6 text-xl m-2 border-gray-200 border-2 rounded-xl"
            type="text"
            placeholder="Game Name"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <input
            className="w-full text-gray-600 p-6 text-xl m-2 border-gray-200 border-2 rounded-xl"
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            className="w-full text-gray-600 p-6 text-xl m-2 border-gray-200 border-2 rounded-xl"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            className="w-full m-2 bg-gray-500 text-gray-100 text-xl p-4 rounded-xl"
            onClick={() => submitProposalForTickets()}
          >
            Propose
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyTickets;
