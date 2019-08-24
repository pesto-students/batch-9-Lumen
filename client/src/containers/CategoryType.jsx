import React from 'react'

const CategoryType = ({match}) => {
    return (
        <div>
            <h1>{match.params.type}</h1>
        </div>
    )
}

export default CategoryType
