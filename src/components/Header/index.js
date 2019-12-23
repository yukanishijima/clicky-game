import React from 'react';
import "./style.css";

function Header(props) {
  return (
    <>
      <h1>Halloween Clicky Game</h1>
      <button type="button" className="modal-btn" data-toggle="modal" data-target="#instructions">?</button>
      <p id="msg" className={props.color}>{props.message}</p>

      <div>
        <span className="score">Score {props.score}</span>
        <span className="score">Top Score {props.topScore}</span>
      </div>

      {/* modal */}
      <div className="modal fade" id="instructions" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <div className="how-to-use">
                <p>How to play</p>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="close-btn">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p><i className="fas fa-skull"></i>&nbsp; Click each image only once and never repeat!</p>
              <p><i className="fas fa-skull"></i>&nbsp; Be careful, every time any image is clicked, all of the images shuffle in a random order.</p>
              <p><i className="fas fa-skull"></i>&nbsp; You will loose when you click on the same image more than once!</p>
            </div>
            <div className="modal-footer" id="my-modal-footer">
              <p id="special-thanks"><a href="https://www.freepik.com/katemangostar" target="_blank" rel="noopener noreferrer">Halloween vector illustrations created by katemangostar.</a></p>
              <button type="button" className="btn got-btn" data-dismiss="modal">Got it?</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header;