import React from 'react';
import Styles from '../styles/modules/main.module.scss';
import mark from '../image/mark.png'
import fatima from '../image/fatima.png'
import ellie from '../image/ellie.png'
import ayo from '../image/ayo.svg'
import appstore from '../image/AppStore.png'
import googleplay from '../image/googleplay.png'

function Main() {
  return (
    <>
    <div className={Styles.Div} >
    <div> 
      <div className={Styles.avatar}>
          <img className={Styles.ellie} src={ellie}  alt="ellie" />
          <img className={Styles.mark} src={mark}  alt="mark" />
          <img className={Styles.ayo} src={ayo}  alt="ayo" />
          <img className= {Styles.fatima} src={fatima}  alt="fatima" />
      </div>
      <div className={Styles.save} >
         <h1 className={Styles.heading}>The Best way to Save & Invest</h1> 
         <p className={Styles.goal}>PiggyVest helps over 1 million customers achieve their financial goals by helping them save and invest with ease.</p>
         <button className={Styles.btn}>Create A Free Account</button>
         <div className={Styles.store}>
             <img src={appstore} alt="appstore"/>
             <img src={googleplay} alt="googleplay"/>
         </div>
      </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </>
  );
}

export default Main;
