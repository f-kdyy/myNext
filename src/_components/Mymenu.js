import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShieldHalved, faBug} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Mymenu() {
  return (
    <>
        <ul className="list-group">
            <li className="list-group-item active">
                <FontAwesomeIcon icon={faShieldHalved} className='fa'/>
                <span>日志查询</span>
            </li>
            <li className="list-group-item">
                <FontAwesomeIcon icon={faBug} className='fa' />
                <span>错误处理</span>
            </li>
            <li className="list-group-item active">
                <FontAwesomeIcon icon={faShieldHalved} className='fa'/>
                <span>日志查询</span>
            </li>
            <li className="list-group-item">
                <FontAwesomeIcon icon={faBug} className='fa' />
                <span>错误处理</span>
            </li>
            <li className="list-group-item active">
                <FontAwesomeIcon icon={faShieldHalved} className='fa'/>
                <span>日志查询</span>
            </li>
            <li className="list-group-item">
                <FontAwesomeIcon icon={faBug} className='fa' />
                <span>错误处理</span>
            </li>
        </ul>
    </>
  )
}
