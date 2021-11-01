import './App.css';
import Bootton from '../containers/Button'
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'

function App() {

  return (
    <div className="App">
      <Bootton />
      <Loading />
      <NewsItem />
    </div>
  );
}

export default App;
