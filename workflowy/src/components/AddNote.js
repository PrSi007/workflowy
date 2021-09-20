import {useState} from "react";

const Addnote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 200;

    const handleChange = (event) => {
        if(charLimit - event.target.value.length>=0)
        {
            setNoteText(event.target.value);
        }
        };

    const handleClick =  () => {
        if(noteText.trim().length>0)
        {
            handleAddNote(noteText);
            setNoteText('');
        }
        };

    return(
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Type to add a note..." onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

export default Addnote;