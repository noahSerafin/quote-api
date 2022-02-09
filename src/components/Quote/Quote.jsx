import "./Quote.scss";

const Quote = (props) => {
  const {
    president,
    quote,
    date
  } = props.quote;

  const {isHidden} = props;

  return (
    <div className="quote">
      <h3>{quote}</h3>
      <div className= {`visible ${isHidden ? "hidden" : ""}`}>
        <p>Said by: {president}</p>
        <p>Said on: {date}</p>
      </div>      
    </div>
  )
}

export default Quote

//<div className= `{isHidden} ? "quote":"quote-guess"`>