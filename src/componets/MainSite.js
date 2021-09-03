import React, { useState } from 'react'

function MainSite(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const ClearTextClick = () => {
        setText("");
    }
    const CopyTextClick = () => {
        setText("");
    }

    const CapitlizeTextClick = () => {
        let CptilazeT = text
        const realText_1 = CptilazeT[0].toUpperCase();
        const realText_2=CptilazeT.substring(1);
            setText(realText_1+realText_2);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className=" container">
                <div className="container my-4 ">
                    <h3>{props.heading}</h3>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upercase</button>

                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={CopyTextClick}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={CapitlizeTextClick}>Cpitlize Text</button>
                <button className="btn btn-danger mx-2" onClick={ClearTextClick}>Clear text</button>
            </div>
            <div className="container my-3">
                <h3>You text summary</h3>
                <p>{text.split(" ").length} word and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minits read</p>
                <h4>Preview</h4>
                <p>
                    <pre className="card">
                        {text}
                    </pre>
                </p>
            </div>
        </>
    );
}

export default MainSite;
