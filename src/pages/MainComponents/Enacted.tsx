import { FC, useEffect, useState } from "react";
import { useWeb3Context } from "../../context/Web3Context";
import { useNavigate } from "react-router-dom";
import ProposalCard from "./ProposalCard";

const Enacted: FC = () => {
  const { proposals, getProposals, currentAccount } = useWeb3Context();

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
      {proposals.map((proposal: any) => {
        return (
          <div>
            <ProposalCard proposal={proposal} enacted={true} />
          </div>
        );
      })}
    </div>
  );
};

export default Enacted;
