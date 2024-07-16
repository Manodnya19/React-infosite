import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import '../App.css'

export default function MainContent(){
    return(
        <div className='main'>
            <h1 className='main-header'>Fun Facts about React</h1>
            <ul className='unorderedList'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k starts on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterpise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
