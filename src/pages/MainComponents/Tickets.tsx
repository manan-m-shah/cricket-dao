import { useEffect, useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { useWeb3Context } from "../../context/Web3Context";
import Ticket from "../Ticket";

const Tickets = () => {
  const { getTickets, tickets, currentDate, setCurrentDate, addTicket } =
    useWeb3Context();
  const [gameName, setGameName] = useState("test");
  const [amount, setAmount] = useState("0.1");
  const [seatNumber, setSeatNumber] = useState("1");

  const now = new Date();
  const futureLimit = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate()
  );

  useEffect(() => {
    console.log("getting tickets...");
    getTickets();
  }, [currentDate]);

  return (
    <div className="outlet tickets">
      <div className="flex flex-wrap">
        <div className="flex flex-col border-2 p-8 rounded-xl">
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
          {/* <div className="m-2 grid md:grid-cols-2 rounded-lg sm:m-6 w-full"> */}
          {/* <div>
            <div>
              <h1>Enter details</h1>
              <input
                type="text"
                placeholder="game name"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
              />
              <input
                type="text"
                placeholder="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                type="text"
                placeholder="seatNumber"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
              />
            </div>
          </div> */}
          <button onClick={getTickets}>Refresh</button>
        </div>
        {tickets.map((ticket: any) => {
          return <Ticket ticket={ticket} />;
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Tickets;
