import styles from "./styles.module.css"
import classNames from "classnames";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {StateInterface} from "../../store/stateInterface";
import {AnyAction} from "redux";
import {useDispatch} from "react-redux";
import {removeWord} from "../../store/entites/word/thunks/removeWord"
import {useState} from "react";
import {updateWord} from "../../store/entites/word/thunks/updateWord";

export const Word = ({id, eng, ru, classname}: { id: number, eng: string, ru: string, classname: string }) => {

    const [newEng, setEng] = useState(eng);
    const [newRu, setRu] = useState(ru);
    const [isInputDisabled, setIsInputDisabled] = useState(true);

    const dispatch: ThunkDispatch<StateInterface, unknown, AnyAction> = useDispatch()

    const removeWordById = () => {
        dispatch(removeWord(id))
    }

    const updateWordById = () => {
        dispatch(updateWord({id, english: newEng, russian: newRu}))
        setIsInputDisabled(true)
    }

    const changeUpdateButtonToSaveButton = () => {
        setIsInputDisabled(false)
    }

    const handleEngChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEng(event.target.value);
    };
    const handleRuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRu(event.target.value);
    };

    return <div className={classNames(classname, styles.root)}>
        <input className={classNames(styles.word)}
               type="text"
               value={newEng}
               onChange={handleEngChange}
               disabled={isInputDisabled}/>
        <input className={classNames(styles.word)}
               type="text"
               value={newRu}
               onChange={handleRuChange}
               disabled={isInputDisabled}/>
        {isInputDisabled && <button className={styles.buttonUpdate}
                                    onClick={changeUpdateButtonToSaveButton}>
            Изменить
        </button>}
        {!isInputDisabled && <button className={styles.buttonSave} onClick={updateWordById}>
            Сохранить
        </button>}
        <button className={styles.buttonRemove} onClick={removeWordById}>Удалить</button>
    </div>
}