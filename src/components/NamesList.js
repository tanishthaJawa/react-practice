import React from 'react'
import Person from './Person'

function NamesList() {
    const names = ['Arjun', 'Sneha', 'Kajal']
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [{
        name: 'Arjun',
        id: 1,
        profession: 'Doctor'
    }, {
        name: 'Sneha',
        id: 2,
        profession: 'Engineer'
    },
    {
        name: 'Kajal',
        id: 3,
        profession: 'Scientist'
    }
    ]
    const personList = persons.map(person => (
        <Person key ={person.name} person={person} />
    )
    )
    return (
        <div>
            {/* {nameList} */}
            {personList}
        </div>
    )
}

export default NamesList