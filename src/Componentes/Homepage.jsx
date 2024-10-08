import i1 from '../img/foto1.png';
import i2 from '../img/foto2.png';
import i3 from '../img/foto3.png';
import i4 from '../img/foto4.png';
import i5 from '../img/foto5.png';
import i6 from '../img/foto6.png';

import logo from '../img/logo-restourant.webp'
import logoDelivery from '../img/logo-delivery.jpg'
import mesas from '../img/mesas-restaurant.png'

import '../css/home.css'

export function Homepag() {
    return (
        <div className="bg-gray-50">
            <section id="Sobrenosotros" className="content-section p-8">
                <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
                <p className="mb-4">Nuestros ancestros de origen japonés llegaron a Chile en el año 1976, llegando a la comuna de Maipú
                    para comenzar una nueva vida, y trayendo sus tradiciones milenarias del Oriente al occidente, 
                    siendo la primera casa de sushi de la comuna, región y del país.</p>
                <p className="mb-4">Nos enorgullece contar con 48 años de experiencia, brindando piezas de fusión japonesa/americana y piezas 100% japonesas,
                    gracias a la disciplina y amor, hemos transmitido nuestro conocimiento sobre el sushi de generación en generación, siendo
                    esta la tercera generación de la familia que decide ser parte de este gran y bello proyecto, enfocados en entregarte una 
                    experiencia de primer nivel tanto culinariamente como en entretenimiento.</p>
                <p className="mb-4">Ven a visitarnos a nuestro nuevo local ubicado en Mar de Chile 516, Maipú</p>
                <p className="font-semibold">¡Pide ya!</p>
            </section>

            <section id="opciones" className="content-section p-8">
                <h2 className="text-3xl font-bold mb-4">Nuestras opciones</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <div className="opciones-item bg-white shadow-md rounded-lg p-4">
                        <img src={logo} alt="retiro en local" className="mb-2" />
                        <h3 className="text-xl font-semibold">Retiro en local</h3>
                        <p>Puedes pedir a través de nuestra página y poder retirar tu pedido en nuestro local en  Mar de Chile 516, Maipú</p>
                    </div>
                    <div className="opciones-item bg-white shadow-md rounded-lg p-4">
                        <img src={logoDelivery} alt="despacho" className="mb-2" />
                        <h3 className="text-xl font-semibold">Despacho a domicilio</h3>
                        <p>Si te encuentras en un radio de 3KM, tu pedido es entregado de manera gratuita en tu domicilio.</p>
                    </div>
                    <div className="opciones-item bg-white shadow-md rounded-lg p-4">
                        <img src={mesas} alt="comer en local" className="mb-2" />
                        <h3 className="text-xl font-semibold">Ven a nuestro local</h3>
                        <p>Contamos con capacidad para 12 personas, así que ¡corre ven pronto a disfrutar de nuestro local!</p>
                    </div>
                </div>
                <div className="photo-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    <img src={i1} alt="Foto 1" className="w-full h-auto rounded-lg" />
                    <img src={i2} alt="Foto 2" className="w-full h-auto rounded-lg" />
                    <img src={i3} alt="Foto 3" className="w-full h-auto rounded-lg" />
                    <img src={i4} alt="Foto 4" className="w-full h-auto rounded-lg" />
                    <img src={i5} alt="Foto 5" className="w-full h-auto rounded-lg" />
                    <img src={i6} alt="Foto 6" className="w-full h-auto rounded-lg" />
                </div>
            </section>

            <section id="recomendaciones" className="content-section p-8">
                <h2 className="text-3xl font-bold mb-4">Comentarios</h2>
                <div className="recomendaciones-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="recomendaciones-item bg-white shadow-md rounded-lg p-4">
                        <p>&quot;La mejor experiencia de comida japonesa que he tenido en mucho tiempo. ¡Altamente recomendado!&quot;</p>
                        <p className="font-semibold">- Javier Fuenzalida</p>
                    </div>
                    <div className="recomendaciones-item bg-white shadow-md rounded-lg p-4">
                        <p>&quot;Los sabores son exquisitos y el ambiente es inmejorable.&quot;</p>
                        <p className="font-semibold">- Matias Sepulveda</p>
                    </div>
                    <div className="recomendaciones-item bg-white shadow-md rounded-lg p-4">
                        <p>&quot;El Teraki me recordó a mi viaje a Japón. ¡Delicioso!&quot;</p>
                        <p className="font-semibold">- Matias Salas</p>
                    </div>
                </div>
            </section>

            <footer id="contact" className="bg-gray-200 p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
                <p>A través del número: <span className="font-semibold">+569 8920 0172</span></p>
                <p>A través del correo: <span className="font-semibold">Fukusuke_sushi@gmail.com</span></p>
                <p>Visítanos en nuestro local ubicado en Mar de Chile 516, Santiago, Maipú, Región Metropolitana </p>
                <p className="mt-4">&copy; 2024 Fukusuke. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}