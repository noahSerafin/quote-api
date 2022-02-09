import "./QuoteList.scss";
import Quote from "../Quote/Quote";

const QuoteList = (props) => { 


  return (
    <>
      <h2 className="heading">The Full List of Quotes</h2>
      <div className="container">
        {props.quotes && props.quotes.map(quote => <Quote key={quote.id} quote={quote} isHidden={false}/>)}
      </div>
    </>
  )
}

export default QuoteList
