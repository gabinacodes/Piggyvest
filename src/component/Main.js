import React from 'react';
import Styles from '../styles/modules/main.module.scss';
import Images from '../image';

function Main() {
  return (
    <>
    <div className={Styles.Div} >
    <div> 
      <div className={Styles.avatar}>
          <img className={Styles.ellie} src={Images.ellie}  alt="ellie" />
          <img className={Styles.mark} src={Images.mark}  alt="mark" />
          <img className={Styles.ayo} src={Images.ayo}  alt="ayo" />
          <img className= {Styles.fatima} src={Images.fatima}  alt="fatima" />
      </div>
      <div className={Styles.save} >
         <h1 className={Styles.heading}>The Best way to Save & Invest</h1> 
         <p className={Styles.goal}>PiggyVest helps over 1 million customers achieve their financial goals by helping them save and invest with ease.</p>
         <button className={Styles.btn}>Create A Free Account</button>
         <div className={Styles.store}>
             <img src={Images.appstore} alt="appstore"/>
             <img src={Images.googleplay} alt="googleplay"/>
         </div>
      </div>
      </div>
      <div>
        <h3>Security comes First</h3>
        
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </>
  );
}

export default Main;
