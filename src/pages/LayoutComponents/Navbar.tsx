import { FC } from "react";

const Navbar: FC = () => {
  const isSignedIn = false;
  return (
    <nav>
      {!isSignedIn ? (
        <>
          <div></div>
          <button className="anim">Connect Wallet</button>
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
