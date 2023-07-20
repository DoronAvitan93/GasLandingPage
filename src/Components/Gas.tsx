import React, { Fragment, useEffect, useRef, useState } from 'react'

// import NewExpense from '../NewExpense/NewExpense';
import './Gas.css';

import pic1 from './imgs/1.jpg';
import pic2 from './imgs/2.jpg';
import pic3 from './imgs/3.jpg';




const Expenses: React.FC = () => {

    return (
        <div id="card-area">
            <div className="wrapper">
                <div className="box-area">
                    <div className="box">
                        <img src={pic2} alt="" />
                        <div className="overlay">
                            <h3>צרו איתנו קשר</h3>
                            <p></p>
                            <a href="https://www.facebook.com/profile.php?id=100079481719254&sk=photos">פייסבוק</a>
                            <br />
                            <a href="https://instagram.com/r.a.a_gaz?igshid=MzNlNGNkZWQ4Mg==">אינסטגרם</a>
                            <br />
                            <a
                                href="https://api.whatsapp.com/send?phone=9720503915655&text=%D7%9C%D7%95%D7%95%D7%90%D7%98%D7%A1%D7%90%D7%A4%20%D7%A9%D7%9C%D7%A0%D7%95">וואטספ</a>
                            <br />
                            <a href="tel: 050-3915655">לחצו כאן כדי להתקשר</a>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="box">
                        <img src={pic1} alt="" />
                        <div className="overlay">
                            <h3>צרו איתנו קשר</h3>
                            <p></p>
                            <a href="https://www.facebook.com/profile.php?id=100079481719254&sk=photos">פייסבוק</a>
                            <br />
                            <a href="https://instagram.com/r.a.a_gaz?igshid=MzNlNGNkZWQ4Mg==">אינסטגרם</a>
                            <br />
                            <a
                                href="https://api.whatsapp.com/send?phone=9720503915655&text=%D7%9C%D7%95%D7%95%D7%90%D7%98%D7%A1%D7%90%D7%A4%20%D7%A9%D7%9C%D7%A0%D7%95">וואטספ</a>
                            <br />
                            <a href="tel: 050-3915655">לחצו כאן כדי להתקשר</a>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="box">
                        <img src={pic3} alt="" />
                        <div className="overlay">
                            <h3>צרו איתנו קשר</h3>
                            <p></p>
                            <a href="https://www.facebook.com/profile.php?id=100079481719254&sk=photos">פייסבוק</a>
                            <br />
                            <a href="https://instagram.com/r.a.a_gaz?igshid=MzNlNGNkZWQ4Mg==">אינסטגרם</a>
                            <br />
                            <a
                                href="https://api.whatsapp.com/send?phone=9720503915655&text=%D7%9C%D7%95%D7%95%D7%90%D7%98%D7%A1%D7%90%D7%A4%20%D7%A9%D7%9C%D7%A0%D7%95">וואטספ</a>
                            <br />
                            <a href="tel: 050-3915655">לחצו כאן כדי להתקשר</a>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Expenses