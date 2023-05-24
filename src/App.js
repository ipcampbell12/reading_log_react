//need to include this to use bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import BookFeed from './components/MainView/BookFeed';

function App() {
  return (
    <div>
      <Header />
      <main>
        <BookFeed />
      </main>
    </div>
  );
}

export default App;
