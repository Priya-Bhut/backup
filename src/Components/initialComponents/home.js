import React, { useEffect } from "react";

function HOME(props) {
  const { dataSetter } = props;
  useEffect(() => {
    dataSetter(["Alignments", "Action Center", "Dependencies", "Notes"]);
  }, [dataSetter]);
  return <div></div>;
}

export default HOME;
