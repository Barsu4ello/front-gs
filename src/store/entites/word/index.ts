import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WordInterface, WordsInterface} from "../../stateInterface";

const initialState: WordsInterface = {
    entities: {},
    ids: [],
    status: "idle",
};

const SLICE_NAME = "word";

export const wordSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        startLoading: (state: WordsInterface) => {
            return {...state, status: "inProgress"};
        },
        failedLoading: (state: WordsInterface) => {
            state.status = "failed";
            return state;
        },
        finishLoading: (state: WordsInterface, action: PayloadAction<WordInterface[]>) => {
            const words: WordInterface[] = action.payload;
            state.entities = words.reduce(
                (acc, word) => {
                    acc[word.id] = word;
                    return acc;
                },
                {...state.entities}
            );
            state.ids = [...words.map(({id}) => id), ...(state.ids || [])];
            state.status = "success";
            return state;
        },
        removeWord: (state: WordsInterface, action: PayloadAction<number>) => {
            const removeId: number = action.payload
            if (state.entities !== undefined) {
                delete state.entities[removeId]
            }
            state.ids = state.ids?.filter(id => id !== removeId);
            state.status = "success";
            return state;
        },
        addWord: (state: WordsInterface, action: PayloadAction<WordInterface>) => {
            const word: WordInterface = action.payload
            if (state.entities !== undefined && word.id) {
                state.entities[word.id] = word
            }
            state.ids?.push(word.id);
            state.status = "success";
            return state;
        },
        updateWord: (state: WordsInterface, action: PayloadAction<WordInterface>) => {
            const word: WordInterface = action.payload
            if (state.entities !== undefined && word.id) {
                state.entities[word.id] = word
            }
            state.ids?.push(word.id);
            state.status = "success";
            return state;
        },
    }

})

export default wordSlice.reducer;


export const wordActions = wordSlice.actions;