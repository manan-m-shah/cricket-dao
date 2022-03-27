import React, { useEffect, useState } from "react";
import Web3Context from "./Web3Context";
import { connectWallet, fetchContract } from "../scripts/ethers";
import { ethers } from "ethers";

const Web3Provider: React.FC = (props) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [tickets, setTickets] = useState(["Tickets"]);

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

  const addTicket = async () => {
    const contract = fetchContract("Tickets")!;
    const response = await contract.addtickets(
      "First Game",
      { date: 1, month: 1, year: 1 },
      1,
      ethers.utils.parseEther("0.1")
    );
    console.log(response);
  };

  const getTickets = async () => {
    const contract = fetchContract("Test")!;
    const response = await contract.showallticketsoftheday(1, 1, 1);
    console.log(response);
    setTickets(response);
  };

  const buyTicket = async () => {
    const options = { value: ethers.utils.parseEther("0.1") };
    const contract = fetchContract("Test")!;
    const response = await contract.buytickets(
      "First Game",
      { date: 1, month: 1, year: 1 },
      1,
      options
    );
    console.log(response);
  };

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
      }}
    >
      {props.children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
