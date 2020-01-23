import React, {Component} from 'react'

import './Footer.css'

function MainInfo({className}) {
    return (
        <div className={className}>
            QR People. All rights reserved
        </div>
    )
}

function DeveloperInfo({className}) {
    const year = new Date().getFullYear();

    return (
        <div className={className}>
            Lviv. {year}
        </div>
    )
}

class Footer extends Component {

    render() {
        return (
            <footer>
                <MainInfo/>
                <DeveloperInfo/>
            </footer>
        )
    }
}

export default Footer;
