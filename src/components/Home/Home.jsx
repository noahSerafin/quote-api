import "./Home.scss";
import Quote from "../quote/quote";

const Home = () => {
  return (
    <div>
      <h1>The Last Four Presidents</h1>
      <h2>Take a guess at who said this:</h2>
      <Quote call="random"/>
      <button>Bush</button>
      <button>Obama</button>
      <button>Trump</button>
      <button>Biden</button>
    </div>  
  )
}

export default Home
