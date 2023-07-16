import React, { useState, useEffect } from 'react';
import { FormControl, Container, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for CSS styles
const FormContainer = styled(Container)({
    position: 'fixed',
    top: '10px',
    right: '10px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-end', // moves the from towards the extreme right of screen.
});

const StyledButton = styled(Button)({
    margin: 10,
});

const InputUserForm = ({ updateFeedbacks }) => {
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('nameKey', JSON.stringify(userName));
        console.log('here');

        updateFeedbacks();

    };

    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    useEffect(() => {
        const savedName = localStorage.getItem('nameKey');
        if (savedName) {
            setUserName(JSON.parse(savedName));
        }
    }, []);

    return (
        <div>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{ width: 200 }}>
                        <TextField
                            label="Enter user name"
                            required={true}
                            value={userName}
                            onChange={handleChange}
                        />
                        <StyledButton
                            color="primary"
                            variant="solid"
                            type="submit"
                        >
                            Provide User
                        </StyledButton>
                    </FormControl>
                </form>
            </FormContainer>
        </div>
    );
};

export default InputUserForm;