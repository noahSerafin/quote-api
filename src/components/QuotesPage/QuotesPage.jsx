import React, {useState, useEffect} from "react";
import QuoteList from "../QuoteList/QuoteList";

const QuotesPage = (props) => {

  const [quotes, setQuotes] = useState([]);
  const [filterBiden, setFilterBiden] = useState([]);
  const [filterBush, setFilterBush] = useState([]);
  const [filterTrump, setFilterTrump] = useState([]);
  const [filterObama, setFilterObama] = useState([]);

  useEffect(() => {
    const URL = `http://localhost:8080/quotes${filterBush}${filterObama}${filterTrump}${filterBiden}`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((quotes) => {
        setQuotes(quotes);
      });
  }, [filterBush, filterObama, filterTrump, filterBiden]);

  /*const searchBush = () => {
    handleClick(filterBush, setFilterBush, "&bush")
  }*/

  return(
    
    <QuoteList quotes={quotes}/>
  
  )
  

};

export default QuotesPage;
