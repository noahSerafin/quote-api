import { useState } from "react";
import "./Form.scss";

// form styles jacked from here
// https://codepen.io/banunn/pen/AFnal

const Form = () => {
  const [quote, setQuote] = useState({
    president: "",
    quote: "",
    date: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quote)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
  }

  return (
    <div className="log-form">
      <h2>Add A New Quote</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="president" onInput={(e) => setQuote({ ...quote, president: e.target.value })} />
        <input type="text" placeholder="quote" onInput={(e) => setQuote({ ...quote, quote: e.target.value })} />
        <input type="text" placeholder="date" onInput={(e) => setQuote({ ...quote, date: e.target.value })} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;