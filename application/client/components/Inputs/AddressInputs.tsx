import React from 'react'
import './styles.css'

type Props = {
    children: any
}

export const AddressInputs: React.FC<Props> = ({ children }) => {
    return (
        <div className="address-inputs">
            { children }
        </div>
    )
}

