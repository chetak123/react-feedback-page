import React, { useEffect, useState } from 'react';
import Feedback from './Feedback';

// CSS styles
const styles = {
    container: {
        height: 'calc(100vh - 120px)',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflow: 'scroll',
    },
};

const FeedbackList = ({ feedbacks, updateFeedbacks }) => {
    const [loginUser, setLoginUser] = useState('');

    useEffect(() => {
        const savedLoginUser = localStorage.getItem('nameKey');
        if (savedLoginUser) {
            setLoginUser(JSON.parse(savedLoginUser));
        }
    }, []);

    return (
        <div style={styles.container}>
            {feedbacks.map((feedback) => (
                <Feedback
                    key={feedback.ID}
                    feedbackTitle={feedback.text}
                    feedbackId={feedback.ID}
                    thumbsupUsers={feedback.users}
                    loginUser={loginUser}
                    feedbackOwner={feedback.owner}
                    updateFeedbacks={updateFeedbacks}
                />
            ))}
        </div>
    );
};

export default FeedbackList;

