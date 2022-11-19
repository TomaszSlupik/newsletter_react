import React from 'react'

export default function New(props) {
  return (
    <div>
        <h1>Dodani teraz:</h1>
        <div className="boxQuestion">
            <div className="boxAdd">
            <div className='firstTitle'>Tytuł: {props.saveTitle}</div>
            <div className='content'>Treść: {props.savecontent}</div>
            <div className='firstName'>Imię: {props.savefirstname}</div>
            <div className='emailName'>Email: {}</div>
            </div>
        </div>
    </div>
  )
}
