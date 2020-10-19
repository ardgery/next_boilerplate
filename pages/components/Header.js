import React, { useEffect, useContext } from "react";
import { StoreContext } from "../../contexts/store/storeContext";
import Head from 'next/head'
const Header = () => {
  const { state, actions } = useContext(StoreContext);
  useEffect(() => {
    console.log("STATE FROM HEADER = ", state)
  }, [state, actions])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>This is Headerr</p>
    </div>
  );
};

export default Header;