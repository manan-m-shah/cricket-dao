import React, { useEffect, useState } from "react";
import playersData from "../../lib/players.json";
import PlayerCard from "./PlayerCard";

const Team = () => {
  const [players, setPlayers] = useState(playersData);

  return (
    <div className="flex item-center justify-center w-full">
      <div className="p-4 grid grid-cols-2 place-items-center">
        {players.map((player) => {
          return (
            <PlayerCard
              name={player.name}
              id={player._id}
              matches={player.matches}
              runs={player.runs}
              wickets={player.wickets}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
