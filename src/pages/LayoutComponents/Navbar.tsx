import { FC } from "react";
import { useWeb3Context } from "../../context/Web3Context";

const Navbar: FC = () => {
  const { currentAccount, connectMetamask } = useWeb3Context();
  return (
    <nav>
      {!currentAccount ? (
        <>
          <div></div>
          <button className="anim" onClick={connectMetamask}>
            Connect Wallet
          </button>
        </>
      ) : (
        <>
          <div className="user">
            <p>Welcome {currentAccount}</p>
          </div>
          <div className="eth-info">
            <p>0.4325ETH</p>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
