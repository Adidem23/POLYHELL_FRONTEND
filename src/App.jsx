import ComposeAll from "./Components/ComposeAll"
import { Routes, Route } from 'react-router-dom'
import MintNFT from "./Components/MintNFT"
import MarketPlace from "./Components/MarketPlace";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" Component={ComposeAll} />
          <Route path="/mintnft" Component={MintNFT} />
          <Route path="/marketplace" Component={MarketPlace} />
        </Routes>
    </>
  )
}

export default App
