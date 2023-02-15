import React from 'react'
import select from '../images/select.svg'
import square from '../images/square.svg'
import picture from '../images/girl.png'

const MiddlPage = ({ data }) => {
  return (
    <>
      <div className="adding-tasks">
        {data ? (
          <h1>
            You've got <span>8 task </span> today{' '}
          </h1>
        ) : (
          <h1>
            Create a new <span style={{ color: '#F3477A' }}>task</span>{' '}
          </h1>
        )}
        <div className="adding-field">
          {data ? (
            <div className="select">
              <div>
                <p> Your task today</p>
                <img src={select} alt="select" className="select2" />
              </div>
            </div>
          ) : (
            <>
              <div className="select">
                <div>
                  <p> Sabrina</p>
                </div>
              </div>
              {/* <div className='hidden2'>
                <p>Contacts</p>
                <img src={picture} alt="picture" />
                <span>Sabrina <span>Davies</span></span>
              </div> */}
            </>
          )}

          <button className="add-btn">
            <img src={square} alt="square" className="square" /> + &nbsp; Add
            new
          </button>
        </div>
      </div>
      {data && <h1 className="alone">Your task today</h1>}
    </>
  )
}

export default MiddlPage
