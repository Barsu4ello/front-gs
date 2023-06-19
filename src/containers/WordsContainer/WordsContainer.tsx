import {Words} from "../../components/Words/Words";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadWordsIfNotExist} from "../../store/entites/word/thunks/loadWordsIfNotExist";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {AnyAction} from "redux";
import {StateInterface} from "../../store/stateInterface";
import styles from "./styles.module.css"

export const WordsContainer = () => {
  const dispatch:ThunkDispatch<StateInterface, unknown, AnyAction> = useDispatch()

  useEffect(() => {
    dispatch(loadWordsIfNotExist())
  },[])
  return <Words className={styles.root}/>
}