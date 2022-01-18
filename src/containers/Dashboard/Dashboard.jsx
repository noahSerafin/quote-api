import { useState, useEffect } from "react";
import "./Dashboard.scss";
import QuoteList from "../../components/QuoteList/QuoteList";
import Form from "../../components/Form/Form";
import Home from "../../components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {
  const [quotes, setquotes] = useState([]);
  //const [quote, setquote] = useState([]);

  const getquotes = () => {
    fetch("http://localhost:8080/quotes")
      .then(res => res.json())
      .then(json => setquotes(json))
      .catch(err => console.log(err))
  }

  /*const getquote = () => {
    fetch("http://localhost:8080/quote")
      .then(res => res.json())
      .then(json => setquote(json))
      .catch(err => console.log(err))
  }*/

  useEffect(() => {
    getquotes();
  }, [quotes]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<QuoteList quotes={quotes} />} />
        <Route path="/new-quote" element={<Form />} />
      </Routes>
    </Router>
  )
}

export default Dashboard
