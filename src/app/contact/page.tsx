import React from 'react';
import Link from 'next/link';

function Contact() {
    return (
        <div className='p-1 pt-8'>
            <h1 className="text-center text-white text-6xl text-white font-bold mb-4">Contacto</h1>

            <div className='boxGameCustom p-8'>
                <h1 className="text-3xl font-semibold mt-4">Contacto</h1>
                <div className="container mx-auto flex flex-col md:flex-row mt-6">
                    <div className="md:w-1/2 pr-4">
                        <h2 className="text-xl font-semibold text-center">Envíanos un mensaje</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300">Nombre:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300">Correo electrónico:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-300">Mensaje:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="buttonCustom3 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <h2 className="text-xl font-semibold">Nuestra Ubicación</h2>
                        <div className="embed-responsive aspect-ratio-16/9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.509755397263!2d-68.84852332479305!3d-32.91112777009468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e096e24fe67d3%3A0x8bd4ca97336e5fdb!2sIES%209-008%20Manuel%20Belgrano!5e0!3m2!1ses!2sar!4v1683400482745!5m2!1ses!2sar"
                                width="100%"
                                height="350" // Ajusta la altura para dispositivos móviles
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold">Información de Contacto</h2>
                            <p>Teléfono: <Link href="tel:+54 261 3530413" className='textCustom'> 2612528276</Link></p>
                            <p>Correo Electrónico:<Link  href="mailto:otecnica@mendopleg.com.ar?Subject=El%20asunto%20del%20mail" className='textCustom'> pixelarcade@gmail.com</Link> </p>
                            <p>Dirección: <Link href="https://www.google.com/maps/place/IES+9-008+Manuel+Belgrano/@-32.911132,-68.845948,16z/data=!4m6!3m5!1s0x967e096e24fe67d3:0x8bd4ca97336e5fdb!8m2!3d-32.9111323!4d-68.8459484!16s%2Fg%2F11fy1l2m7q?hl=es&entry=ttu" className='textCustom'> Roque Sáenz Peña 1271, Godoy Cruz, Mendoza</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
