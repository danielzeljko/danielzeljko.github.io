"use strict";

const EVENTS = [
  {
    date: "2022-10-17",
    verb: "Completed the assignment",
    object: "Meme Generator",
    color: "color-lc",
    link: "https://github.com/danielzeljko/meme-generator"
  },
  {
    date: "2022-10-13",
    verb: "Completed the assignment",
    object: "Personal Website",
    color: "color-lc",
    link: "https://github.com/danielzeljko/danielzeljko.github.io",
  },
  {
    date: "2022-09-29",
    verb: "Admitted into",
    object: "Rithm School",
    color: "",
    link: "https://www.rithmschool.com/"
  },
  {
    date: "2022-09-28",
    month: "September",
    day: 28,
    verb: "Attended the",
    object: "Rithm Technical Interview",
    color: "",
    link: ""
  },
  {
    date: "2022-09-22",
    verb: "Applied to",
    object: "Rithm School",
    color: "",
    link: ""
  },
  {
    date: "2022-09-22",
    verb: "Released",
    object: "LangCorrect (v3)",
    color: "",
    link: ""
  },
  {
    date: "2021-02-11",
    verb: "Released",
    object: "LangCorrect (v2)",
    color: "",
    link: ""
  },
  {
    date: "2019-12-01",
    verb: "Graduated from",
    object: "San Francisco State University (B.A. in Japanese)",
    color: "",
    link: ""
  },
  {
    date: "2019-10-28",
    verb: "Released",
    object: "LangCorrect",
    color: "color-lc",
    link: "https://langcorrect.com"
  },
  {
    date: "2019-02-09",
    verb: "Started coding",
    object: "LangCorrect",
    color: "color-lc",
    link: ""
  },
  {
    date: "2017-01-01",
    verb: "Entered",
    object: "San Francisco State University",
    color: "",
    link: ""
  },
];


/** Displays years since 2019 */
function displayYear() {
  const yearToday = new Date().getFullYear();
  const yearSince = yearToday - 2019;
  const ele = document.getElementById("year");
  ele.textContent = `(${yearSince} years ago)`;
}
displayYear();


/** Creates the Timeline */
function createTimeline(events) {
  const timeline = document.getElementById("timeline-ul");

  events.map(event => {
    const eventItem = createEventItem(event);
    timeline.innerHTML += eventItem;
  });
}
createTimeline(EVENTS);


/** Creates the timeline event item */
function createEventItem(event){
  const listItem =
      `<li class="row d-flex align-items-center mb-3">
        <div class="col-12 col-md-2">
          <i class="fa-solid fa-circle fa-2xs pe-1 ${event.color}"></i>
          ${event.date}
        </div>
        <div class="col-12 col-md-10">
          <span class="verb">${event.verb}</span>
          <span class="fw-bold ${event.color}">
          ${ event.link ? `<a href="${event.link}" target="_blank">${event.object}</a>` : `${event.object}`}
          </span>
        </div>
      </li>`;
  return listItem;

}


