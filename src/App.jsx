import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
        <Navbar/>
        <h1 className='text-center my-4 text-2xl decoration-from-font'>Demo Redux-ToolKit-Store</h1>
        <ProductList/>
    </>
  )
}

export default App
