import { ethers } from "ethers";
import { fetchContract } from "./ethers";

export async function propose(
  functionToCall: string,
  args: any[],
  proposalDescription: string
) {
  const governor = fetchContract("GovernorContract")!;
  const teamlineup = fetchContract("TeamLineup")!;
  const encodedFunctionCall = teamlineup.interface.encodeFunctionData(
    functionToCall,
    args
  );
  console.log(
    `Proposing ${functionToCall} on ${teamlineup.address} with ${args}`
  );
  console.log(`Proposal Description:\n  ${proposalDescription}`);
  const proposeTx = await governor.propose(
    [teamlineup.address],
    [0],
    [encodedFunctionCall],
    proposalDescription
  );

  // // If working on a development chain, we will push forward till we get to the voting period.
  // if (developmentChains.includes(network.name)) {
  //   await moveBlocks(VOTING_DELAY + 1)
  // }
  // const proposeReceipt = await proposeTx.wait(1)
  // const proposalId = proposeReceipt.events[0].args.proposalId
  // const proposalState = await governor.state(proposalId)
  // const proposalSnapShot = await governor.proposalSnapshot(proposalId)
  // const proposalDeadline = await governor.proposalDeadline(proposalId)
  // // save the proposalId
  // let proposals = JSON.parse(fs.readFileSync(proposalsFile, 'utf8'))
  // proposals[network.config.chainId!.toString()].push(proposalId.toString())
  // fs.writeFileSync(proposalsFile, JSON.stringify(proposals))

  // // The state of the proposal. 1 is not passed. 0 is passed.
  // console.log(`Current Proposal State: ${proposalState}`)
  // // What block # the proposal was snapshot
  // console.log(`Current Proposal Snapshot: ${proposalSnapShot}`)
  // // The block number the proposal voting expires
  // console.log(`Current Proposal Deadline: ${proposalDeadline}`)
}

// propose([NEW_STORE_VALUE], FUNC, PROPOSAL_DESCRIPTION)
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
