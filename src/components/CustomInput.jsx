import styles from "../styles/customInput.module.scss"
function CustomInput({ email, setEmail, isEmail }) {
    return (
        <>
            <div class={styles.inputgroup}>
                <input type="text" id="myInput" class={styles.inputgroup__input} value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder="Enter your email" />
                <p style={{ display: isEmail ? 'none' : 'block', color: 'red', marginLeft: '20px' }}> Invalid email entered</p>
            </div>
        </>
    )
}

export default CustomInput
