import React, { useReducer } from "react";
import data from "./data.js";
import "./styles.css";

const initinalState = {
  selected: null,
  multiSelected: [],
  button: "single",
};

const actionTypes = {
  TOGGLE_SET_SELECTED: "TOGGLE_SET_SELECTED",
  TOGGLE_MULTI_SELECTED: "TOGGLE_MULTI_SELECTED",
  TOGGLE_BUTTON: "TOGGLE_BUTTON",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_SET_SELECTED:
      return {
        ...state,
        selected: action.payload === state.selected ? null : action.payload,
      };

    case actionTypes.TOGGLE_MULTI_SELECTED:
      const index = state.multiSelected.indexOf(action.payload);
      if (index === -1) {
        return {
          ...state,
          multiSelected: [...state.multiSelected, action.payload],
        };
      } else {
        return {
          ...state,
          multiSelected: state.multiSelected.filter(
            (item) => item !== action.payload
          ),
        };
      }
    case actionTypes.TOGGLE_BUTTON:
      return {
        ...state,
        button: state.button === "single" ? "multi" : "single",
      };
    default:
      return state;
  }
}

function Accordion() {
  const [state, dispatch] = useReducer(reducer, initinalState);

  function handleButton() {
    dispatch({ type: actionTypes.TOGGLE_BUTTON });
  }

  function handleSelection(id) {
    if (state.button === "single") {
      dispatch({ type: actionTypes.TOGGLE_SET_SELECTED, payload: id });
      
    } else {
      dispatch({ type: actionTypes.TOGGLE_MULTI_SELECTED, payload: id });
     
    }
  }
  return (
    <div className="wrapper">
      <button className="button" onClick={() => handleButton()}>
        {state.button}
      </button>
      <div className="items">
        {data.map((dataItem) => {
          return (
            <div className="item" key={dataItem.id}>
              <div
                className="question"
                onClick={() => handleSelection(dataItem.id)}
              >
                {dataItem.question}
              </div>

              {(state.button === "single" && state.selected === dataItem.id) ||
              (state.button === "multi" &&
                state.multiSelected.includes(dataItem.id)) ? (
                <div className="answer">{dataItem.answer}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Accordion;
