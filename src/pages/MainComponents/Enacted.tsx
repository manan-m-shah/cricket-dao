import { FC } from "react";
import ProposalCard from "./ProposalCard";

const Enacted: FC = () => {
  return (
    <div className="outlet proposals" style={{ marginTop: "2rem" }}>
      <ProposalCard pending={false} passed={true} />
      <ProposalCard pending={false} passed={true} />
      <ProposalCard pending={false} passed={true} />
      <ProposalCard pending={false} passed={true} />
      <ProposalCard pending={false} passed={true} />
      <ProposalCard pending={false} passed={true} />
    </div>
  );
};

export default Enacted;
