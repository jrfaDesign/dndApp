import { Routes, Route } from "react-router-dom"
// Add Routes Router 
import Home from "../../Pages/Home/index"
import SpellBookPage from '../../Pages/SpellBookPage/index'
import SpellList from '../../Pages/SpellList/index'

const CreateRoutes = () => {

        <Routes>
            <Route path="/home" element={ <Home/> } />
            <Route path="my-spell-book" element={ <SpellBookPage/> } />
            <Route path="spell-list" element={ <SpellList/> } />
        </Routes>


}
export default CreateRoutes