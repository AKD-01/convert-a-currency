import React from "react";
import Spinner from "./Spinner";

const ConvertResult = ({ Loading, result, rate }) => {
  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        result &&
        rate && (
          <>
            <h1 className="result">Converted Result: {result}</h1>
            <h4 className="rate ">Current Rate: {rate}</h4>
          </>
        )
      )}
    </>
  );
};

export default ConvertResult;
