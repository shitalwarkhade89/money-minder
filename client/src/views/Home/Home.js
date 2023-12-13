import React, { useEffect, useState } from 'react';
import './Home.css';
import homebg from "./homeBg.avif";
import Navbar from '../../components/Navbar/Navbar';

function Home() {



    return (
        <>
            <Navbar />
            <div className='home-image-cont'>
                <h1 className='description-bg'> “The slightest adjustments to your daily routines can  <br />dramatically alter the outcomes in your life.” </h1>
            </div>

            <h1 className='heading'>Features Of Mony Minder</h1>
            <div className='feat-main-cont'>
                
                <div className='featur-card'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vDeyFXqCkrdrmNSVd5cSDkV7xCfiO61FFQ&usqp=CAU' alt='image' className='feature-img' />
                    <p className='featur-card-description'> Allow users to categorize expenses into different categories (e.g.Rent, entertainment, education).<br />
                        Provide the option to manually input expenses, including date, amount, and category.

                    </p>
                </div>

                <div className='featur-card'>
                    <img src='https://img.freepik.com/free-photo/closeup-shot-entrepreneur-working-from-home-his-personal-finances-savings_181624-16906.jpg?size=626&ext=jpg&ga=GA1.1.1625782228.1702448657&semt=ais' alt='image' className='feature-img' />
                    <p className='featur-card-description'> Income vs. Expense Analysis: Display a comparative analysis of income and expenses to give an overall financial snapshot.

                    </p>
                </div>
            </div>

        </>
    )
}
export default Home