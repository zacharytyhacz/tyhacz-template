import React from 'react'
import QRCode from 'react-qr-code'
import { Outlet } from 'react-router-dom'

import './styles.css'

export const PrintLayout: React.FC = () => {
    return (
        <div className="print-container">
            <button className="primary" onClick={() => window.print()}>
                Print
            </button>
            <div className="print-header">
                <div className="logo">
                    <img src="/assets/logo.png" width={100} height={100} />
                </div>
                <div className="info">
                    <h3>Lowry Construction and Mechanical LLC</h3>
                    <p>33 Three Hunts Drive</p>
                    <p>Pembroke NC 28372</p>
                    <br/>
                    <p>Office: 910.522.1234</p>
                    <p>Web: www.LcmLowry.com</p>
                    <p>Email: qlowry@lcmlowry.com</p>
                </div>
                <div className="qr-code">
                    <QRCode value={window.location.href} size={200} />
                </div>
            </div>
            <div className="print-content">
                <Outlet />
            </div>
        </div>
    )
}

