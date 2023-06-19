import {Dispatch} from "redux";
import {wordActions} from "../index";
import {WordInterface} from "../../../stateInterface";

export const updateWord = (word:WordInterface) => (dispatch: Dispatch): void => {

    dispatch(wordActions.startLoading());

    fetch(`http://127.0.0.1:8080/api/v1/words/${word.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            english: word.english,
            russian: word.russian,
        }),
    })
        .then((res) => (res.status))
        .then((status) => {
            if(status === 200) {
                dispatch(wordActions.updateWord(word));
            }else {
                throw Error
            }
        })
        .catch(() => {
            dispatch(wordActions.failedLoading());
        });
}