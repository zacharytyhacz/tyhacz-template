import React from 'react'
import './styles.css'

export const AuthLayout: React.FC<{ children: any }> = ({ children }) => {
    return (
        <div className="auth-layout">
            <img src="/assets/logo.png" alt="Lowry Construction and Mechanical" />
            <div className="auth-layout-content">
                { children }
            </div>
        </div>
    )
}

export const AuthLayoutActions: React.FC<{ children: any }> = ({ children }) => {
    return (
        <div className="auth-layout-actions">
            { children }
        </div>
    )
}
