import './JournalItem.css'

function JournalItem() {
    const title = "Горные породы";
    const date = new Date;
    const text = "Горные породы всегда очень ценились во всём мире";

    return (
        <div className="journal-item">
            <h2 className='journal-item__header'>{title}</h2>
            <h2 className='journal-item__body'>
                <div className='journal-item__date'>{date.toDateString()}</div>
                <div className='journal-item__text'>{text}</div>
            </h2>
        </div>
    )
}

export default JournalItem
