import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import CreateNewUserPage from "./pages/CreateNewUserPage";
import CreateNewTopic from "./pages/CreateNewTopicPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/newuser" element={<CreateNewUserPage />} />
            <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/newtopic" element={<CreateNewTopic />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;