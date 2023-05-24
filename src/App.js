//need to include this to use bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import BookFeed from './components/MainView/BookFeed';
import Stats from './components/MainView/Stats'


function App() {
  return (
    <div className='overall'>
      <Header />
      <main className='main'>
        <BookFeed />
        <Stats />
      </main>
    </div>
  );
}

export default App;
