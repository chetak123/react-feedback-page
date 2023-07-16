import React, { useState } from 'react';
import { FormControl, Container, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for CSS styles
const FormContainer = styled(Container)({
    position: 'fixed',
    bottom: 50,
    width: '100%',
    height: 60,
    textAlign: 'center',
});

const StyledButton = styled(Button)({
    margin: 10,
});

const FeedbackForm = ({ createFeedback }) => {
    const [feedbackText, setFeedbackText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createFeedback(feedbackText);
        setFeedbackText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent form submission on Enter key
            handleSubmit(e); // Submit the form
        } else if (e.shiftKey && e.key === 'Enter') {
            e.target.rows += 1; // Increase the number of rows
        }
    };

    return (
        <div>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth={true}>
                        <TextField
                            label="Give your feedback here"
                            required={true}
                            value={feedbackText}
                            onChange={(event) => setFeedbackText(event.target.value)}
                            multiline // Enable multiline input
                            minRows={1} // Minimum number of rows
                            onKeyDown={handleKeyDown} // Handle Shift+Enter to increase the text input area
                        />
                        <StyledButton color="primary" variant="solid" type="submit">
                            Add Feedback
                        </StyledButton>
                    </FormControl>
                </form>
            </FormContainer>
        </div>
    );
};

export default FeedbackForm;