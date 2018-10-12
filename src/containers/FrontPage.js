import React, { Component } from 'react'

class FrontPage extends Component {
    componentDidMount() {
        document.title = 'tournamint - Etusivu'
    }
    
    render() {
        return (
            <React.Fragment>
                <h2 className='my-5 text-center'>tournamint</h2>
                <div className='row d-flex justify-content-center my-5'>
                    <div className='col-12 col-xl-6'>
                        <div className='box'>
                            <p>Tournamint 0.1 versio</p>
                            <p>Tää on snadisti keskeneräinen, eli paljon asioita puuttuu mm:</p>
                            <ul>
                                <li><strike>Pelaajien lisääminen manuaalisesti</strike></li>
                                <li>Pelaajien muokkaaminen</li>
                                <li>Pelaajan poistaminen</li>
                                <li>Turnauksen poistaminen</li>
                                <li>Turnauksen muokkaaminen</li>
                                <li><strike>Ottelun avaaminen (Nyt kun sen sulkee, niin ei pysty enää muokkaamaan)</strike></li>
                                <li>Maalin muokkaaminen</li>
                                <li><strike>Maalin poistaminen</strike></li>
                                <li>Turnauksen pistepörssi</li>
                                <li>Pelin poistaminen</li>
                                <li>Pelin muokkaaminen</li>
                                <li>Liigan poistaminen</li>
                                <li>Liigan muokkaaminen</li>
                                <li>Authentikaatio kaikesta muusta paitsi turnauksen lisäämisestä</li>
                                <li>Oma profiilisivu</li>
                                <li><strike>Mobiiliresponsiivisuus suurimmalta osin (mm. navbar ja suurin osa komponenteista)</strike></li>
                                <li>Fiksumpi layoutti muutenkin saittiin</li>
                                <li>Formien validointi kaikissa formeissa paitsi rekisteröitymisessä</li>
                                <li>Ja paljon muuta</li>
                            </ul>
                            <p>Hitto täähän on aivan kesken :DDDDD no jos listataan asioita jotka tässä on, niin ehkä tulee parempi mieli</p>
                            <ul>
                                <li>Rekisteröityminen</li>
                                <li>Kirjautuminen</li>
                                <li>Turnauksen listaaminen</li>
                                <li>Turnauksen lisääminen</li>
                                <li>Turnauskohtainen sivu</li>
                                <li>Turnauksen sarjataulukko</li>
                                <li>Turnauksen joukkueet ja ottelut listattu</li>
                                <li>Otteluiden filtteröinti statuksen mukaan</li>
                                <li>Otteluiden filtteröinti tiimikohtaisesti</li>
                                <li>Ottelusivu</li>
                                <li>Maalin lisääminen</li>
                                <li>Maalien listaaminen</li>
                                <li>Ottelun päättäminen</li>
                                <li>Tiimin lisääminen</li>
                                <li>Pelaajien haku API:sta</li>
                                <li>Tiimikohtainen sivu</li>
                                <li>Tiimilistaus</li>
                                <li>Tiimin kokonaispistepörssi</li>
                                <li>Pelaajien listaus tiimeissä</li>
                                <li>Pelaajan oma sivu</li>
                                <li>Liigan lisääminen</li>
                                <li>Liigojen listaus</li>
                                <li>Pelin lisääminen</li>
                                <li>Pelien listaus</li>
                                <li>....</li>
                                <li>Oliko siinä kaikki?</li>
                                <li>No voi muna :D:D:D</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default FrontPage
