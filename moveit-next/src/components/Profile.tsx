import styles from '../styles/components/Profile.module.css';

import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengeContext';

export function Profile() {
    const { level } = useContext(challengesContext);

    return(
        <div className={ styles.profileContainer }>
            <img src="assets/profile_img.jpg" alt="Bruno Milford"/>
            <div>
                <strong>Bruno Milford</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}