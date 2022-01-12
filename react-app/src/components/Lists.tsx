import React from 'react';
interface IProps {
    people: {
        name: string,
        age: number,
        url: string,
        note?: string
    }[]
}

// const List = (props: IProps) => {

const List: React.FC<IProps> = ({ people }) => {
    const renderList = () => {
        return people.map((person, index) => {
            <li className='List'>
                <div className='List-header'>
                    <img className='List-img' src={person.url} alt={person.name} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className='List-note'>{person.note} years old</p>
            </li>
        }
        )
    }
    return (
        <ul>
            {/* {
                people.map(person => {
                    return (
                        <div>{person.name}</div>
                    )
                })
            } */}
            {renderList()}
        </ul>
    )
}

export default List;
