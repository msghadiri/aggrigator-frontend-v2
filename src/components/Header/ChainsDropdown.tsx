import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { changeChain } from "../../features/chains/chainsSlice";
function ChainsDropdown() {
  const chainId = useSelector(({ chains }: RootState) => chains.value);
  console.log(chainId);
  
  const dispatch = useDispatch();
  return (
    <div className="z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 chainslistdrowdown">
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <div
            onClick={() => dispatch(changeChain(1))}
            className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <img
              src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
              alt=""
              className="w-5 mr-1"
            />
            Ethereum
          </div>
        </li>
        <li>
          <div
            onClick={() => dispatch(changeChain(56))}
            className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <img
              src="https://app.1inch.io/assets/images/network-logos/binance-light_2.svg"
              alt=""
              className="w-5 mr-1"
            />
            BNB Chain
          </div>
        </li>
        <li>
          <div
            onClick={() => dispatch(changeChain(137))}
            className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <img
              src="https://app.1inch.io/assets/images/network-logos/polygon.svg"
              alt=""
              className="w-5 mr-1"
            />
            Polygon
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ChainsDropdown;
