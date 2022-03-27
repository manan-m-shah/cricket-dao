import { FC } from "react";

const Navbar: FC = () => {
  const isSignedIn = true;
  return (
    <nav>
      {!isSignedIn ? (
        <>
          <div></div>
          <button>Connect Wallet</button>
        </>
      ) : (
        <>
          <div className="user">
            <p>Welcome user name</p>
          </div>
          <div className="eth-info">
            <p>0.4325ETH bla bla</p>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
