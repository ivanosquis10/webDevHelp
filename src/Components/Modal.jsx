const Modal = ({ handleModal }) => {
  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed inset-0 bg-gray-900 bg-opacity-95 transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 sm:w-full sm:max-w-lg shadow-xl shadow-indigo-900'>
            <div className='bg-slate-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mt-3 sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3
                    className='text-lg text-center font-bold uppercase leading-6 text-gray-200'
                    id='modal-title'
                  >
                    Bienvenido dev :D
                  </h3>
                  <div className='mt-2 font-medium text-start'>
                    <p className='text-sm font-thin text-gray-400 mb-2'>
                      Este es un proyecto que realice con el objetivo de
                      recolectar un montón de recursos relacionados con el
                      front-end para que sea más fácil y rápido de encontrar y
                      usar.
                    </p>
                    <p className='text-sm font-thin text-gray-400 mb-2'>
                      Quiero destacar que es un proyecto totalmente de práctica
                      y para ver de que soy capaz de desarrollar, todos estos
                      recursos los recolecte de diferentes tweets de otros
                      desarrolladores, los cuales deje sus tweets
                    </p>
                    <p className='text-sm font-thin text-gray-400 mb-2'>
                      Quiero agradecerle a todos esos desarolladores que se
                      toman el tiempo de publicar toda esa información porque
                      realmente es muy útil, sobretodo cuando estás aprendiendo
                      :D
                    </p>
                    <p className='text-sm text-gray-400 font-medium'>
                      PD: Esto me da mucha pena pero realmente no cuento con una
                      buena computadora, de hecho se puede ver en el repositorio
                      que hago este proyecto desde un editor online porque no
                      puedo usar muchos programas porque EXPLOTA :(,entonces si
                      quieres donar, pedirme algún trabajo o algo así, me puedes
                      escribir a mi twitter que esta al final, gracias y
                      disfruta :D
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-slate-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='button'
                className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 sm:ml-3 sm:w-auto sm:text-sm'
                onClick={handleModal}
              >
                Cerrar :D
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
