import { FC, useEffect, useState } from "react";
import { useWeb3Context } from "../../context/Web3Context";
import { useNavigate } from "react-router-dom";
import ProposalCard from "./ProposalCard";

const Proposals: FC = () => {
  const { proposals, vote, getProposals, currentAccount } = useWeb3Context();
  useEffect(() => {
    if (currentAccount) getProposals();
  }, [currentAccount]);

  useEffect(() => {
    console.log(proposals);
  }, [proposals]);

  if (proposals.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="outlet proposals">
      <h1>{proposals.length}</h1>
      <ProposalSubmision />
      {proposals.map((proposal: any) => {
        return (
          <div>
            <ProposalCard proposal={proposal} />;
            <button onClick={() => vote(proposal.id, 1)}>Vote+</button>
            <button onClick={() => vote(proposals.id, 0)}>Vote-</button>
          </div>
        );
      })}
      {/* <ProposalCard pending={true} leading={true} timeLeft={7} />
      <ProposalCard pending={false} />
      <ProposalCard pending={true} timeLeft={2} />
      <ProposalCard pending={false} passed={true} />
      <ProposalCard pending={false} /> */}
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
