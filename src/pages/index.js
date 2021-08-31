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

      ["Go over goals for new semester",
        "Review technical skills taught last semester",
        "Review Tu Yin"],


    homework:
      ["Old technical skill exercise pieces",]
    ,
    color: "#000000",
  },
  {
    text: "Week 2",
    description:
      ["Review 知道不知道",
        "Make sure it approaches performance worthy status",

      ]
    ,

    homework: ["Review the song and make sure to keep in time with the music"]

    ,
    color: "#000000",
  },
  {
    text: "Week 3",
    description:
      ["Review 月光下的分为主",
        "Go over where to add in hua yin"
      ]
    ,

    homework: ["Continue playing the new piece and adding in hua yin where possible",
    ]

    ,
    color: "#000000",
  },
  {
    text: "Week 4",
    description:
      ["Learn first part with the background music",
        "Go over how to add in tu yin and da yin to separate notes"
      ]
    ,

    homework: ["Begin practicing with the background music"
    ]

    ,
    color: "#000000",
  },
  {
    text: "Week 5",
    description:
      ["Review beginner song, this time with memorization",
        "Work on memorization of the skills as well as the notes"
      ]
    ,

    homework: ["Work on memorizing the beginner song completely so it can be performed"
    ]

    ,
    color: "#000000",
  },
  {
    text: "Week 6",
    description:
      ["Learn the next part of the background music for the second song"
        ,
        "Practice taking less breaths so that the music is less choppy"
      ],
    homework: ["Work on developing better lungs as well as rationing air while playing"]
  },
  {
    text: "Week 7",
    description:
      [
        "Learn the third part of the song with background music ",
        "Begin memorization of parts that have been learned"
      ],
    homework:
      [
        "Continue practicing memorizing not just the notes, but also the skills"
      ],
  },
  {
    text: "Week 8",
    description:
      [
        "Finish the background music for the second song",
        "Learn to memorize the second song",
        "Learn how to perform the second song"
      ],
    homework:
      [
        "None, end of the fall semester!"
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

              <p>Mondays 7:15pm - 8:15pm</p>

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
              <h1>
                Demonstration links
              </h1>

              <a href="https://www.youtube.com/watch?v=lQuNvLFG6vc">Exercise 1</a>
              <br></br>

              <a href="https://www.youtube.com/watch?v=izFRhVaw_NE">Exercise 2</a>
              <br></br>
              <a href="https://www.youtube.com/watch?v=Lwge4WxqR8Q">Bonus Homework 1</a>
              <br></br>

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
