import React, { useState, createContext } from "react";
export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [selectedUserId, setSelectedUserId] = useState("unknown");

  return (
    <PageContext.Provider value={[selectedUserId, setSelectedUserId]}>
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
