const Experience = () => {
    return (
        <div style={styles.page}>
            <div style={styles.container}>

                <h1 style={styles.heading}>Experience</h1>
                <p style={styles.subHeading}>
                    My professional journey so far
                </p>

                <div style={styles.divider}></div>

                <div style={styles.timeline}>

                    <div style={styles.experienceCard}>
                        <h3 style={styles.role}>
                            System Engineer — Tata Consultancy Services
                        </h3>
                        <p style={styles.duration}>Dec 2023 – Present</p>
                        <p style={styles.description}>
                            Working as a System Engineer with exposure to full-stack
                            development, frontend technologies, and data-related concepts.
                            Actively involved in learning enterprise-grade development
                            practices.
                        </p>
                    </div>

                    <div style={styles.experienceCard}>
                        <h3 style={styles.role}>
                            Software Engineer — Leasing Monk
                        </h3>
                        <p style={styles.duration}>Nov 2022 – Feb 2023</p>
                        <p style={styles.description}>
                            Gained hands-on experience in full-stack web development,
                            focusing primarily on React.js frontend development.
                            Built responsive user interfaces and reusable components
                            from Figma designs.
                        </p>
                    </div>

                    <div style={styles.experienceCard}>
                        <h3 style={styles.role}>
                            More experience coming soon
                        </h3>
                        <p style={styles.duration}>🚧</p>
                        <p style={styles.description}>
                            I am continuously growing my skill set and working on new
                            responsibilities. This section will be updated with
                            detailed case studies.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}


const styles = {


    /* PAGE */
    page: {
        width: '100%',
        minHeight: '100%',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        paddingTop: '90px', // IMPORTANT: space for navbar
        fontFamily: 'Arial, sans-serif',
    },

    heading: {
        fontSize: '32px',
        marginBottom: '8px',
        color: '#218cf8ff',
    },
    subHeading: {
        fontSize: '16px',
        color: '#6b7280',
        marginBottom: '20px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    divider: {
        width: '60px',
        height: '4px',
        backgroundColor: '#3b82f6',
        margin: '0 auto 20px',
        borderRadius: '2px',
    },
    container: {
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center',
    },

    timeline: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
    },

    experienceCard: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '25px',
        textAlign: 'left',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    },

    role: {
        fontSize: '18px',
        marginBottom: '6px',
        color: '#1f2933',
    },

    duration: {
        fontSize: '13px',
        color: '#2563eb',
        fontWeight: 'bold',
        marginBottom: '10px',
    },

    description: {
        fontSize: '14px',
        color: '#374151',
        lineHeight: '1.6',
    },



}

export default Experience