import { useForm } from 'react-hook-form'
import { useTarea } from '../contexto/TarContext'

function TareaPage(){
    const {register,handlesubmit} = useForm()
    const {crearTarea} = useTarea()
    const onSubmit = handlesubmit((data) => {
        crearTarea(data)
    })
    return (
        <div className='bg-gray-800, max-w-md p-10, rounded-md'>
            <form
                onSubmit={onSubmit}>
                <input type="text" placeholder='Titulo'
                {...register('Titulo')}
                className='w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2' 
                />
                <input type="text" placeholder='Descripcion'
                {...register('Descripcion')}
                className='w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2' 
                />
                <button type='submit' className='text-yellow-300 rounded-md bg-red-600, mx-2'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TareaPage