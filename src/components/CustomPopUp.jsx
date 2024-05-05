import styles from "../styles/CustomPopup.module.scss"
function CustomPopUp() {
    return (
        <div className={styles.speechbubble}>
            <p>
                So I created this thread to see if anyone wants to work on creating an N Wheeled class vehicle with me, as opposed to a bunch of people banging their heads against the wall seperately.
                <span className={styles.username}>Feuern_D</span>
            </p>
        </div>
    )
}

export default CustomPopUp
