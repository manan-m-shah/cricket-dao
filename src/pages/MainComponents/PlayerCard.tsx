import React from "react";
import { faces } from "../../images/faces";

const PlayerCard = ({
  name,
  id,
  matches,
  runs,
  wickets,
}: {
  name: string;
  id: number;
  matches: number;
  runs: number;
  wickets: number;
}) => {
  return (
    <div className="w-fit m-6 border-2 border-gray-400 flex">
      <div className="flex items-center justify-center w-1/3 bg-white">
        <img src={faces[id - 1]} alt="player" className="bg-contain" />
      </div>
      <div className="w-2/3 bg-gray-100 p-4 items-start flex flex-col">
        <h1 className="text-2xl text-gray-600 m-6 self-center">{name + id}</h1>
        <div className="flex-1 bg-gray-200 rounded-2xl w-full flex justify-around">
          <div className="flex flex-col justify-around">
            <h1 className="text-2xl text-gray-600">Matches</h1>
            <h1 className="text-2xl text-gray-600">Runs</h1>
            <h1 className="text-2xl text-gray-600">Wickets</h1>
          </div>
          <div className="flex flex-col justify-around">
            <h1 className="text-2xl text-gray-600">{matches}</h1>
            <h1 className="text-2xl text-gray-600">{runs}</h1>
            <h1 className="text-2xl text-gray-600">{wickets}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
