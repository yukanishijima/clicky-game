import React from 'react';
import "./style.css";

function Header(props) {
  return (
    <>
      <h1>Halloween Clicky Game</h1>
      <button type="button" className="modal-btn" data-toggle="modal" data-target="#instructions">?</button>
      <p>{props.message}</p>
      <div>
        <div>Score {props.score}</div>
        <div>Top Score {props.topScore}</div>
      </div>

      {/* modal */}
      <div className="modal fade" id="instructions" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">How to play</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>- Click each image only once and never repeat!</p>
              <p>- Be careful, every time any image is clicked, all of the images shuffle in a random order.</p>
              <p>- You will loose when you click on the same image more than once!</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn got-btn" data-dismiss="modal">Got it?</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;