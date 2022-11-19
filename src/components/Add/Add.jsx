import React from 'react'
import Question from '../Question/Question'
import './Add.css'
import { useState } from 'react'
import New from '../New/New'

export default function Add() {

  const answear = [
    {
      user: 1,
      title: 'Pizza', 
      contents: 'Dzisiaj idziemy na pizzę',
      first_name: 'Ola',
      email: 'ola@gmail.com'
    }, 
    {
      user: 2,
      title: 'Trening', 
      contents: 'Trening pływacki o 19.',
      first_name: 'Tomek',
      email: 'tomasz@gmail.com'

    }
  ]

  const [titlename, settitlename] = useState (
    {title: ''},
  )

  const clickItem = (e) => {
    e.preventDefault()
    settitlename(e.target.value);
  };

const [contentName, setcontentName] = useState (
  {contentName: ''},
)

const clickItemTwo = (e) => {
  e.preventDefault()
  setcontentName(e.target.value);
};

const [first_name, setfirst_name] = useState({first_name: ''})
const clickItemThree = (e) => {
  e.preventDefault()
  setfirst_name(e.target.value)
}

const [email, setEmail] = useState({email: ''})
const clickItemFour = (e) => {
  e.preventDefault()
  setEmail (e.target.value)
}

const saveAll = (e) => {
  e.preventDefault()
  const content = document.querySelector('.content')
  content.append(contentName)
  const firstTitle = document.querySelector('.firstTitle')
  firstTitle.append(titlename)
  const firstName = document.querySelector('.firstName')
  firstName.append(first_name)
  const emailName = document.querySelector('.emailName')
  emailName.append(email)
}

  return (
    <div>
        <form>
          <h1>Zapisz się na Newsletter</h1>
          <textarea placeholder='Tytuł'
           id="title"
           onChange={clickItem}></textarea>
          <textarea placeholder='Treść' id="content"
          onChange={clickItemTwo}></textarea>
          <input type='text' placeholder='Imię' id='first_name'
          onChange={clickItemThree}/>
          <div className="subscribe">
          <input type='email' placeholder="Email" id="email"
          onChange={clickItemFour}/>
          <button type="submit" className="btn btn-primary" onClick={saveAll} >Subskrybuj</button>
          </div>
        </form>
        <New saveTitle={saveAll} savecontent={saveAll} savefirstname={saveAll} savemail={saveAll}/>
        <Question twoanswear={answear}/>
    </div>
  )
}
