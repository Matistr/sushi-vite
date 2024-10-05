import { createRoot } from 'react-dom/client'
import { Header, ItemCard } from './App.jsx'

import './css/main.css'

import promo1 from './img/promo1.jpg'
import promo2 from './img/promo2.jpg'
import promo3 from './img/promo3.jpg'

import p1 from './img/palta.jfif'
import p2 from './img/salmon.jfif'
import p3 from './img/tempura.jfif'
import p4 from './img/sesamo.jfif'

import coca from './img/coca.jfif'
import fanta from './img/fanta.jfif'
import sprite from './img/sprite.jfif'
import kem from './img/kem.jfif'

createRoot(document.getElementById('root')).render(<>
    <div className='body'>
      <Header/>      
      <center>
        <h1>Promociones:</h1>
        <br />
        <ItemCard img={promo1} price='$9.990' titulo='Promo 1' altText='Promo 1' />
        <ItemCard img={promo2} price='$11.990' titulo='Promo 2' altText='Promo 2' />
        <ItemCard img={promo3} price='$13.990' titulo='Promo 3' altText='Promo 3' />
        <h1>Productos:</h1>
        <br />
        <h2>Sushi rolls (9 unidades)</h2>
        <br />
        <section className='gris'>
          <ItemCard img={p1} price='$5.990' titulo='Sushi rolls tempura' altText='Sushi tempura' />
          <ItemCard img={p2} price='$4.990' titulo='Sushi rolls sesamo' altText='Sushi sesamo' />
          <ItemCard img={p3} price='$6.990' titulo='Sushi rolls salmon' altText='Sushi salmon' />
          <ItemCard img={p4} price='$5.990' titulo='Sushi rolls palta' altText='Sushi palta' />
        </section>
        <h1>Bebidas:</h1>
        <br />
        <section className='gris'>
          <ItemCard img={coca} price='$1.990' titulo='Coca-Cola 1.5 lts' altText='Coca-Cola' />
          <ItemCard img={fanta} price='$1.990' titulo='Fanta 1.5 lts' altText='Fanta' />
          <ItemCard img={sprite} price='$1.990' titulo='Sprite 1.5 lts' altText='Sprite' />
          <ItemCard img={kem} price='$1.990' titulo='Kem 1.5 lts' altText='Kem' />
        </section>
      </center>
    </div>
  </>
)
