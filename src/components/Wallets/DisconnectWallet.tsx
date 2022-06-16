import forbiddenImg from "./../../assets/img/kindpng_94001.png";
import { hooks as metamaskhooks, metaMask } from "../../connectors/metaMask";
import {
  hooks as walletconnecthooks,
  walletConnect,
} from "../../connectors/walletConnect";
function DisconnectWallet() {
  const { useIsActive: metamaskUseIsActive } = metamaskhooks;
  const metamaskIsActive = metamaskUseIsActive();
  const { useIsActive: walletconnectUseIsActive } = walletconnecthooks;
  const walletconnectIsActive = walletconnectUseIsActive();
  const disconnectwallet = () => {
    console.log(metaMask?.deactivate);

    if (metamaskIsActive) {
      if (metaMask?.deactivate) {
        void metaMask.deactivate();
      } else {
        void metaMask.resetState();
      }
    }
    if (walletconnectIsActive) {
      if (walletConnect?.deactivate) {
        void walletConnect.deactivate();
      } else {
        void walletConnect.resetState();
      }
    } else {
      console.log("else");
    }
  };
  return (
    <div
      className='flex items-center justify-between border-[1px] rounded-xl border-[#D3D3D3] px-[12px] py-[15px] bg-[#edeef2] mb-2 cursor-pointer'
      onClick={() => disconnectwallet()}
    >
      <h6 className='font-semibold text-[16px]'>Disconnect</h6>
      <div>
        <img src={forbiddenImg} alt='' className='w-[32px]' />
      </div>
    </div>
  );
}

export default DisconnectWallet;