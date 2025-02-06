// single selection
import { useState } from "react";
import data from "./data.js";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [button, setButton] = useState("single");
  const [multiy, setMultiy] = useState([]);

  function handleSingleSelection(getId) {
    setSelected(getId === selected ? null : getId);
  }
  function handleMultiySelection(getId) {
    let currentMultiy = [...multiy];
    const indexOfCurrentId = currentMultiy.indexOf(getId)
    if(indexOfCurrentId === -1) currentMultiy.push(getId)
    else currentMultiy.splice(indexOfCurrentId, 1)
    
    setMultiy(currentMultiy)
    console.log(selected, multiy)
    
    
  }
  function handleButton() {
    setButton(button === "single" ? "multiy" : "single");
  }

  return (
    <div className="wrapper">
      <div className="items">
        <button className="button" onClick={() => handleButton()}>
          {button} selection{" "}
        </button>
        {data.map((dataItem) => (
          <div className="item">
            <div
              onClick={
                button === "single"
                  ? () => handleSingleSelection(dataItem.id)
                  : () => handleMultiySelection(dataItem.id)
              }
              className="question"
            >
              <h3 className="question">{dataItem.question}</h3>
            </div>
            {button ==="multiy"?
             multiy.indexOf(dataItem.id) !== -1 && <div className="answer">{dataItem.answer}</div> :
            selected === dataItem.id  ? (
              <div className="answer">{dataItem.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;
