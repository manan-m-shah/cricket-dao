import { FC } from "react";
import { useWeb3Context } from "../../context/Web3Context";

const Navbar: FC = () => {
  const { currentAccount,currentBalance, connectMetamask } = useWeb3Context();
  console.log(currentAccount);
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
            <p>{currentBalance}</p>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
