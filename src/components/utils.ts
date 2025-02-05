/* eslint-disable  @typescript-eslint/no-explicit-any */

import { quais } from 'quais';

// ---- formatting ---- //
export const shortenAddress = (address: string) => {
  if (address === '') return '';
  return address.slice(0, 5) + '...' + address.slice(-4);
};

export const sortedQuaiShardNames: ShardNames = {
  '0x00': { name: 'Cyprus-1', rpcName: 'cyprus1' },
};

// ---- explorer url builders ---- //
export const buildRpcUrl = () => {
  return `https://orchard.rpc.quai.network`;
};

export const buildExplorerUrl = () => {
  return `https://orchard.quaiscan.io`;
};

export const buildAddressUrl = (address: string) => {
  return `https://orchard.quaiscan.io/address/${address}`;
};

export const buildTransactionUrl = (txHash: string) => {
  return `https://orchard.quaiscan.io/tx/${txHash}`;
};

// ---- dispatchers ---- //
export const dispatchAccount = (accounts: Array<string> | undefined, dispatch: any) => {
  if (accounts?.length !== 0 && accounts !== undefined) {
    const shard = quais.getZoneForAddress(accounts[0]);
    if (shard === null) {
      dispatch({ type: 'SET_RPC_PROVIDER', payload: undefined });
      dispatch({ type: 'SET_ACCOUNT', payload: undefined });
      return;
    }
    const account = {
      addr: accounts[0],
      shard: shard,
    };
    const rpcProvider = new quais.JsonRpcProvider(buildRpcUrl());
    dispatch({ type: 'SET_RPC_PROVIDER', payload: rpcProvider });
    dispatch({ type: 'SET_ACCOUNT', payload: account });
  } else {
    dispatch({ type: 'SET_RPC_PROVIDER', payload: undefined });
    dispatch({ type: 'SET_ACCOUNT', payload: undefined });
  }
};

// ---- data validation ---- //

export const validateAddress = (address: string) => {
  if (address === '') return false;
  return quais.isAddress(address);
};

