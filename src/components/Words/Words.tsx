import {StateInterface, WordInterface} from "../../store/stateInterface";
import {useDispatch, useSelector} from "react-redux";
import {selectWordEntities} from "../../store/entites/word/selectors";
import {WordContainer} from "../../containers/WordContainer/WordContainer";
import classNames from "classnames";
import styles from "./styles.module.css"
import {ThunkDispatch} from "@reduxjs/toolkit";
import {AnyAction} from "redux";
import {addWord} from "../../store/entites/word/thunks/addWord";
import {useMemo, useState} from "react";

export interface WordInterfaceForAdd {
    id?: number,
    english: string,
    russian: string
}

export const Words = ({className}: { className: string }) => {

    const words: Record<number, WordInterface> = useSelector((state: StateInterface) =>
        selectWordEntities(state)
    )

    const wordsKeys: string[] = Object.keys(words);

    const dispatch: ThunkDispatch<StateInterface, unknown, AnyAction> = useDispatch()

    const addNewWord = (word: WordInterfaceForAdd) => {
        dispatch(addWord(word))
    }

    const [newEng, setEng] = useState("");
    const [newRu, setRu] = useState("");

    const handleEngChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEng(event.target.value);
    };
    const handleRuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRu(event.target.value);
    };

    //Убираем render со списка слов
    const memoWords = useMemo(() => (
        <div>
            {wordsKeys.map(key => words[parseInt(key)])
                .map(word => <WordContainer key={word.id} id={word.id} eng={word.english} ru={word.russian}/>)}
        </div>
    ), [words])

    return <div className={classNames(className)}>
        {memoWords}
        <div className={styles.divAddingNewWord}>
            <button className={styles.buttonAddWord}
                    onClick={() => addNewWord({english: newEng, russian: newRu})}>Добавить новое слово
            </button>
            <div>
                <input className={classNames(styles.word)}
                       type="text"
                       value={newEng}
                       onChange={handleEngChange}/>
                <input className={classNames(styles.word)}
                       type="text"
                       value={newRu}
                       onChange={handleRuChange}/>
            </div>
        </div>
    </div>
}