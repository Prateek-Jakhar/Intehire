import React from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

const UserContainer = () => {
  const [name, setName] = useState("");
  const [imgUri, setImgUri] = useState("");

  return (
    <UserContext.Provider
      value={{
        name: name,
        setName: setName,
        imgUri: imgUri,
        setImgUri: setImgUri,
      }}
    ></UserContext.Provider>
  );
};

export { UserContext, UserContainer };
