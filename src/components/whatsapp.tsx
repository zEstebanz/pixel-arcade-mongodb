import React from 'react'

function whatsapp() {
    return (
        < div className="button-WhatsApp-container" >
            <div className="WhatsApp-button">
                <a href="https://api.whatsapp.com/send?phone=2612528276" target="_blank">
                    <img src="src/img/ico/Wsap-ico.png" alt="whatsapp" width="100%" height="100%" />
                </a>
            </div>
        </div >
    )
}

export default whatsapp;