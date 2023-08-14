"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Myheader from '@/_components/main/MyHeader'
import Mymenu from '@/_components/main/MyMenu'
import MyContentTopbar from '@/_components/zkop/MyContentTopbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={`app`}>
            <div className={`sidebar`}>
              <div className='header'>
                <Myheader />
              </div>
              <div className='menu'>
                <Mymenu />
              </div>
                
            </div>
            <div className={`content`}>
              <MyContentTopbar />
              {children}
            </div>
        </div>
      </body>
    </html>
  )
}
