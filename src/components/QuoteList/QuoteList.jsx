import "./QuoteList.scss";
import Quote from "../quote/quote";

const QuoteList = (props) => {
  return (
    <>
      <h2 className="heading">The full list of quotes</h2>
      <div className="container">
        {props.quotes && props.quotes.map(quote => <Quote key={quote.id} quote={quote} isHidden={false}/>)}
      </div>
    </>
  )
}

export default QuoteList
