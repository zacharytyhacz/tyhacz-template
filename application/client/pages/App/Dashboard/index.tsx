import React, { useMemo } from 'react'

import './styles.css'

export const Dashboard: React.FC = () => {
    const todaysDate = useMemo(() => {
        const today = new Date()
        return today.toDateString()
    }, [])

    return (
        <div>
            <h1>Dashboard, {todaysDate}</h1>
            <div className="dashboard-container">

            </div>
        </div>
    )
}
