import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShieldHalved, faBug} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MyMenu() {
  const pathname = usePathname();

  return (
    <>
        <ul className="list-group">
            <li className={`list-group-item ${ pathname === '/' ? 'active' : '' }`}>
                <FontAwesomeIcon icon={faShieldHalved} className='fa'/>
                <Link href='/'><span>日志查询</span></Link>
            </li>
            <li className={`list-group-item ${ pathname === '/errhandle' ? 'active' : '' }`}>
                <FontAwesomeIcon icon={faBug} className='fa' />
                <Link href='/errhandle'><span>错误处理</span></Link>
            </li>
        </ul>
    </>
  )
}
