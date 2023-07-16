
export const backendUrl = "https://api.convoy.tessell.cloud";
// export const backendUrl = "http://localhost:8000";
export const backendFeedbackUrl = "http://localhost:8000/feedback";

export const getHeaders = () => {
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    return headers;
};