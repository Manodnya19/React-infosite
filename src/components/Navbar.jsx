import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import '../App.css'

export default function Navbar(){
    return(
        <div className='navBar'>
            <img className='nav--icon' src="/src/assets/react.svg" alt="" />
            <h3 className='nav--logo_text'>React Facts</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </div>
    )
}