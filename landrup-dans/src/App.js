import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Activities from "./views/Activities";
import ActivityDetail from "./views/ActivityDetail";
import ActivitySearch from "./views/ActivitySearch";
import Calendar from "./views/Calendar";
import TeamsOverview from "./views/TeamsOverview";
import TokenProvider from "./contexts/TokenContext";
import Nav from "./components/Nav";
function App() {
  return (
    <TokenProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activitydetail/:id" element={<ActivityDetail />} />
          <Route path="/activitysearch" element={<ActivitySearch />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/teamsoverview/:id" element={<TeamsOverview />} />
        </Routes>
        <Nav />
      </div>
    </TokenProvider>
  );
}
export default App;
