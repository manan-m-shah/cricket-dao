import React, { FC } from 'react'

const Ticket: FC<{ ticket: any }> = ({ ticket }) => {
  console.log(ticket)

  const seatNumber = parseInt(ticket.seatNumber)
  const price = parseInt(ticket.ticketPrice)
  const gameName = ticket.gamename
  const day = parseInt(ticket.day)
  const month = parseInt(ticket.month)
  const year = parseInt(ticket.year)
  // const category = categorize(seatNumber)

  return (
    <div className="m-4 flex w-full items-center justify-center">
      <div className="flex h-[300px] w-[200px] flex-col justify-between rounded-xl bg-gradient-to-b from-violet-800 to-gray-800">
        <div className="flex h-1/3 justify-start">
          <div className="w-1/3 p-10 text-4xl text-gray-200">{seatNumber}</div>
        </div>
        <div className="flex h-1/3 w-full justify-center p-10">
          <div className="w-1/3 text-3xl text-gray-200">{gameName}</div>
        </div>
        <div className="flex h-1/3 w-full justify-end">
          <div className="w-1/3 p-10 text-gray-200">
            {year + '/' + month + '/' + day}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
