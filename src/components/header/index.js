import React from 'react';
import './header.css';

export default () => {

  return (
    <div className="App-header">
      <div className="cta">
        <div className="channel">
          <div className="calling">
            <span className="ola">Olá</span>, acompanhe e siga o canal
          </div>
          <div className="name">GEORGE GRACIE</div>
        </div>
        <div className="video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/47Sq6bwHWjM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}