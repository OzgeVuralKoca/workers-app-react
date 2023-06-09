import React from 'react'
import Card from '../UI/Card'

const WorkerList = ({ workers, setWorkers }) => {
    const deleteWorker = (id) => {
        setWorkers(
            workers.filter((item) => item.id !== id)
        )
        
    }

    console.log(workers)
    return (
        <Card className='mt-10 mx-auto' >
            <ul>
                <li className='flex justify-between font-bold text-sky-800 text-lg'>
                    <h3 className=''>İsim</h3>
                    <h3>Maaş</h3>
                </li>
                {workers.map((worker) => (
                    <li
                        key={worker.id}
                        className='flex justify-between text-sky-800 text-lg cursor-pointer border-b border-t hover:bg-sky-300/20'
                        onClick={() => deleteWorker(worker.id)}
                    >
                        <p>{worker.name}</p>
                        <p>{worker.wage}</p>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default WorkerList