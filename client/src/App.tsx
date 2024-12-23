import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TasksPage />} />
            </Routes>
        </Router>
    );
}

export default App;
