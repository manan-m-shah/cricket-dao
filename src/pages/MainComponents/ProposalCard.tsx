import { FC } from "react";
import className from "classnames";
import { useWeb3Context } from "../../context/Web3Context";

// type IProposalCard = {
//   // ! Make Proposal Tital required
//   propsalTital?: string;
//   pending: boolean;
//   passed?: boolean;
//   leading?: boolean;
//   timeLeft?: number;
// };

const ProposalCard = ({
  proposal,
  enacted,
}: {
  proposal: any;
  enacted: true;
}) => {
  const { vote, handleExecute } = useWeb3Context();

  //todo proposal card with following properties
  const votes = proposal.votes;
  //*0=pending 1=active 2=cancelled 3=defeated 4-succeeded 5-queded 6-expired 7-excecuted
  const state = proposal.state;
  const hasVotes = proposal.hasVoted;
  const title = proposal.title;
  const abstainVotes = parseInt(votes.abstainVotes);
  const againstVotes = parseInt(votes.againstVotes);
  const forVotes = parseInt(votes.forVotes);
  const id = proposal.id;

  const handleVote = (voteWay: Number) => {
    vote(proposal.id, voteWay);
  };

  return (
    <div className="flex flex-col card p-4 m-4 rounded-xl">
      <div className="w-full flex flex-col flex-1 ">
        <h1 className="text-2xl text-gray-800 p-2">{title}</h1>
        {/* <h1 className="text-lg text-gray-700 p-2">{String(id)}</h1> */}
        <h1 className="text-md text-gray-700 p-2">Swap Player#23 with Player #2</h1>
      </div>

      {!enacted ? (
        <div className="flex w-full justify-around mt-4">
          <button
            className="px-20 py-4 text-yellow-800 bg-yellow-100"
            onClick={() => vote(proposal.id, 2)}
          >
            Abstain
          </button>
          <button
            className="px-20 py-4 text-red-800 bg-red-100"
            onClick={() => vote(proposal.id, 0)}
          >
            Vote Against
          </button>
          <button
            className="px-20 py-4 text-green-800 bg-green-100"
            onClick={() => vote(proposal.id, 1)}
          >
            Vote For
          </button>
        </div>
      ) : (
        <div>
          <button className="px-10 bg-green-200" onClick={handleExecute}>
            Execute
          </button>
        </div>
      )}
    </div>
    // <div className="card">
    //   <h1 className="proposal">Proposal Tital Lorem ipsum dolor sit.</h1>
    //   <div className="row2">
    //     <span className="leading">
    //       {className({
    //         leading: pending,
    //         result: !pending,
    //       })}
    //       : &nbsp;
    //     </span>
    //     <span className="leading-or-not">
    //       {className({
    //         // no:PENDING
    //         yes: pending && leading,
    //         no: pending && !leading,
    //         passed: !pending && passed,
    //         rejected: !pending && !passed,
    //       })}
    //     </span>
    //   </div>
    //   <div className="row3">
    //     <div
    //       className={className("status", {
    //         pending: pending,
    //         passed: !pending && passed,
    //         rejected: !pending && !passed,
    //       })}
    //     >
    //       {className({
    //         active: pending,
    //         passed: !pending && passed,
    //         rejected: !pending && !passed,
    //       })}
    //     </div>
    //     <div className={className("time-left status", { pending: pending })}>
    //       {pending ? `Ending in ${timeLeft ?? 0} days` : "Ended"}
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProposalCard;
