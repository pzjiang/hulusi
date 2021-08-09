import * as React from "react"
import Layout from "../components/layout.js"




const information = [
    {
        title: "Class schedule announced",
        date: "6/7/2021",
        content: "The first class will be held on Wednesday, 6/9/2021 at 4:30 pm. As stated in syllabus, this will be an eight week course with 1 class per week. The future classes will most likely remain on the same time and day unless a conflict arises.",

    },
    {
        title: "Homework",
        date: "6/18/2021",
        content: "A new section has been added to the syllabus, containing demonstration videos of the homework pieces. Please check at your own convenience, and make sure to practice!",
    },
    {
        title: "Demos",
        date: "7/2/2021",
        content: "New demo videos for this week's homework released. Please check syllabus for the video links, and make sure to practice!"
    },
    {
        title: "Starting the performance piece",
        date: "7/14/2021",
        content: "Everyone make sure to practice the performance piece, as it will be tested in its entirety next week!"
    },
    {
        title: "Focus on Basics",
        date: "7/21/2021",
        content: "The basic skills are slightly lacking for most of the students. Make sure to look over past pieces as well!"
    },
    {
        title: "Background music",
        date: "7/22/2021",
        content: "Background music has been uploaded to the google drive. Maker sure to check it out and try playing along!"
    },
    {
        title: "New Piece",
        date: "7/28/2021",
        content: "We will start the next piece, 月光下的分为主，while also perfecting the piece"
    },
    {
        title: "Last class for the Summer",
        date: "8/4/2021",
        content: "As this is the last class we will not be learning anything new. Review class of everythign covered so far!"

    }
]

const AnnouncementPage = () => {
    return (
        <div>
            <Layout>
                <title>Announcements</title>

                <div class="announcementtab">
                    {information.map(announce => (
                        <div class="announcebox">
                            <h2 class="announcetitle">{announce.title}</h2>
                            <h4>{announce.date}</h4>
                            <p>{announce.content}</p>
                        </div>


                    ))}


                </div>




            </Layout>
        </div>
    )
}


export default AnnouncementPage