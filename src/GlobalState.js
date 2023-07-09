import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [distTravelled, setDistTravelled] = useState(0);
  const [petChosen, setPetChosen] = useState(1);
  const [playerName, setPlayerName] = useState("");
  const [petName, setPetName] = useState("");
  return (
    <GlobalStateContext.Provider
      value={{
        distTravelled,
        setDistTravelled,
        petChosen,
        setPetChosen,
        playerName,
        setPlayerName,
        petName,
        setPetName,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
