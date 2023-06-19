import {selectEntitiesModule} from "../selectors";
import {StateInterface, WordInterface, WordsInterface} from "../../stateInterface";

export const selectWordModule = (state:StateInterface) : WordsInterface =>
    selectEntitiesModule(state)?.words!;

export const selectWordIds = (state:StateInterface) :number[] => selectWordModule(state)?.ids!;

export const selectWordEntities = (state:StateInterface) :Record<number, WordInterface> => selectWordModule(state)?.entities!;




