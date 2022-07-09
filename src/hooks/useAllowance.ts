import { useCallback } from "react";
import { TransactionResponse } from "@ethersproject/providers";
import { Contract, CallOverrides } from "@ethersproject/contracts";
import get from "lodash/get";
import * as Sentry from "@sentry/react";
import { ethers } from "ethers";
import useWallet from "../components/Wallets/useWallet";
export function useAllowance() {
  /**
   * Perform a contract call with a gas price returned from useGasPrice
   * @param contract Used to perform the call
   * @param methodName The name of the method called
   * @param methodArgs An array of arguments to pass to the method
   * @param overrides An overrides object to pass to the method. gasPrice passed in here will take priority over the price returned by useGasPrice
   * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
   */
  const hooks = useWallet("metamask");
  const { useAccount } = hooks;
  const account = useAccount();
  const allowance = useCallback(
    async (
      contract: Contract,
      methodName: string,
      methodArgs: any[] = [],
      overrides: CallOverrides = null
    ) => {
      const contractMethod = get(contract, methodName);
      const tx = await contractMethod(...methodArgs, { ...overrides });
      return tx;
    },
    []
  );

  return { allowance };
}
