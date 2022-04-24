import React from 'react';
import Styles from '../styles/modules/main.module.scss';
import Images from '../image';
import bg from '../image/bgimage.png'
import security from '../data/security.js';
import savings from '../data/savings';
import customers from '../data/customer'


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
      <div className={Styles.div_importance}> 
        <h3 className={Styles.heading2}>Security comes First</h3>
        
         <div className={Styles.flex_content} >
          {
          security.map((e)=>{
            return(
             <div >
              
              <img src={e.img} alt={e.name}/>
              <div>{e.content}</div>
              </div>
             
            )
          })
          
          }
         </div>
      </div>
      <div className={Styles.ways}>
        <h1 className={Styles.header3}>5 ways to build your savings  </h1>
        <div className={Styles.content}>
          {
            savings.map((e)=>{
              return(
                <div>
                 <div> <img src={e.img} alt={e.name}/>
                  <h6>{e.name}</h6></div>
                  <p>{e.content}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={Styles.access} style={{ backgroundImage: `url(${bg})` }}>
        <div >
          <h5>Access investment opportunities</h5>
          <p>Grow your money confidently by investing in pre-vetted investment opportunities.</p>
          <p><bold>Learn more about Investments</bold></p>
        </div>
       
          <img src={Images.phone} alt="phone"/>
       
      </div>
      <div className={Styles.testimonies}>
        <h4>Loved by our Customers</h4>
        <div className={Styles.review_box}>
          {
            customers.map((e)=>{
              return(
                <div>
                  <div>
                  <img src={e.img} alt={e.name}/>
                 <div>{e.content}</div>
                  </div>
                 <p>{e.name}</p>
                </div>
              )
            })  
          }
        </div>
        <p>Read  more amazing stories</p>
      </div>
      <div></div>
    </div>
    </>
  );
}

export default Main;
