import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={ styles.profileContainer }>
            <img src="assets/profile_img.jpg" alt="Bruno Milford"/>
            <div>
                <strong>Bruno Milford</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}