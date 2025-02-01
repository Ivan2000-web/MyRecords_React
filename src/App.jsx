import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

function App() {

  const data = [
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

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <JournalAddButton/>
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>  
      </LeftPanel>  
      <Body>
        Body
      </Body>      
    </div>
  )
}

export default App
