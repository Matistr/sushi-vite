import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './Componentes/Header.jsx'
import { Menu } from './Componentes/Menu.jsx'
import { Carro } from './Componentes/Carro.jsx'

import './css/main.css'

import { Homepag } from './Componentes/Homepage'

export function App() {
    return (
        <BrowserRouter>
            <div className="bg-gray-50 min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Homepag/>} />
                    <Route path="/Carta" element={<Menu/>} />
                    <Route path="/Carro" element={<Carro />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App