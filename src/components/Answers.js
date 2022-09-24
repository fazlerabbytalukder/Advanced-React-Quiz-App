import React from 'react';
import CheckBox from './CheckBox';
import classes from '../styles/Answers.module.css';

const Answers = () => {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer} text="text answer" />
        </div>
    );
};

export default Answers;