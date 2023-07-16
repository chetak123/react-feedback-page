import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Sidebar from "./Pages/global/Sidebar";
import Topbar from "./Pages/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import InputUserForm from './Pages/Feedbacks/InputUserForm';
import FeedbackList from './Pages/Feedbacks/FeedbackList';
import FeedbackForm from './Pages/Feedbacks/FeedbackForm';
import { fetchFeedbacks, createFeedback } from './api/feedbacks';

export const ENDPOINT = "http://localhost:8000/feedback";

function App() {
  const [theme, colorMode] = useMode();

  const [feedbacks, setFeedbacks] = useState([]);


  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    const data = await fetchFeedbacks();
    setFeedbacks(data);
  };

  const updateFeedbacks = () => {
    loadFeedbacks();
  };

  const handleCreateFeedback = async (feedback) => {
    await createFeedback(feedback);
    loadFeedbacks();
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div>
            <InputUserForm updateFeedbacks={updateFeedbacks} />
            <>
              <Sidebar />
              <Topbar />
              <Container>

                <FeedbackList feedbacks={feedbacks} updateFeedbacks={updateFeedbacks} />
                <FeedbackForm createFeedback={handleCreateFeedback} />
              </Container>
            </>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;