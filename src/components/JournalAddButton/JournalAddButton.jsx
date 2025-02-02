import CardButton from '../CardButton/CardButton'
import './JournalAddButton.css'

function JournalAddButton() {

    return (
        <CardButton className="journal-add">
           <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="1" width="2" height="8" fill="white"/>
                <rect x="1" y="4" width="8" height="2" fill="white"/>
           </svg>
            Новое воспоминание
        </CardButton>
    )
}

export default JournalAddButton
