"use client"
import './globals.css'
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page';
import MyContentTopbar from '@/_components/MyContentTopbar';
import MyContentCommands from '@/_components/MyContentCommands';
import MyContentTable from '@/_components/MyContentTable';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={`app`}>
            <div className={`sidebar`}>
                {/* <Home /> */}
                {children}
            </div>
            <div className={`content`}>
              <MyContentTopbar />
              <div className='content-center'>
                <MyContentCommands />
                <MyContentTable />
              </div>
            </div>
        </div>
      </body>
    </html>
  )
}
