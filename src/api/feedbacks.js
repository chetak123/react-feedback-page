import { backendFeedbackUrl } from "../utils/urls";
export const fetchFeedbacks = async () => {
    try {
        const response = await fetch(backendFeedbackUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const createFeedback = async (feedback) => {
    try {
        await fetch(backendFeedbackUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: feedback,
                user: JSON.parse(localStorage.getItem('nameKey')),
            }),
        });
    } catch (error) {
        console.log(error);
    }
};
export const updateFeedback = async (feedbackId, user, action) => {
    try {
        await fetch(`${backendFeedbackUrl}/${feedbackId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user, action }),
        });
    } catch (error) {
        console.error('Error updating feedback:', error);
    }
};