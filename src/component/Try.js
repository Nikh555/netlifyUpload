import React from "react";

function Try() {
  const files1 = ["anat.pdf" , 'physio.pdf' , 'anatSn.pdf' ]

  return (
    <>
    <h1>NAMASTE</h1>
    {<div id="notesCards">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"></p>
                <a href="/" className="btn btn-primary">
                  Open pdf
                </a>
              </div>
            </div>
          </div>}
    </>
  );
}

export default Try;
