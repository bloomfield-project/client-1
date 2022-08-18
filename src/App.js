import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./component/header/Header";
// import Login from "./component/Login/Login";
import FogotPassForm from "./component/Login/Login Forms/FogotPassForm";
import ResetPassForm from "./component/Login/Login Forms/ResetPassForm";
import LoginForm from "./component/Login/Login Forms/LoginForm";
import Navbar from "./component/NavigationBar/Navbar";
import Tables from "./component/Table/Table";
import Home from "./pages/Home";
import Button from 'react-bootstrap/Button';
import Players from "./pages/Manager/js/Players";
import CricketRanking from "./pages/Manager/js/CricketRanking";
import SearchTable from "./component/Search/SearchTable";
import Session from "./pages/Manager/js/Session";
import Membership from "./pages/Manager/js/Membership";
import SampleForm from "./component/Form/SampleForm";
import FormData from "./component/Form/FormData";
import PlayerRanking from "./pages/player/js/playerRanking"
import Progress from "./pages/player/js/Progress"
import PrivateProgress from "./pages/player/js/PrivateProgress"
import Matches from "./pages/player/js/Matches";
import MatchDetails from "./pages/player/js/MatchDetails"
import PSessionDetails from "./pages/player/js/PSessionDetails"
import CSessionDetails from "./pages/player/js/CSessionDetails"
import EventDetails from "./pages/player/js/EventDetails"

import IntroTable from "./component/IntroTable/IntroTable";
import Calander from "./component/Calander/Calander";
import PracticeSessions from "./pages/Coach/js/PracticeSessions";
import Appoinments from "./pages/Coach/js/Appoinments";
import ViewAppoinments from "./pages/Coach/js/ViewAppoinments";

const List = [
  {id:1, name: "John Doe" , Age: 27},
  {id:1, name: "John Doe" , Age: 27},
  {id:1, name: "John Doe" , Age: <Button variant="secondary">View</Button>},
]

const colNames = ['id','Name','Age']

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <FogotPassForm /> */}
        {/* <ResetPassForm /> */}
        <Routes>
          <Route path="/ResetPassword" element={<ResetPassForm />} />
          <Route path="/FogotPassword" element={<FogotPassForm/>} />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/client" element={<Home/>} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Table" element={<Tables list={List} colNames={colNames} />} />
          <Route path="/manager/Players" element={<Players />} />
          <Route path="/manager/FormData" element={<FormData />} />
          <Route path="/manager/CricketRanking"  element={<CricketRanking/>}/>
          <Route path="/manager/Session"  element={<Session/>}/>
          <Route path="/manager/Membership"  element={<Membership/>}/>
          <Route path="/manager/SampleForm" element={<SampleForm />} />
          <Route path="/player/playerRanking" element={<PlayerRanking />} />
          <Route path="/player/Progress" element={<Progress />} />
          <Route path="/player/PrivateProgress" element={<PrivateProgress />} />
          <Route path="/player/Matches" element={<Matches />} />
          <Route path="/player/MatchDetails" element={<MatchDetails />} />
          <Route path="/player/PSessionDetails" element={<PSessionDetails />} />
          <Route path="/player/CSessionDetails" element={<CSessionDetails />} />
          <Route path="/player/EventDetails" element={<EventDetails />} />

          <Route path="/player/I" element={<IntroTable />} />
          <Route path="/C" element={<Calander />} />
          <Route path="/couch/PSessions" element={<PracticeSessions />} />
          <Route path="/couch/A" element={<Appoinments />} />
          <Route path="/couch/Ap" element={<ViewAppoinments/>} />


          {/* <Route path="/Search" element={<SearchTable/>} />/ */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
