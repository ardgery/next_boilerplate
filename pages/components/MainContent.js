import React, { useEffect, useContext } from "react"
import { StoreContext } from "../../contexts/store/storeContext"
import styles from '../../styles/Home.module.css'

import axios from 'axios';
const MainContent = () => {
    const { state, actions } = useContext(StoreContext);
    useEffect(() => {
        console.log("STATE FROM MAINCONTENT = ", state)
    }, [state, actions])
    useEffect(() => {
        axios.get('datas.json')
            .then((response) => {
                // handle success
                console.log("resp = ", response.data);
                actions.generalActions.getInitialData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const valueRandom = () => {
        return Math.round(Math.random() * (1000 - 1) + 1);
    };
    const newData = () => {
        return {
            name: 'Gerrr',
            phone: '085883323733'
        }
    }
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <p>{state.generalStates.count}</p>
            <button onClick={() => { actions.generalActions.increment(); }}>
                INCREMENT
                </button>
            <button onClick={() => { actions.generalActions.decrement(); }}>
                DECREMENT
                </button>
            <button onClick={() => { actions.generalActions.reset(); }}>
                RESET
                </button>
            <button onClick={() => { actions.generalActions.setValue(valueRandom()); }}>
                VALUE RANDOM
                </button>
            <button onClick={() => { actions.generalActions.addData(newData()); }}>
                ADD NEW DATA
                </button>
        </main>
    );
};

export default MainContent;
