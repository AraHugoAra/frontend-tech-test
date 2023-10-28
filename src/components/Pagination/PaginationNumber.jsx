import React from "react"

const PaginationNumber = ({value, isActive, onClick}) => {
    const className = () => {
        if (value === '...') return 'pagination__number--dots'
        else return `pagination__number${isActive ? '--active' : ''}`
    }
    return (
        <li 
            className={className()}
            onClick={() => {
                onClick()
            }}
        >
            {value}
        </li>
    )
}

export default PaginationNumber