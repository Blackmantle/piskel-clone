import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
import screenshot from '../img/screenshot.png';
import sprite1 from '../img/sprite1.gif';
import sprite2 from '../img/sprite2.gif';
import sprite3 from '../img/sprite3.gif';
import sprite4 from '../img/sprite4.gif';
import sprite5 from '../img/sprite5.gif';
import sprite6 from '../img/sprite6.gif';
import sprite7 from '../img/sprite7.gif';
import sprite8 from '../img/sprite8.gif';
import overviewItem1 from '../img/overviewItem1.png';
import overviewItem2 from '../img/overviewItem2.png';
import overviewItem3 from '../img/overviewItem3.png';
import overviewItem4 from '../img/overviewItem4.png';
import overviewItem5 from '../img/overviewItem5.png';
import overviewItem6 from '../img/overviewItem6.png';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page__intro">
        <div className="wrapper landing-page__intro-wrapper">
          <div className="app-info">
            <h1>Piskel Clone</h1>
            <p className="app-info__description">free online editor for animated sprites & pixel art</p>
            <h3>Create animations in your browser</h3>
            <Link to="/piskel-clone" className="landing-page__btn app-info__btn">Create Sprite</Link>
          </div>
          <img src={screenshot} className="landing-page__screenshot" alt="screenshot" />
        </div>
      </div>
      <div className="landing-page__sprite-examples">
        <div className="wrapper">
          <h2>Example sprites</h2>
          <p>Here are some examples of possible sprites</p>
          <div className="sprites-container">
            <img src={sprite1} className="sprite" alt="sprite" />
            <img src={sprite2} className="sprite" alt="sprite" />
            <img src={sprite3} className="sprite" alt="sprite" />
            <img src={sprite4} className="sprite" alt="sprite" />
            <img src={sprite5} className="sprite" alt="sprite" />
            <img src={sprite6} className="sprite" alt="sprite" />
            <img src={sprite7} className="sprite" alt="sprite" />
            <img src={sprite8} className="sprite" alt="sprite" />
          </div>
        </div>
      </div>
      <div className="overview">
        <div className="overview-item">
          <div className="overview-item__description">
            <h2>Live preview</h2>
            <p>Check a preview of your animation in real time as you draw. Adjust the frame delay on the fly</p>
          </div>
          <img src={overviewItem1} className="overview-item__image" alt="overview item" />
        </div>
        <div className="overview-item">
          <div className="overview-item__description">
            <h2>Frame management</h2>
            <p>Convenient frame management. You have the ability to create, copy and delete frames</p>
          </div>
          <img src={overviewItem2} className="overview-item__image" alt="overview item" />
        </div>
        <div className="overview-item">
          <div className="overview-item__description">
            <h2>Export to GIF, PNG</h2>
            <p>Several export modes supported. Animated GIFs for sharing and spritesheet PNG for bigger projects</p>
          </div>
          <img src={overviewItem3} className="overview-item__image" alt="overview item" />
        </div>
        <div className="overview-item">
          <div className="overview-item__description">
            <h2>Many available tools</h2>
            <p>Pen, Stroke, Circle, Rectangle and other useful tools for creating amazing sprites</p>
          </div>
          <img src={overviewItem4} className="overview-item__image" alt="overview item" />
        </div>
        <div className="overview-item">
          <div className="overview-item__description">
            <h2>Google Sign in</h2>
            <p>No need to remember yet another password, just use your Google account to sign in</p>
          </div>
          <img src={overviewItem5} className="overview-item__image" alt="overview item" />
        </div>
        <div className="overview-item">
          <div className="overview-item__description">
            <h2>Google Drive</h2>
            <p>You can upload created sprites to Google Drive in any available format</p>
          </div>
          <img src={overviewItem6} className="overview-item__image" alt="overview item" />
        </div>
      </div>
      <div className="landing-page__footer">
        <h2>Piskel-Clone</h2>
        <div className="author-info">
          Author: <span className="author-info__name">Dmitry Krivitsky</span>
          , Email: <a className="author-info__link" href="mailto:dimasikylll@mail.ru">Dimasikylll@mail.ru</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
