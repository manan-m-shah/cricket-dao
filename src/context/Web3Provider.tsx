import React, { useEffect, useState } from "react";
import Web3Context from "./Web3Context";
import { connectWallet, getBalance, fetchContract } from "../scripts/ethers";
import { ethers } from "ethers";
import { propose } from "../scripts/propose";
import { TeamLineup_abi } from "../lib/constants";

const Web3Provider: React.FC = (props) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState<string>("");
  const [tickets, setTickets] = useState<any[]>([]);
  const [proposals, setProposals] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState({
    date: null,
    month: null,
    year: null,
  });
  const [team, setTeam] = useState<number[]>([]);

  const connectMetamask = async () => {
    const accounts: any = await connectWallet();
    if (accounts.length) {
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
      let bal: any = await getBalance();
      // await getProposals();
      bal = bal.substring(0, 6);
      bal += " ETH";
      // const bal = await getBalance(currentAccount);
      // console.log(typeof bal);
      setCurrentBalance(bal);
    }
  };

  const logContract = async () => {
    const contract = fetchContract("TeamLineup")!;
    const response = await contract.showplayers();
    console.log(response);
  };

  const addTicket = async (
    gameName: string,
    amount: string,
    seatNumber: string
  ) => {
    console.log(currentDate);
    const contract = fetchContract("Test")!;
    const response = await contract.addtickets(
      gameName,
      currentDate.date,
      currentDate.month,
      currentDate.year,
      seatNumber,
      ethers.utils.parseEther(amount)
    );
    console.log(response);
  };

  const getTickets = async () => {
    const contract = fetchContract("Test")!;
    const response = await contract.showallticketsoftheday(
      currentDate.date,
      currentDate.month,
      currentDate.year
    );
    console.log("Tickets:", response);
    setTickets(response);
  };

  const buyTicket = async (
    gameName: string,
    seatNumber: string,
    price: string
  ) => {
    const options = { value: ethers.utils.parseEther(price) };
    const contract = fetchContract("Test")!;
    const response = await contract.buytickets(
      gameName,
      currentDate,
      seatNumber,
      options
    );
    console.log(response);
    getTickets();
  };

  const fetchTeam = async () => {
    const contract = fetchContract("TeamLineup")!;
    let response = await contract.showplayers();
    let ids: number[] = [];
    response.map((id: string) => {
      ids.push(parseInt(id));
    });
    setTeam(ids);
    // team=ids;
  };

  // const changeLineup = async (lineup: number[]) => {
  //   const contract = fetchContract("TeamLineup")!;
  //   const response = await contract.changeplayers([
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  //   ]);
  //   console.log(response);
  // };

  // async function moveBlocks(amount: number) {
  //   console.log("Moving blocks...")
  //   for (let index = 0; index < amount; index++) {
  //     await rinkbey.provider.request({
  //       method: "evm_mine",
  //       params: [],
  //     })
  //   }
  //   console.log(`Moved ${amount} blocks`)
  // }

  const submitProposal = async (
    functionToCall: string,
    args: any[],
    proposalDescription: string,
    contract: string
  ) => {
    const governor = fetchContract("GovernorContract")!;
    const tickets = fetchContract(contract)!;
    // let functionToCall = "addtickets";
    // console.log(typeof Number(price));
    console.log(args);
    // args = ["1","2","3","4","5","6","7","8","9","12","23"];
    // args =
    // [
    //   1,
    //   2,
    //   3,
    //   4,
    //   5,
    //   6,
    //   7,
    //   8,
    //   9,
    //   12,
    //   23
    // ];
    // args = [1,2,3,4,5,6,7,8,9,12,23];
    // console.log(args);
    // let args = ["CSK vs MI",28,12,2022,23,100];
    // [String(gameName),Number(currentDate.date),Number(currentDate.month),Number(currentDate.year),Number(1),Number(price)];
    const encodedFunctionCall = tickets.interface.encodeFunctionData(
      functionToCall,
      args
    );
    // let proposalDescription = `Proposal to add ${amount} tickets of ${gameName} to be played on ${currentDate.date}/${currentDate.month}/${currentDate.year} of ${price} each`;

    const proposeTx = await governor.propose(
      [tickets.address],
      [0],
      [encodedFunctionCall],
      proposalDescription
    );
    const proposeReceipt = await proposeTx.wait(1);
    const proposalId = proposeReceipt.events[0].args.proposalId;
    console.log(String(proposalId));
    await getProposals();
    // await moveBlocks(1 + 1);
    // propose(functionToCall, args, proposalDescription)
    //   .then((response) => {
    //     console.log(response);
    //     process.exit(0);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     process.exit(1);
    //   });
  };

  const getProposals = async () => {
    const contract = fetchContract("GovernorContract")!;
    const proposalIds = await contract.showproposals();
    const stuff: any = [];
    await proposalIds.map(async (proposalId: Number) => {
      const votes = await contract.proposalVotes(proposalId);
      const state = await contract.state(proposalId);
      const hasVoted = await contract.hasVoted(proposalId, currentAccount);
      const temp = { id: proposalId, votes, state, hasVoted };
      stuff.push(temp);
      return temp;
    });

    console.log(stuff);
    setProposals(stuff);

    // await proposalPromise.map(async (promise: any) => {
    //   const proposal = await promise;
    //   temp.push(proposal);
    // });

    // setProposals([...proposals, ...temp]);
  };
  const submitProposalForTeamLineup = async (newTeam: Number[]) => {
    // console.log(newTeam.toString());
    // newTeam = newTeam.map((id:Number)=>{
    //   return String(id);
    // })
    // console.log(newTeam);
    // [
    //     newTeam[0],
    //     newTeam[1],
    //     newTeam[2],
    //     newTeam[3],
    //     newTeam[4],
    //     newTeam[5],
    //     newTeam[6],
    //     newTeam[7],
    //     newTeam[8],
    //     newTeam[9],
    //     newTeam[10],
    //   ],
    const proposalDescription = "Change Team Lineup";
    const functionToCall = "changeplayers";
    await submitProposal(
      "changeplayers",
      [
        [
          String(newTeam[0]),
          String(newTeam[1]),
          String(newTeam[2]),
          String(newTeam[3]),
          String(newTeam[4]),
          String(newTeam[5]),
          String(newTeam[6]),
          String(newTeam[7]),
          String(newTeam[8]),
          String(newTeam[9]),
          String(newTeam[10]),
        ],
      ],
      proposalDescription,
      "TeamLineup"
    );
    // const governor = fetchContract("GovernorContract")!;
    // const teamlineup = fetchContract("TeamLineup")!;
    // let functionToCall = "addtickets";
    // console.log(typeof Number(price));
    // console.log(typeof currentDate.date);
    // let args = ["CSK vs MI",28,12,2022,23,100];
    // [String(gameName),Number(currentDate.date),Number(currentDate.month),Number(currentDate.year),Number(1),Number(price)];
    // const encodedFunctionCall = teamlineup.interface.encodeFunctionData(
    //   functionToCall,
    //   newTeam
    // );
    // // let proposalDescription = `Proposal to add ${amount} tickets of ${gameName} to be played on ${currentDate.date}/${currentDate.month}/${currentDate.year} of ${price} each`;

    // const proposeTx = await governor.propose(
    //   [teamlineup.address],
    //   [0],
    //   [encodedFunctionCall],
    //   proposalDescription
    // );
    // const proposeReceipt = await proposeTx.wait(1);
    // const proposalId = proposeReceipt.events[0].args.proposalId;
    // console.log(String(proposalId));
    // await getProposals();
    // await moveBlocks(1 + 1);
    // propose(functionToCall, args, proposalDescription)
    //   .then((response) => {
    //     console.log(response);
    //     process.exit(0);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     process.exit(1);
    //   });
  };
  const submitProposalForTickets = async (
    gameName: string,
    amount: Number,
    price: Number
  ) => {
    // const governor = fetchContract("GovernorContract");
    // const tickets = fetchContract("Tickets");
    // let functionToCall = "addtickets";
    // console.log(typeof Number(price));
    // console.log(typeof currentDate.date);
    // let args = ["CSK vs MI",28,12,2022,23,100];
    // [String(gameName),Number(currentDate.date),Number(currentDate.month),Number(currentDate.year),Number(1),Number(price)];
    // const encodedFunctionCall = await tickets.interface.encodeFunctionData(functionToCall, args)
    const proposalDescription = `Proposal to add ${amount} tickets of ${gameName} to be played on ${currentDate.date}/${currentDate.month}/${currentDate.year} of ${price} each`;

    // const proposeTx = await governor.propose(
    //   [tickets.address],
    //   [0],
    //   [encodedFunctionCall],
    //   proposalDescription
    // );
    // const proposeReceipt = await proposeTx.wait(1)
    // const proposalId = proposeReceipt.events[0].args.proposalId

    // const proposalState = await governor.state(proposalId)
    // const proposalSnapShot = await governor.proposalSnapshot(proposalId)
    // const proposalDeadline = await governor.proposalDeadline(proposalId)
    await submitProposal(
      "addtickets",
      [
        gameName,
        currentDate.date,
        currentDate.month,
        currentDate.year,
        // "23",
        // "1",
        String(amount),
        String(price),
      ],
      proposalDescription,
      "Tickets"
      // "proposal to add tickets"
    );
    // .then(async() => getProposals())
    // .catch((error) => {
    //   console.error(error);
    //   // process.exit(1);
    // });
  };

  const vote = async (proposalId: string, voteWay: Number) => {
    const proposalIdint = BigInt(proposalId).toString();
    console.log(proposalIdint);
    // console.log(typeof proposalId);
    let reason;
    if (voteWay === 1) {
      reason = "Voting yes";
    } else {
      reason = "Voting no";
    }
    console.log("Voting...");
    const governor = fetchContract("GovernorContract")!;
    try {
      const proposalSnapShot = await governor.proposalSnapshot(proposalId);
      const proposalDeadline = await governor.proposalDeadline(proposalId);
      // What block # the proposal was snapshot
      console.log(`Current Proposal Snapshot: ${proposalSnapShot}`);
      // The block number the proposal voting expires
      console.log(`Current Proposal Deadline: ${proposalDeadline}`);
      const voteTx = await governor.castVoteWithReason(
        proposalId,
        voteWay,
        reason
      );
      console.log(reason);
      const voteTxReceipt = await voteTx.wait(1);
      console.log(voteTxReceipt.events[0].args.reason);
      const proposalState = await governor.state(proposalId);
      console.log(`Current Proposal State: ${proposalState}`);
    } catch (error) {
      console.log("Error in vote function ==> ", error);
    }
  };
  
  const purchaseTokens = async(amount:Number) =>{
    console.log(amount);
  }

  useEffect(() => {
    window.ethereum.on("accountsChanged", function (accounts: String) {
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
      getBalance().then((bal) => {
        bal = bal!.substring(0, 6);
        bal += " ETH";
        // const bal = await getBalance(currentAccount);
        // console.log(typeof bal);
        setCurrentBalance(bal);
      });
      // let bal:any = await getBalance();
      // await getProposals();
    });
  });

  return (
    <Web3Context.Provider
      value={{
        logContract,
        connectMetamask,
        addTicket,
        buyTicket,
        getTickets,
        currentAccount,
        currentBalance,
        tickets,
        currentDate,
        setCurrentDate,
        team,
        setTeam,
        fetchTeam,
        submitProposalForTickets,
        submitProposalForTeamLineup,
        purchaseTokens,
        proposals,
        vote,
        getProposals,
      }}
    >
      {props.children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
