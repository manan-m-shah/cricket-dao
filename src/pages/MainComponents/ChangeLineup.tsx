import { exit } from "process";
import React, { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/Web3Context";
import playersData from "../../lib/players.json";
import PlayerCard from "./PlayerCard";

const ChangeLineup = () => {
  const [players, setPlayers] = useState(playersData);
  const { team, setTeam, fetchTeam } = useWeb3Context();
  const [newTeam, setNewTeam] = useState(() => fetchTeam());
  const [exitPlayer, setExitPlayer] = useState(null);
  const [enterPlayer, setEnterPlayer] = useState(null);

  if (!team) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-around items-start">
        <div className="w-1/2 bg-red-200">
          {exitPlayer ? (
            <PlayerCard
              name={exitPlayer.name}
              id={exitPlayer._id}
              matches={exitPlayer.matches}
              runs={exitPlayer.runs}
              wickets={exitPlayer.wickets}
            />
          ) : null}
        </div>
        <div className="w-1/2 bg-green-200">
          {enterPlayer ? (
            <PlayerCard
              name={enterPlayer.name}
              id={enterPlayer._id}
              matches={enterPlayer.matches}
              runs={enterPlayer.runs}
              wickets={enterPlayer.wickets}
            />
          ) : null}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="px-20 m-4 self-center bg-gray-500 text-gray-100">
          Propose Change
        </button>
      </div>
      <div className="w-full flex justify-center items-start">
        <div className="w-1/2 p-8 pt-2">
          {players.map((player) => {
            if (team.includes(player._id)) {
              if (!exitPlayer) {
                setExitPlayer(player);
              }
              return (
                <div onClick={() => setExitPlayer(player)}>
                  <PlayerCard
                    name={player.name}
                    id={player._id}
                    matches={player.matches}
                    runs={player.runs}
                    wickets={player.wickets}
                  />
                </div>
              );
            }
          })}
        </div>
        <div className="w-1/2 p-8 pt-2">
          {players.map((player) => {
            if (!team.includes(player._id)) {
              if (!enterPlayer) {
                setEnterPlayer(player);
              }
              return (
                <div onClick={() => setEnterPlayer(player)}>
                  <PlayerCard
                    name={player.name}
                    id={player._id}
                    matches={player.matches}
                    runs={player.runs}
                    wickets={player.wickets}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ChangeLineup;
