import CustomTextField from '@/components/CustomTextField'

function TranscriberForm() {
    return (
        <div width='800px' style={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>
            <CustomTextField filename={file} />
            <div class={styles.inputgroup}>
                <input type="text" id="myInput" class={styles.inputgroup__input} value={email} onChange={(e) => {
                    setEmail(e.target.value)
                    validateEmail(email)
                }} placeholder="Enter your email" />
            </div>

        </div>
    )
}

export default TranscriberForm
