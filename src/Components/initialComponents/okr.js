import React, { useEffect } from "react";

function OKR(props) {
  const { dataSetter } = props;
  useEffect(() => {
    dataSetter([
      "All My OKRs",
      "My Individual OKRs",
      "Developer OKRs",
      "My Org's OKRs",
    ]);
  }, [dataSetter]);
  return <div></div>;
}

export default OKR;
