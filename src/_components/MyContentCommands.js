import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function MyContentCommands() {
  return (
    <div className='content-commands'>
        <Card className='text-center'>
            <Card.Header>CRM - 批处理</Card.Header>
            <Card.Body>
                <Card.Title>状态：</Card.Title>
            </Card.Body>
            <Card.Footer>
                <span className='card-span'>数据日期：</span>
                <span className='card-span'>下次日期：</span>
                <span className='card-span-btn'>开始批处理</span>
                <span className='card-span-btn'>停止批处理</span>
            </Card.Footer>
        </Card>
        <Card className='text-center'>
            <Card.Header>CRM - 批处理</Card.Header>
            <Card.Body>
                <Card.Title>状态：</Card.Title>
            </Card.Body>
            <Card.Footer>
            <span className='card-span'>数据日期：</span>
                <span className='card-span-btn'>开始批处理</span>
                <span className='card-span'>下次日期：</span>
                <span className='card-span-btn'>停止批处理</span>
            </Card.Footer>
        </Card>
        <Card className='text-center'>
            <Card.Header>CRM - 批处理</Card.Header>
            <Card.Body>
                <Card.Title>状态：</Card.Title>
            </Card.Body>
            <Card.Footer>
            <span className='card-span'>数据日期：</span>
                <span className='card-span-btn'>开始批处理</span>
                <span className='card-span'>下次日期：</span>
                <span className='card-span-btn'>停止批处理</span>
            </Card.Footer>
        </Card>
    </div>
  )
}
