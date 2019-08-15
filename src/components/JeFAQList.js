import React, { useState } from 'react';

import FaqTile from "./FaqTile"

const JeFAQList = (props) => {

  const [selectedFaqIds, changeSelectedFaqIds] = useState([])

  const faqComponents = props.data.map((faq) => {

    let selectedStatus = false
    if (selectedFaqIds.includes(faq.id)){
      selectedStatus = true
    }

    const handleFaqClick = () => {
      if (selectedFaqIds.includes(faq.id)){
        let newIds = selectedFaqIds.filter(id => id !== faq.id)
        changeSelectedFaqIds(newIds)
      } else {
        changeSelectedFaqIds(selectedFaqIds.concat(faq.id))
      }
    }

    return(
      <FaqTile
        key={faq.id}
        id={faq.id}
        question={faq.question}
        answer={faq.answer}
        selectedStatus={selectedStatus}
        handleFaqClick={handleFaqClick}
      />
    )
  })

  return(
    <div className="callout row columns">
      <h1> JeFAQ  </h1>
      {faqComponents}
    </div>
  )
}

export default JeFAQList;
