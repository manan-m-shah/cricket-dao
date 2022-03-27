import React, { useEffect, useState } from 'react'
import { ContractInterface, ethers } from 'ethers'
import {
  GovernorContract_abi,
  GovernorContract_address,
  TeamLineup_abi,
  TeamLineup_address,
  TimeLock_abi,
  TimeLock_address,
  BCCIToken_abi,
  BCCIToken_address,
  Tickets_abi,
  Tickets_address,
  Test_address,
  Test_abi,
} from '../lib/constants'
let eth: any

if (typeof window !== 'undefined') {
  eth = window.ethereum
}

export const fetchContract = (contract: String) => {
  switch (contract) {
    case 'GovernorContract':
      return getEthereumContract(GovernorContract_address, GovernorContract_abi)
    case 'TeamLineup':
      return getEthereumContract(TeamLineup_address, TeamLineup_abi)
    case 'TimeLock':
      return getEthereumContract(TimeLock_address, TimeLock_abi)
    case 'BCCIToken':
      return getEthereumContract(BCCIToken_address, BCCIToken_abi)
    case 'Tickets':
      return getEthereumContract(Tickets_address, Tickets_abi)
    case 'Test':
      return getEthereumContract(Test_address, Test_abi)
    default:
      break
  }
}

const getEthereumContract = (
  contractAddress: string,
  contractABI: ContractInterface
) => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, contractABI, signer)
  return contract
}

export const connectWallet = async (metamask = eth) => {
  try {
    if (!metamask) return alert('Please install metamask ')

    const accounts = await metamask.request({ method: 'eth_requestAccounts' })

    return accounts
  } catch (error) {
    console.error(error)
    throw new Error('No ethereum object.')
  }
}

export const getWallet = async (metamask = eth) => {
  try {
    if (!metamask) return alert('Please install metamask ')

    const accounts = await metamask.request({ method: 'eth_accounts' })

    return accounts
  } catch (error) {
    console.error(error)
    throw new Error('No ethereum object.')
  }
}
