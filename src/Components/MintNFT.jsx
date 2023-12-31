import '../CSS/MintNFT.css'
import GoToTop from './GoToTop';

const MintNFT = () => {

    return (
        <>
            <div style={{ display: "block", margin: "auto", width: "fit-content", marginTop: "250px", }}>

                <div style={{ display: "flex", flexDirection: "row", border: "3px solid yellow" }}>

                    <div className="wrapper">
                        <div className="card-switch">
                            <label className="switch">
                                <input type="checkbox" className="toggle" />
                                <span className="slider"></span>
                                <span className="card-side"></span>

                                <div className="flip-card__inner">
                                    <div className="flip-card__front">
                                        <div className="title">Enter Metedata</div>
                                        <form className="flip-card__form" action="">

                                            <input className="flip-card__input" type="text" placeholder='Name of NFT' />

                                            <input className="flip-card__input" type="text" placeholder='Description of NFT' />

                                            <input className="flip-card__input" type="number" placeholder='SupplyNumber' />

                                        </form>
                                        <div>
                                            <button className='flip-card__btn'>Mint</button>
                                        </div>
                                    </div>

                                    <div className="flip-card__back" id='upload'>
                                        <label className="custum-file-upload" htmlFor="file">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" ></path> </g></svg>
                                            </div>
                                            <div className="text" id='ImageUpload'>
                                                <span>Click to upload image</span>
                                            </div>
                                            <input type="file" accept='image/*' id="file" />
                                        </label>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <section style={{ margin: "auto", display: "block", width: "fit-content" }}>

                <h2 className="heading-style-h1">Your Owned NFTs</h2>
                <hr />

                <h4>Account Connected:</h4>

                <br />
                <br />

                <div id='zanduBaam'>
                    <div className="cardop">
                        <div className="imageop">
                            <img src={" "} alt="😒😒" />
                        </div>
                        <div className="card-infoop">
                            <span>Aditya</span>
                            <p>Aditya NFT</p>
                            <a href="#" style={{ color: "black", listStyle: "none", textDecoration: "none" }} >IPFS URI</a>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <button className="buttonop">Burn</button>
                            <button className="buttonop" style={{ marginLeft: "15px" }}>MarketPlace</button>
                        </div>
                    </div>
                </div>
            </section>

            <GoToTop />
        </>

    )
}

// : <><img src={Image} style={{ background: "#000" }} id='imageuploaded' /></>

export default MintNFT