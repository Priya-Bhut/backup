import React, { useEffect } from "react";

function CFR(props) {
  const { dataSetter } = props;
  useEffect(() => {
    dataSetter(["Leader Board", "My Awards", "Received", "Given"]);
  }, [dataSetter]);
  return <div></div>;
}

export default CFR;
