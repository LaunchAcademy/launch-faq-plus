import React from "react"

const FaqTile = ({ id, question, answer, selectedStatus, handleFaqClick }) => {
  let answerElement
  if (selectedStatus) {
    answerElement = <p> {answer} </p>
  }

  return(
    <div>
      <h4 onClick={handleFaqClick}>
        {question}
      </h4>
      {answerElement}
    </div>
  )
}

export default FaqTile
