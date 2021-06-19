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
    }
]

const AnnouncementPage = () => {
    return (
        <div>
            <Layout>
                <title>Announcements</title>
                <ul class="announcementtab">
                    {information.map(announce => (
                        <div class="announcebox">
                            <h2 class="announcetitle">{announce.title}</h2>
                            <h4>{announce.date}</h4>
                            <p>{announce.content}</p>
                        </div>

                    ))}

                </ul>



            </Layout>
        </div>
    )
}


export default AnnouncementPage