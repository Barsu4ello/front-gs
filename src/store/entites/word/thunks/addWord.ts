import {Dispatch} from "redux";
import {wordActions} from "../index";
import {WordInterfaceForAdd} from "../../../../components/Words/Words";
import {WordInterface} from "../../../stateInterface";

export const addWord = (word:WordInterfaceForAdd) => (dispatch: Dispatch): void => {

    dispatch(wordActions.startLoading());

    fetch(`http://127.0.0.1:8080/api/v1/words`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            english: word.english,
            russian: word.russian,
        }),
    })
        .then((res) => (res.json()))
        .then((newWordId:number) => {
            const wordAdd: WordInterface = {
                id: newWordId,
                english: word.english,
                russian: word.russian
            }
                dispatch(wordActions.addWord(wordAdd));
        })
        .catch(() => {
            dispatch(wordActions.failedLoading());
        });
}