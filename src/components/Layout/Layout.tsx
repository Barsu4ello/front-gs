import {Header} from "../Header/Header";
import {ReactNode} from "react";
import {Footer} from "../Footer/Footer";
import styles from "./styles.module.css";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return(
        <div className={styles.root}>
            <Header/>
            <>{children}</>
            <Footer/>
        </div>
    );

}