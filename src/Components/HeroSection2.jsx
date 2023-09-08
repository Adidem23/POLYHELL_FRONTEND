import '../CSS/HeroSection2.css';
import {Link} from 'react-router-dom';
import  Orange from '../Images/Orange_m.png'
import Treasure from '../Images/Treasure.png'
import Red from '../Images/Red_m.png'
import blue from '../Images/blue_m.png'


const HeroSection2 = () => {
    return (
        <>
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="header-ecosystem-content">
                            <h2 className="heading-style-h1">PolyHell : Mint ERC1155 Tokens</h2>
                            <div className="padding-bottom padding-medium"></div>
                            <div className="button-center-wrapper">
                                <a data-w-id="3102efe8-6cea-af73-8654-1c5c21bd5bb7" href="/composedb" className="button is-link is-icon w-inline-block" style={{}}>
                                    <div className="text-link-wrapper">
                                        <div className="icon-embed-xsmall hide w-embed"></div>
                                    </div>
                                </a></div>
                        </div><div className="event-types-content">

                            <div id="w-node-_148d68e9-623c-439e-9bb4-b8f7904fb410-904fb410" className="cards_event-type is-outlined-no-planet">
                                <h3 className="heading-style-h4">Mint Monsters</h3>
                                <p className="text-size-regular">Mint Monsters Family Waiting For  Minter </p>
                                <img src={Orange} alt="Image Not Found.." />
                                <Link to="/mintnft"> <button className='but2'>Visit</button></Link>

                            </div>

                            <div id="w-node-_148d68e9-623c-439e-9bb4-b8f7904fb410-904fb410" className="cards_event-type is-outlined-no-planet">
                                <h3 className="heading-style-h4">Mint Batches of NFT</h3>
                                <p className="text-size-regular">Experience The Treasure Of NFT s </p>
                                <img src={Treasure} alt="Image Not Found.." />
                                <button className='but2'>Visit</button>
                            </div>

                            <div id="w-node-_148d68e9-623c-439e-9bb4-b8f7904fb410-904fb410" className="cards_event-type is-outlined-no-planet"><h3 className="heading-style-h4">Experience MarketPlaces</h3><p className="text-size-regular">Sell , Buy And Auction Your NFTs</p>
                            <img src={Red} alt="Image Not Found.." />
                                <Link to="/marketplace"> <button className='but2'>Visit</button></Link>
                            </div>

                            <div id="w-node-_148d68e9-623c-439e-9bb4-b8f7904fb410-904fb410" className="cards_event-type is-outlined-no-planet">
                                <h3 className="heading-style-h4">Unlock Web3 Power</h3>
                                <p className="text-size-regular">Unlock Web3 Power My Buddy With PolyHell!!</p>
                                <img src={blue} alt="Image Not Found.." />
                                <button className='but2'>Visit</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default HeroSection2