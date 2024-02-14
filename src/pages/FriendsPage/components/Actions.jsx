import React, { useState } from "react";
import AddFollow from "./AddFollow";
import RejectedFollow from "./RejectFollow";

function Actions({ user }) {
  const [type, setType] = useState(true);
  return (
    <>
      {type ? (
        <AddFollow user={user} setType={setType} />
      ) : (
        <RejectedFollow user={user} setType={setType} />
      )}
    </>
  );
}

export default Actions;
