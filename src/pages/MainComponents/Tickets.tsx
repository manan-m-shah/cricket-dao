import { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const Tickets = () => {
  const [date, setDate] = useState<Date>();
  const now = new Date();
  const futureLimit = new Date(
    now.getFullYear(),
    now.getMonth() + 2,
    now.getDate()
  );
  return (
    <>
      <DayPicker
        canChangeMonth={true}
        selectedDays={date}
        disabledDays={{
          before: now,
          after: futureLimit,
        }}
        onDayClick={(day) => {
          setDate(day);
        }}
      />
    </>
  );
};

export default Tickets;
