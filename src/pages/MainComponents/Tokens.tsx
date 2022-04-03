import { FC, useState } from "react";
import { useWeb3Context } from "../../context/Web3Context";

const Tokens: FC = () => {
  const [tokenInput, setTokenInput] = useState("");
  const { purchaseTokens } = useWeb3Context();
  const exchangeRate = 0.069;
  const onClickHander: React.MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
  };
  const purchase = async()=>{
    await purchaseTokens(tokenInput);
  };
  return (
    <div className="outlet token-outlet">
      <p className="info">
        <code>BCCI</code> = <code>{exchangeRate} ETH</code>
      </p>
      <form>
        <input
          required
          className="w-full text-gray-600 p-6 text-xl m-2 border-gray-200 border-2 rounded-xl"            
          type="number"
          value={tokenInput}
          placeholder="Number of Tokens"
          onChange={(e) => {
            
            setTokenInput(e.target.value)} }
          // onClick={onClickHander}
        />
        <button onClick={(e) => {
            e.preventDefault();
            purchase();}} > Get BCCI Tokens</button>
      </form>
      <p className="info">
        Your Purchase value:{" "}
        <code>{((tokenInput ?? 0) * exchangeRate).toFixed(5)} ETH</code>
      </p>
    </div>
  );
};

export default Tokens;
