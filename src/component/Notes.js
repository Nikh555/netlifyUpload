import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import png from "../file/png-pdf.png";

function Notes() {
  const context = useContext(AppContext);
  const { state, dispatch } = context;

  const clickFunc = (props) => {
    const yearSelect = document.querySelector(".yearSelect").value;
    dispatch({ value: yearSelect });
  };

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <>
      <div className="noteForm-border" id="notes">
        <div className="notesForm">
          <h2>Notes</h2>
          <form>
            <div className="insideForm">
              <select className="form-select yearSelect" aria-label="Default select example">
                <option selected disabled={true}>
                  Select Year
                </option>
                <option value="1">One</option>
                <option value="2" disabled>Two</option>
                <option value="3" disabled>Three</option>
              </select>
              {/* <select className="form-select yearSelect" aria-label="Default select example">
                <option selected disabled={true}>
                  Select subject
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select> */}
              <button onClick={() => clickFunc()} type="button" id="formBtn-notes">
                Click
              </button>
            </div>
          </form>
          <div id="card-container">
            {state !== []
              ? state.map((file, index) => {
                  return (
                    <div className="notesCards" key={index}>
                      <img src={png} className="card-img-top" alt="..." />
                      <hr />
                      <div className="cardBase">
                        <h5 className="card-title">{file.split('.')[0]}</h5>
                        <a href={`/pdfNotes/${file}`} className="container btnOpen-pdf">
                          Open pdf
                        </a>
                      </div>
                    </div>
                  );
                })
              : console.log("not ok")}
          </div>
        </div>
      </div>
    </>
  );
}
// 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


export default Notes;
