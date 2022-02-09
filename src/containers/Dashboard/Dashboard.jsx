import { useState, useEffect } from "react";
import "./Dashboard.scss";
import QuoteList from "../../components/QuoteList/QuoteList";
import Home from "../../components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { getSelectionRange } from "@testing-library/user-event/dist/utils";

const Dashboard = () => {
  const [quotes, setquotes] = useState([]);
  const [quote, setquote] = useState([]);//  c

  const getquotes = () => {
    fetch("http://localhost:8080/quotes")
      .then(res => res.json())
      .then(json => setquotes(json))
      .catch(err => console.log(err))
  }

  const getquote = () => { //
    fetch("http://localhost:8080/random")
      .then(res => res.json())
      .then(json => setquote(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getquotes();
  }, [quotes]);

  useState(() => { //
    getquote();
  }, [quote]);  

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/random" element={<Home quote={quote}/>} />
        <Route path="/quotes" element={<QuoteList quotes={quotes} />} />        
      </Routes>
    </Router>
  )
}

export default Dashboard

/*<Route path="/new-quote" element={<Form />} />*/
