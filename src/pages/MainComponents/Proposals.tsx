import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ProposalCard from "./ProposalCard";

const Proposals: FC = () => {
  return (
    <div className="outlet proposals">
      <ProposalSubmision />
      <ProposalCard pending={true} leading={true} timeLeft={7} />
      <ProposalCard pending={false} />
      <ProposalCard pending={true} timeLeft={2} />
      <ProposalCard pending={false} passed={true} />
      <ProposalCard pending={false} />
    </div>
  );
};

const ProposalSubmision: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="submission-bar">
      <button>All Passed Proposals</button>
      <button onClick={() => navigate("/new-proposal")}>
        Sumit A Proposal
      </button>
    </div>
  );
};

export default Proposals;
