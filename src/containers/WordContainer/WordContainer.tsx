import {Word} from "../../components/Word/Word";
import styles from "./styles.module.css"

export const WordContainer = ({ id, eng, ru }: { id:number, eng: string, ru: string }) => {

    return <Word id={id} eng={eng} ru={ru} classname={styles.word}/>
}