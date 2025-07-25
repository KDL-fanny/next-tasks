import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900'>
        <h1 className='text-8xl font-bold'>404</h1>
        <p className='text-4xl font-medium'>Page Not Found</p>
        <Link href='/' className='mt-4 text-xl text-blue-600 hover:underline'>Go Back Home</Link>
    </div>
  )
}

export default NotFoundPage