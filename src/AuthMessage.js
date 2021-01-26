import styles from "./styles/AuthMessageStyles";

export default function AuthMessage ({children}) {
    const classes = styles ();

    return (
        <div className = {classes.messageStyle}>
            {children}
        </div>
    )
}