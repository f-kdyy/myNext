"use client"
import './globals.css'
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page';
import MyContentTopbar from '@/_components/MyContentTopbar';
import MyContentCommands from '@/_components/MyContentCommands';


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
              <MyContentCommands />
            </div>
        </div>
      </body>
    </html>
  )
}
