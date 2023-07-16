import React, { useEffect, useState, useRef } from 'react';
import './Feedback.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { updateFeedback } from '../../api/feedbacks';

const Feedback = ({
    feedbackTitle,
    feedbackId,
    loginUser,
    thumbsupUsers,
    feedbackOwner,
    updateFeedbacks,
}) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const [thumbsUpCount, setThumbsUpCount] = useState(thumbsupUsers.length);
    const titleRef = useRef(null);

    useEffect(() => {
        setIsPressed(thumbsupUsers.includes(loginUser));
    }, [thumbsupUsers, loginUser]);

    useEffect(() => {
        setIsOwner(feedbackOwner === loginUser);
    }, [feedbackOwner, loginUser]);

    const handleCheckButtonClick = async () => {
        try {
            if (isPressed) {
                await updateFeedback(feedbackId, loginUser, 'remove');
                setIsPressed(false);
                setThumbsUpCount((prevCount) => prevCount - 1);
            } else {
                await updateFeedback(feedbackId, loginUser, 'add');
                setIsPressed(true);
                setThumbsUpCount((prevCount) => prevCount + 1);
            }
            console.log('Feedback updated successfully');
            updateFeedbacks();
        } catch (error) {
            console.error('Error updating feedback:', error);
        }
    };

    useEffect(() => {
        const cardHeight = titleRef.current.offsetHeight + 20;
        const cardStyle = { height: `${cardHeight}px` };
        setCardStyle(cardStyle);
    }, [feedbackTitle]);

    const [cardStyle, setCardStyle] = useState({});

    return (
        <div className="feedback-container">
            <div className="feedback-paper" style={cardStyle}>
                <div className="feedback-content">

                    <div className="feedback-footer">
                        {isOwner ? (
                            <span className="icon-container grey">
                                <ThumbUpIcon />
                            </span>
                        ) : (
                            <span className="icon-container" onClick={handleCheckButtonClick}>
                                {isPressed ? <ThumbUpIcon /> : <ThumbUpAltOutlinedIcon />}
                            </span>
                        )}
                        {thumbsUpCount > 0 && <span className="thumbs-count">{thumbsUpCount}</span>}
                    </div>
                    <div className="feedback-title" ref={titleRef}>
                        {feedbackTitle}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;

