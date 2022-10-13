"use strict";

// green - school/work
// yellow - projects
// primary - other

function displayYear(){
  const yearToday = new Date().getFullYear();
  const yearSince = yearToday - 2019;
  const ele = document.getElementById("year");
  ele.textContent = `(${yearSince} years ago)`;
}
displayYear();



const EVENTS = [
  {
    year: 2022,
    month: "September",
    event: "Got accepted into Rithm School",
    color: "text-success"
  },
  {
    year: 2022,
    month: "September",
    event: "Applied for a 16 week coding bootcamp at Rithm School",
    color: "text-primary"
  },
  {
    year: 2019,
    month: "December",
    event: "Graduated from San Francisco State University with a B.A. in Japanese",
    color: "text-success"
  },
  {
    year: 2019,
    month: "October",
    event: "Officially released LangCorrect v1.0.0",
    color: "text-danger"
  },
  {
    year: 2019,
    month: "February",
    event: "Started coding LangCorrect",
    color: "text-danger"

  },
  {
    year: 2017,
    month: "January",
    event: "Entered San Francisco State University",
    color: "text-success"
  },
]


const timelineUl =document.getElementById("timeline-ul");

function createTimeLine(events){
  events.map(event => {
    const listItem = `<li class="row d-flex align-items-center mb-3">
                        <div class="col-12 col-md-2">
                        <i class="fa-solid fa-circle fa-2xs pe-1 ${event.color}"></i>
                        ${event.month} ${event.year}
                        </div>
                        <div class="col-12 col-md-10">${event.event}</div>
                      </li>`
      timelineUl.innerHTML += listItem;
  });
}

createTimeLine(EVENTS);


