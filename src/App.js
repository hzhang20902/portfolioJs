import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./components/navbar/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Map from "./components/map/Map";
import Profile from "./components/Profile";
import BoardAdmin from "./components/boards/BoardAdmin";
import BoardModerator from "./components/boards/BoardModerator";
import BoardUser from "./components/boards/BoardUser";

import Register from "./components/Register";
import NewLogin from "./components/NewLogin";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height: '10%',
      overflow: 'hidden',
    },
  },
  wrapper: {
      display: 'flex',
      flexShrink: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

      [theme.breakpoints.down('xs')]: {
        width: '70%',
        overflow: 'scroll',
    }
  },
}));


const App = () => {

  const classes = useStyles();

  return (
    <div>
    <NavBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/login" element={<NewLogin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
        </Routes>
    </div>
  );
};

export default App;
