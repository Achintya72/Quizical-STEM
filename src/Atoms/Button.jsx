import styles from "./ButtonStyles.module.css";

export default function Button({ children, variant, onClick, background }) {
    let variants = {
        'primary': PrimaryButton,
        'secondary': SecondaryButton,
    }
    let Component = variants[variant];
    return (
        <>
            <Component onClick={onClick} background={background}>{children}</Component>
        </>
    )
}

Button.defaultProps = {
    background: 'dark'
}


const SecondaryButton = ({ onClick, children, background }) => (
    <div
        className={` 
            ${styles.button} 
            ${styles.secondary} 
            ${styles["secondary" + background]}
            `}
        onClick={onClick}
    >
        <a>{children}</a>
    </div>
)

const PrimaryButton = ({ onClick, children, background }) => (
    <div className={` 
        ${styles.button} 
        ${styles.primary} 
        ${styles["primary" + background]} `
    }
        onClick={onClick}
    >
        <a>{children}</a>
    </div >
)