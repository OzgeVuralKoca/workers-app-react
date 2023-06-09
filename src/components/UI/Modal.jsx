import React from 'react'
import Card from './Card'
import Button from './Button'

const Modal = ({error, onConfirm}) => {
    return (
        <div className='fixed top-1/4 left-0 flex justify-center mx-auto z-50 w-screen'>
            <div 
            className='backdrop-blur-sm bg-white/30 w-screen h-screen fixed top-0'
            onClick={onConfirm}
            ></div>
            <Card className='w-[30rem] md:w-[30rem] lg:w-[30rem] shadow-md shadow-gray-500 p-0 z-10'>
                <header className='bg-red-700 rounded-t-lg text-white py-2 px-4 font-semibold'>
                    {error.title}
                </header>
                <section className='px-4 py-3'>
                    {error.message}
                </section>
                <footer className='p-2 text-white float-right'>
                    <Button onClick={onConfirm} className='px-3'>Kapat</Button>
                </footer>
            </Card>
        </div>
    )
}

export default Modal