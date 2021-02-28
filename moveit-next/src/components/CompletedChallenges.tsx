import styles from '../styles/components/CompletedChallenges.module.css';

import { challengesContext } from '../contexts/ChallengeContext';
import { useContext } from 'react';

export function CompleteChallenges() {
    const { challengesCompleted } = useContext(challengesContext);

    return(
        <div className={ styles.completedChallengesContainer }>
            <span>Desafios Completos</span>
            <span>{ challengesCompleted }</span>
        </div>
    );
}