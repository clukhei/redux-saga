import './App.css';
import Button from '../containers/Button'
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'

function App() {

  return (
    <div className="App">
      <Button />
      <Loading />
      <NewsItem />
    </div>
  );
}

export default App;
