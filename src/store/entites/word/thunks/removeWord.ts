import {Dispatch} from "redux";
import {wordActions} from "../index";

export const removeWord = (id:number) => (dispatch: Dispatch): void => {

    dispatch(wordActions.startLoading());

    fetch(`http://127.0.0.1:8080/api/v1/words/${id}`,{
        method: "DELETE"
    })
        .then((res) => (res.status))
        .then((status) => {
            if(status === 200) {
                dispatch(wordActions.removeWord(id));
            }else {
                throw Error
            }
        })
        .catch(() => {
            dispatch(wordActions.failedLoading());
        });
}