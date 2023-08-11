'use client';
import MyContentCommands from '@/_components/zkop/MyContentCommands';
import MyContentTable from '@/_components/zkop/MyContentTable';

export default function Home() {
  return (
    <>
      <div className='content-center'>
        <MyContentCommands />
        <MyContentTable />
      </div>
    </>
  )
}
