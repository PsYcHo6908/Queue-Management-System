import React, { useState } from 'react'

function Page_2() {
  const [curentQueue, setcurentQueue] = useState('-')

  return (
    <>
      {/* <div className='font-kanit p-12 min-h-screen' style={{}}> */}
      <div className='flex flex-col items-center bg-[#FFF9EF] min-h-screen font-IBM'>
        <div className='text-2xl font-normal mt-20 mb-8'>
          คิวปัจุบัน {'A123'}
        </div>

        <div className='rounded-full bg-[#EC5D39] w-32 h-32 mb-8'>
          <div className='flex flex-col justify-center items-center mt-8'>
            <p className='text-xl text-stone-50'>คิวของท่าน</p>
            <h1 className='text-2xl text-stone-50 font-bold'>A123</h1>
          </div>
        </div>

        <div className='bg-[#FFF] border-solid border-2 border-[#402E2C] w-48 mb-8 rounded-md'>
          <div className='flex flex-col justify-center items-center'>
            {'คิวของท่านอีก 18 คิว'}
          </div>
        </div>

        <div className='flex flex-col justify-center items-center pb-8'>
          <div className=''>ขอบคุณสำหรับการใช้บริการ</div>
          <div className=''>กรุณารอการเรียกคิวเพื่อเข้าใช้บริการ</div>
          <div className=''>ภายในเวลาที่กำหนด</div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Page_2
