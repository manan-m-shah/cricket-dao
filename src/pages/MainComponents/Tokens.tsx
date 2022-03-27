import { FC, useState } from "react";

const Tokens: FC = () => {
  const [tokenInput, setTokenInput] = useState<number>();
  const exchangeRate = 0.069;
  const onClickHander: React.MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="outlet token-outlet">
      <p>
        Current Price: <code>$BCCI</code> = <code>{exchangeRate} ETH</code>
      </p>
      <form>
        <input
          required
          value={tokenInput}
          onChange={(e) => {
            setTokenInput(parseInt(e.target.value));
          }}
          onClick={onClickHander}
          type="number"
          placeholder="Number of Tokens"
        />
        <button> Get BCCI Tokens</button>
      </form>
      <p>
        Your Purchase value ={" "}
        <code>{((tokenInput ?? 0) * exchangeRate).toFixed(5)} ETH</code>
      </p>
    </div>
  );
};

export default Tokens;
