import React from "react"

interface PaginationNumberPropsType {
    value: number | '...'
    isActive: boolean
    onClick: Function | null
}

const PaginationNumber = ({value, isActive, onClick}: PaginationNumberPropsType) => {
    const className = () => {
        if (value === '...') return 'pagination__number--dots'
        else return `pagination__number${isActive ? '--active' : ''}`
    }
    return (
        <li 
            className={className()}
            onClick={() => {
                onClick && onClick()
            }}
        >
            {value}
        </li>
    )
}

export default PaginationNumber