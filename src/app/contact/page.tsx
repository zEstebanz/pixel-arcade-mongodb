import React from 'react'

function Contact() {
    return (
        <div className='p-1 pt-8'>
            <div className='boxGameCustom p-8'>
                <h1 className="text-3xl font-semibold mt-4">Contacto</h1>
                <div className="container mx-auto flex flex-col md:flex-row mt-6">
                    <div className="md:w-1/2 pr-4">
                        <h2 className="text-xl font-semibold">Envíanos un mensaje</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600">Nombre</label>
                                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600">Correo electrónico</label>
                                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-600">Mensaje</label>
                                <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required></textarea>
                            </div>
                            <button type="submit" className="buttonCustom text-white py-2 px-4 rounded transition duration-300 ease-in-out">Enviar Mensaje</button>
                        </form>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <h2 className="text-xl font-semibold">Nuestra Ubicación</h2>
                        <div className="embed-responsive aspect-ratio-16/9">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.509755397263!2d-68.84852332479305!3d-32.91112777009468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e096e24fe67d3%3A0x8bd4ca97336e5fdb!2sIES%209-008%20Manuel%20Belgrano!5e0!3m2!1ses!2sar!4v1683400482745!5m2!1ses!2sar" width={350} height={300} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact