import React, { useEffect, useState } from 'react'

function Page_2() {
  const [curentQueue, setCurrentQueue] = useState('-')
  const [yourQueue, setYourQueue] = useState('-')
  const [queueDifference, setQueueDifference] = useState(0)

  useEffect(() => {
    const curQueueNum = Math.floor(Math.random() * 1000)
    const curQueue = `A${String(curQueueNum).padStart(3, '0')}`

    const yourQueueNum = curQueueNum + Math.floor(Math.random() * 41)
    const yourQueue = `A${String(yourQueueNum % 1000).padStart(3, '0')}`

    setCurrentQueue(curQueue)
    setYourQueue(yourQueue)
    setQueueDifference(yourQueueNum - curQueueNum)
  }, [])
  return (
    <>
      <div className='flex flex-col items-center bg-[#FFF9EF] min-h-screen font-IBM'>
        <div className='text-2xl font-normal mt-20 mb-8'>
          คิวปัจุบัน {curentQueue}
        </div>

        <div className='rounded-full bg-[#EC5D39] w-32 h-32 mb-8'>
          <div className='flex flex-col justify-center items-center mt-8'>
            <p className='text-xl text-stone-50 font-bold text-[#FFF9EF]'>คิวของท่าน</p>
            <h1 className='text-2xl text-stone-50 font-bold'>{yourQueue}</h1>
          </div>
        </div>

        <div className='bg-[#FFF] border-solid border-2 border-[#402E2C] w-48 mb-8 rounded-md'>
          <div className='flex flex-col justify-center items-center'>
          {`คิวของท่านอีก ${queueDifference} คิว`}
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
