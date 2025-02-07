import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
  {
    title: "Горные породы",
    text: "Горные породы всегда очень ценились во всём мире",
    date: new Date
  },
  {
    title: "Поход в горы",
    text: "Большие горы всегда очень ценились во всём мире",
    date: new Date
  }
]

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      title: item.title,
      text: item.text,
      date: new Date(item.date)
    }]);
  };

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.map(el => (
            <CardButton>
              <JournalItem
                title={el.title}
                text={el.text}
                date={el.date}
              />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  )
}

export default App
