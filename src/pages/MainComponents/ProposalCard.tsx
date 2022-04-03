import { FC } from "react";
import className from "classnames";

type IProposalCard = {
  // ! Make Proposal Tital required
  propsalTital?: string;
  pending: boolean;
  passed?: boolean;
  leading?: boolean;
  timeLeft?: number;
};

const ProposalCard: FC<IProposalCard> = ({ proposal }) => {
  // const votes = proposal.votes;
  // const state = proposals.state;
  console.log(proposal);
  // console.log("done");

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
