import React from "react";
import loading from "./loading.gif";

const spinner=()=>{
    return (
      <div className="text-center my-3">
        <img src={loading} alt="loading" />
      </div>
    );
}

export default spinner;