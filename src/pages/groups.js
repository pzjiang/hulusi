import * as React from "react"
import Layout from "../components/layout.js"


const students = [
    {
        name: "Alison Li",
        assignments:
            [],
        group: "TBD",
    },
    {
        name: "Ethan Chen",
        assignments:
            [],
        group: "TBD",
    },
    {
        name: "Joseph Wang",
        assignments:
            [],
        group: "TBD",
    },
    {
        name: "Kaibo Zhang",
        assignments:
            [],
        group: "TBD",
    },
    {
        name: "Thomas Chen",
        assignments:
            [],
        group: "TBD",
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
                                <h4>Group: {student.group}</h4>
                                <h4>Videos Assignments:</h4>


                            </div>
                        ))}

                    </ul>
                </div>


            </Layout>
        </div>
    )
}


export default GroupPage