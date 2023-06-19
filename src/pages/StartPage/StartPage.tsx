import {Layout} from "../../components/Layout/Layout";
import {WelcomeComponent} from "../../components/WelcomeComponent/WelcomeComponent";

export const StartPage = () =>
    <div style={{display:"flex", height: "100%"}}>
        <Layout children={<WelcomeComponent/>}/>
    </div>
