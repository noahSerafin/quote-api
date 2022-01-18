import "./Quote.scss";

const Quote = (props) => {
  const {
    president,
    quote,
    date
  } = props.greeting;

  const {isHidden} = props;

  return (
    <div className="quote">
      <h3>{quote}</h3>
      <div className={isHidden}>
        <p>Said by: {president}</p>
        <p>Said on: {date}</p>
      </div>      
    </div>
  )
}

export default Quote