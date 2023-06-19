import {wordActions} from "../index";
import {Dispatch} from "redux";
import {StateInterface} from "../../../stateInterface";
import {selectWordIds} from "../selectors";

export const loadWordsIfNotExist = () => (dispatch: Dispatch,
                                          getState: () => StateInterface): void => {

    const state = getState();

    const loadedWordIds = selectWordIds(state);
    if (loadedWordIds?.length == undefined || loadedWordIds?.length > 0) {
        return
    }

    dispatch(wordActions.startLoading());

    fetch(`http://127.0.0.1:8080/api/v1/words`)
        .then((res) => (res.json()))
        .then((words) => {
            dispatch(wordActions.finishLoading(words));
        })
        .catch(() => {
            dispatch(wordActions.failedLoading());
        });
}