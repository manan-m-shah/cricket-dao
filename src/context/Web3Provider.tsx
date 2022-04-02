import React, { useEffect, useState } from "react";
import Web3Context from "./Web3Context";
import { connectWallet, fetchContract } from "../scripts/ethers";
import { ethers } from "ethers";
import { propose } from "../scripts/propose";

const Web3Provider: React.FC = (props) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [tickets, setTickets] = useState<any[]>([]);
  const [proposals, setProposals] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState({
    date: null,
    month: null,
    year: null,
  });
  const [team, setTeam] = useState<number[]>(null);

  const connectMetamask = async () => {
    const accounts: any = await connectWallet();
    if (accounts.length) {
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
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
  };

  const changeLineup = async (lineup: number[]) => {
    const contract = fetchContract("TeamLineup")!;
    const response = await contract.changeplayers([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    ]);
    console.log(response);
  };

  const submitProposal = async (
    functionToCall: string,
    args: any[],
    proposalDescription: string
  ) => {
    const governor = fetchContract("GovernorContract");
      const tickets = fetchContract("Tickets");
      // let functionToCall = "addtickets";
      // console.log(typeof Number(price));
      console.log(typeof currentDate.date);
      // let args = ["CSK vs MI",28,12,2022,23,100];
      // [String(gameName),Number(currentDate.date),Number(currentDate.month),Number(currentDate.year),Number(1),Number(price)];
      const encodedFunctionCall = tickets.interface.encodeFunctionData(functionToCall, args)    
      // let proposalDescription = `Proposal to add ${amount} tickets of ${gameName} to be played on ${currentDate.date}/${currentDate.month}/${currentDate.year} of ${price} each`;
    
      const proposeTx = await governor.propose(
        [tickets.address],
        [0],
        [encodedFunctionCall],
        proposalDescription
      );
      const proposeReceipt = await proposeTx.wait(1)
      const proposalId = proposeReceipt.events[0].args.proposalId
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
    const response = await contract.Proposals();
    console.log(response);
    setProposals(response);
  };
  const submitProposalForTickets = async (gameName:string,amount:Number,price:Number) => {
      // const governor = fetchContract("GovernorContract");
      // const tickets = fetchContract("Tickets");
      // let functionToCall = "addtickets";
      // console.log(typeof Number(price));
      // console.log(typeof currentDate.date);
      // let args = ["CSK vs MI",28,12,2022,23,100];
      // [String(gameName),Number(currentDate.date),Number(currentDate.month),Number(currentDate.year),Number(1),Number(price)];
      // const encodedFunctionCall = await tickets.interface.encodeFunctionData(functionToCall, args)    
      // let proposalDescription = `Proposal to add ${amount} tickets of ${gameName} to be played on ${currentDate.date}/${currentDate.month}/${currentDate.year} of ${price} each`;
    
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
      submitProposal("addtickets",["CSK vs MI",      currentDate.date,
      currentDate.month,
      currentDate.year,"23","100"],"proposal to add tickets" )
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    // process.exit(1);
  });
  }

  useEffect(() => {
    window.ethereum.on("accountsChanged", function (accounts: String) {
      console.log(accounts[0]);
      setCurrentAccount(accounts[0]);
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
        tickets,
        currentDate,
        setCurrentDate,
        team,
        setTeam,
        fetchTeam,
        submitProposalForTickets,
        changeLineup,
        proposals,
      }}
    >
      {props.children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
