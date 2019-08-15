import "./main.scss"
import React from "react"
import ReactDOM from "react-dom"
import JeFAQList from "./components/JeFAQList"
import data from "./constants/data"

ReactDOM.render(
  <JeFAQList data={data}/>,
  document.getElementById("app")
)
