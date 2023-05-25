//need to include this to use bootstrap
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import BookFeed from './components/MainView/BookFeed';
import Stats from './components/MainView/Stats'
import EntryForm from './components/EntryForm/EntryForm';


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
      {displayEntryForm && <EntryForm onClose={hideEntryFormHandler} />}
      <Header onShowEntryModal={showEntryFromHandler} />
      <main className='main'>
        <BookFeed />
        <Stats />
      </main>
    </div>
  );
}

export default App;
