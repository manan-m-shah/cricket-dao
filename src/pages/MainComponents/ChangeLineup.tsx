import React, { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/Web3Context";
import playersData from "../../lib/players.json";
import { propose } from "../../scripts/propose";
import PlayerCard from "./PlayerCard";

const ChangeLineup = () => {
  const [players, setPlayers] = useState(playersData);
  const { team, setTeam, fetchTeam } = useWeb3Context();
  const [exitPlayer, setExitPlayer] = useState(null);
  const [enterPlayer, setEnterPlayer] = useState(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  if (!team) {
    return (
      <div className="h-sceen w-screen flex justify-center items-center">
        <h1>Loading</h1>
      </div>
    );
  }

  const propose = () => {
    let newTeam = team;
    newTeam.map((id: Number) => {
      if (id === enterPlayer._id) {
        return exitPlayer._id;
      } else {
        return id;
      }
    });
    setTeam(newTeam);
    console.log(team);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
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
        <button
          className="px-20 m-4 self-center bg-gray-500 text-gray-100"
          onClick={propose}
        >
          Propose Change
        </button>
      </div>
      <div className="border-2 border-gray-500 w-1/2 border-dashed" />
      <div className="w-full flex justify-center items-start">
        <div className="w-1/2 p-8 pt-2 flex items-center justify-center flex-col">
          <h1 className="text-2xl text-gray-600 border-gray-400 border-b-2">
            Lineup
          </h1>
          {players.map((player) => {
            let style = "";
            if (team.includes(player._id)) {
              if (!exitPlayer) {
                setExitPlayer(player);
              } else if (exitPlayer._id === player._id) {
                style = "bg-red-200 p-1";
              }

              return (
                <div onClick={() => setExitPlayer(player)} className={style}>
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
        <div className="w-1/2 p-8 pt-2 flex items-center justify-center flex-col">
          <h1 className="text-2xl text-gray-600 border-gray-400 border-b-2">
            Reserve
          </h1>
          {players.map((player) => {
            if (!team.includes(player._id)) {
              let style = "";
              if (!enterPlayer) {
                setEnterPlayer(player);
              } else if (enterPlayer._id === player._id) {
                style = "bg-green-200 p-1";
              }

              return (
                <div onClick={() => setEnterPlayer(player)} className={style}>
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
