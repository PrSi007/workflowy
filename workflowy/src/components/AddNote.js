import {useState} from "react";

const Addnote = () => {
    const [noteText, setNoteText] = useState("");

    const handleChange = (event) => {
        setNoteText(event.taget.value);
    };
    return(
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Type to add a note..." onChange={handleChange()} value={noteText}></textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    )
}

export default Addnote;