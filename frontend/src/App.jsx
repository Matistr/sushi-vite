import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './Componentes/Header.jsx'
import { Menu } from './Componentes/Menu.jsx'
import Carrito from './Componentes/Carrito.jsx'
import { PagRegistro } from './Componentes/Register.jsx'
import FormularioPersona from './Componentes/Form.jsx'

import './css/main.css'

import { Homepag } from './Componentes/Homepage'
import { PagLogin } from './Componentes/Login.jsx'
import { TarProvider } from './contexto/TarContext.jsx'
import TareaPage from './paginas/pagTarea.jsx'

export function App() {
    return (
        <TarProvider>
            <BrowserRouter>
                <div className="bg-gray-50 min-h-screen">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Homepag/>} />
                        <Route path="/Carta" element={<Menu/>} />
                        <Route path="/Carro" element={<Carrito />} />
                        <Route path="/Formulario" element={<FormularioPersona />} />
                        <Route path="/Registro" element={<PagRegistro/>} />
                        <Route path="/Cuenta" element={<PagLogin/>} />
                    </Routes>
                    <Routes>
                        <Route path="/tareas" element={<TareaPage/>} />
                    </Routes>
                </div>
        </BrowserRouter>
        </TarProvider>
    )
}