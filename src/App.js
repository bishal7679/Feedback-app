// import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
// import Card from "./components/shared/Card";
//import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
//import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
//import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
function App() {
  //const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // };

  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };
  return (
    <FeedbackProvider>
      <Router>
        {/* <Header text="Feedback UI" bgColor="red" textColor="blue" /> */}
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                // <> fragment
                <>
                  {/* <FeedbackForm handleAdd={addFeedback} /> */}
                  <FeedbackForm />
                  {/* <FeedbackStats feedback={feedback} /> */}
                  <FeedbackStats />
                  {/* <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  /> */}
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>

          {/* <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card> */}
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
