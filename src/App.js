//need to include this to use bootstrap
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import BookFeed from './components/MainView/BookFeed';
import Stats from './components/MainView/Stats'


function App() {

  const [displayEntryForm, setDisplayEntryForm] = useState(false)

  const showEntryFromHandler = () => {
    setDisplayEntryForm(true)
  }

  const hideEntryFormHandler = () => {
    setDisplayEntryForm(false)
  }

  return (
    <div className='overall'>

      <Header />
      <main className='main'>
        <BookFeed onShowEntryModal={showEntryFromHandler} />
        <Stats />
      </main>
    </div>
  );
}

export default App;
