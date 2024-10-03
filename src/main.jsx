import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header, Promos } from './App.jsx'

import promo1 from './img/promo1.jpg'
import promo2 from './img/promo2.jpg'
import promo3 from './img/promo3.jpg'

createRoot(document.getElementById('root')).render(<>
  <StrictMode>
    <Header/>
    <Promos img={promo1} price='$9.990' titulo='Promo 1' />
    <Promos img={promo2} price='$11.990' titulo='Promo 2' />
    <Promos img={promo3} price='$13.990' titulo='Promo 3' />
    
  </StrictMode>
  </>
)
