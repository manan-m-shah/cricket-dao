import { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { useWeb3Context } from "../../context/Web3Context";
import Ticket from "../Ticket";

const Tickets = () => {
  const { getTickets, tickets, date, setDate } = useWeb3Context();

  const now = new Date();
  const futureLimit = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate()
  );
  return (
    <div className="outlet">
      <div className="flex flex-wrap">
        <DayPicker
          canChangeMonth={true}
          selectedDays={date}
          disabledDays={{
            before: now,
            after: futureLimit,
          }}
          onDayClick={(day) => {
            setDate([day.getDate(), day.getMonth(), day.getFullYear()]);
            getTickets();
          }}
        />
        {/* <div className="m-2 grid md:grid-cols-2 rounded-lg sm:m-6 w-full"> */}
        {tickets.map((ticket: any) => {
          return <Ticket ticket={ticket} />;
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Tickets;
