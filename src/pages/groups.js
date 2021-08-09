import * as React from "react"
import Layout from "../components/layout.js"


const students = [
    {
        name: "Alison Li",
        assignments:
            [],
        group: "A",
    },
    {
        name: "Ethan Chen",
        assignments:
            [],
        group: "A",
    },
    {
        name: "Joseph Wang",
        assignments:
            [],
        group: "A",
    },
    {
        name: "Kaibo Zhang",
        assignments:
            [],
        group: "A",
    },
    {
        name: "Thomas Chen",
        assignments:
            [],
        group: "A",
    }

]

const GroupPage = () => {
    return (
        <div>
            <Layout>

                <div class="groupdesk">
                    <title>Students</title>
                    <ul class="grouplist">
                        {students.map(student => (
                            <div class="studenttab">
                                <h1 class="rostername">{student.name}</h1>
                                <h4>Class: {student.group}</h4>
                                <h4>Song progress: 月光下的分为主</h4>


                            </div>
                        ))}

                    </ul>
                </div>


            </Layout>
        </div>
    )
}


export default GroupPage