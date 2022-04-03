import { FC } from "react";
import className from "classnames";
import { useWeb3Context } from "../../context/Web3Context";

type IProposalCard = {
  // ! Make Proposal Tital required
  propsalTital?: string;
  pending: boolean;
  passed?: boolean;
  leading?: boolean;
  timeLeft?: number;
};

const ProposalCard: FC<IProposalCard> = ({ proposal }) => {
  const { vote } = useWeb3Context();

  //todo proposal card with following properties
  const votes = proposal.votes;
  const state = proposal.state;
  const hasVotes = proposal.hasVoted;

  const handleVote = (voteWay: Number) => {
    vote(proposal.id, voteWay);
  };

  return (
    <div className="card">
      <h1 className="proposal">Proposal Tital Lorem ipsum dolor sit.</h1>
      <div className="row2">
        {/* <span className="leading">
          {className({
            leading: pending,
            result: !pending,
          })}
          : &nbsp;
        </span>
        <span className="leading-or-not">
          {className({
            // no:PENDING
            yes: pending && leading,
            no: pending && !leading,
            passed: !pending && passed,
            rejected: !pending && !passed,
          })}
        </span>
      </div>
      <div className="row3">
        <div
          className={className("status", {
            pending: pending,
            passed: !pending && passed,
            rejected: !pending && !passed,
          })}
        >
          {className({
            active: pending,
            passed: !pending && passed,
            rejected: !pending && !passed,
          })}
        </div>
        <div className={className("time-left status", { pending: pending })}>
          {pending ? `Ending in ${timeLeft ?? 0} days` : "Ended"}
        </div> */}
      </div>
    </div>
  );
};

export default ProposalCard;
