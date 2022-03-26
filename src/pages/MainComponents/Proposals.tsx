import { FC } from "react";
import ProposalCard from "./ProposalCard";

const Proposals: FC = () => {
  return (
    <div className="outlet proposal">
      <ProposalCard pending={true} leading={true} timeLeft={7} />
      <ProposalCard pending={false} />
      <ProposalCard pending={true} timeLeft={2} />
      <ProposalCard pending={false} passed={true} />
      <ProposalCard pending={false} />
    </div>
  );
};

export default Proposals;
