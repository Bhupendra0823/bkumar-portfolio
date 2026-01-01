
const ViewResume = () => {
    return (
        
            <a
                href="https://bkumar0823.space/resume"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resumeBtn}
            >
                View Resume
            </a>
        
    )
}
const styles = {
    resumeBtn: {
        display: 'inline-block',
        // marginTop: '30px',
        padding: '12px 28px',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
    }
}
export default ViewResume