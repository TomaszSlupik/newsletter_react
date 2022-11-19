import React from 'react'
import './Question.css'

export default function Question(props) {
  return (
    <div>
        <h1>Zapisani:</h1>
        <div className="boxQuestion">
            <div className="boxAdd">
                {
                    props.twoanswear.map((el, index) => {
                        return (
                            <div className='ansUser' key={index}>
                                <h3>Użytkownik: <span>{el.user}</span></h3>
                                <div>Tytuł: {el.title}
                                </div>
                                <div>Treść: {el.contents}</div>
                                <div>Imię: {el.first_name}</div>
                                <div>Email: {el.email}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
