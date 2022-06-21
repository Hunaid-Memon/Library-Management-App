import React from 'react'

const Main = ({ students }) => {
    console.log(students);
    return (
        <main>
            {students.map(student => (
                <h3 key={student.id} > {student.name} <span>{student.email}</span> {student.phone} <span>x</span>i </h3>
            ))}
        </main>
    )
}

export default Main
