import {Layout} from "../../components/Layout/Layout";
import {WordsContainer} from "../../containers/WordsContainer/WordsContainer";

export const MyWorldsPage = () =>
    <div style={{display:"flex", height: "100%"}}>
        <Layout children={<WordsContainer/>}/>
    </div>