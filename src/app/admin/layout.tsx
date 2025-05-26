import React from 'react'
import RootLayout from '../layout'
import Link from 'next/link';

const AdminLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const navLink = [
        {
            name: 'Dashboard',
            href: '/admin'
        },
        {
            name: 'Categories',
            href: '/admin/categories'
        },
        {
          name: 'Experience',
          href: '/admin/experience'
        },
        {
          name: 'Portfolio',
          href: '/admin/portfolio'
        }
    ]

  return (
    <RootLayout>
        <div className='grid grid-cols-6'>
            <div className='sticky top-0 h-screen bg-white border-r border-gray-200 col-span-1 p-2'>
                {
                  navLink.map((nav, index) => (
                    <Link key={index} href={nav.href} className='block mb-2 py-2 px-4 rounded hover:bg-gray-100'>{nav.name}</Link>
                  ))
                }
            </div>
            <div className='col-span-5'>
                {children}
            </div>
        </div>
    </RootLayout>
  )
}

export default AdminLayout