import * as React from "react"
import Layout from "../components/layout.js"

// styles
const pageStyles = {
  padding: 30,

}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const listStyles = {
  listStyleType: "none",
}
const listItemStyles = {


}

const listDescriptionStyle = {
  color: "#000000",

}
const descriptionStyle = {
  marginLeft: 30,
}


// data
const links = [
  {
    text: "Week 1",
    description:

      ["Introductions / Icebreakers",
        "Introduce how to hold instrument",
        "Go over note notation as well as note fingerings"],


    homework:
      ["Basic exercise pieces",]
    ,
    color: "#000000",
  },
  {
    text: "Week 2",
    description:
      ["Review the note fingerings and correct any bad habits",
        "Introduce tu yin and da yin",
        "Give basic practice pieces for tu yin and da yin",
      ]
    ,

    homework: ["Exercise pieces for Tu Yin and Da Yin"]

    ,
    color: "#000000",
  },
  {
    text: "Week 3",
    description:
      ["Review the note fingerings and correct any bad habits",
        "Introduce Hua Yin and Zhan Yin as well exercise pieces to increase familiarity",
        "Introduce exercise pieces for note fingering familiarity",
      ]
    ,

    homework: ["Exercise pieces for Hua Yin and Zhan Yin",
      "Exercise pieces for note familiarity",
    ]

    ,
    color: "#000000",
  },
  {
    text: "Week 4",
    description:
      ["Review exercise pieces given last week",
        "Introduce hua yin and give exercise pieces to increase familiarity",
        "Give more advanced exercise pieces for note familiarity",
        "Introduce beginner song 知道不知道",
      ]
    ,

    homework: ["Exercise pieces for note familiarity",
      "Begin memorization of beginner piece",
    ]

    ,
    color: "#000000",
  },
  {
    text: "Week 5",
    description:
      ["Continue memorization of beginner song",
        "Finalize adding techinical skills to beginner song",
        "Introduce background music to the beginner song",
      ]
    ,

    homework: ["Practice beginner song with new techinical skills",
      "Add in own technical skills to the piece",
    ]

    ,
    color: "#000000",
  },
  {
    text: "Week 6",
    description:
      ["Finalize playing the beginner song along with the background music",
        "Create two separate groups for performing the songs.",
        "Introduce the second song options and allow students to choose one (if ready)",
      ],
    homework: ["Finalize making the beginner song performance worthy"]
  },
  {
    text: "Week 7",
    description:
      [
        "Review beginner song with background music",
        "Begin running through the second song without background music and add in techinical skills"
      ],
    homework:
      [
        "Review beginner song with background music in order to ensure performance quality"
      ],
  },
  {
    text: "Week 8",
    description:
      [
        "Introduce background music for the second song options.",
        "Begin incorporating technical skills along with the background",
      ],
    homework:
      [
        "None, end of the summer semester!"
      ],
  }


]

// markup
const IndexPage = () => {
  return (
    <main >
      <Layout>
        <div style={pageStyles}>
          <title>Home Page</title>
          <h1 style={headingStyles}>Syllabus</h1>

          <ul style={listStyles}>
            <ul>
              <h1>Class Schedule</h1>

              <p>8 week class</p>

              <p>Wednesdays 4:30 pm - 5:30 pm</p>

            </ul>
            <ul>
              <h1>Song List</h1>

              <p>
                1. 知道不知道
              </p>
              <p>2. 月光下的凤尾竹</p>
              <p>3. 有一个美丽的地方</p>

            </ul>

            <ul>
              <h1>Instrument links</h1>

              <a href="https://www.amazon.com/LMS-Professional-Bamboo-Octaves-Woodwind/dp/B01CO17MRG/ref=sr_1_2?dchild=1&keywords=hulusi&qid=1622852567&sr=8-2">Beginner Friendly</a>

            </ul>

            <ul>
              <h1>Technological Requirements</h1>
              <p>Decent webcam/camera</p>
              <p>Moderate quality microphone</p>
              <p>Stable and working internet</p>
              <p></p>
            </ul>


            {links.map(link => (
              <ul style={{ ...listItemStyles, color: link.color }}>
                <span>
                  <h1>{link.text}</h1>

                </span>
                <div style={descriptionStyle}>
                  <li>{link.description.map(point => (
                    <li style={{ ...listDescriptionStyle }}>{point} </li>
                  ))} </li>

                  <span>
                    <h3>
                      Homework
                    </h3>
                  </span>
                  <li>{link.homework.map(point => (
                    <li style={{ ...listDescriptionStyle }}>{point} </li>
                  ))} </li>
                </div>
              </ul>
            ))
            }
          </ul>
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage
