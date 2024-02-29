import MFdoom from '../images/MFdoom.jpg'
import modelo1 from '../images/modelo1.jpg'
import modelo2 from '../images/modelo2.jpg'
import modelo3 from '../images/modelo3.jpg'


function Section() {
    return(
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Nuevo Diseño</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
      Lleva el legado de MF DOOM contigo🔥Hazte con nuestra exclusiva playera y rinde homenaje al legendario rapero luciendo un estilo único. ¡Ya de venta!
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li>
        <a href="#" className="group relative block">
          <img
            src={modelo2}
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">playera</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Pedir ahora
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group relative block">
          <img
            src={modelo3}
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">MF DOOM</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Pedir ahora
            </span>
          </div>
        </a>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" className="group relative block">
          <img
            src={MFdoom}
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Playera MF DOOM</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Comprar
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
    )
}
export default Section