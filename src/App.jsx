import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournalItem'

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
    <>
      <h1>Заголовок</h1>
      <p>Какой-то текст</p>
      <Button />
      <CardButton>
        Новое воспоминание
      </CardButton>
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
    </>
  )
}

export default App
