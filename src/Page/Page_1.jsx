import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from '../assets/calendar.png'
import G2User from '../assets/group.png'
import MaleUser from '../assets/men.png'
import './Page_1.css'

function Page_1() {
  const navigate = useNavigate()

  const [type, setType] = useState('')
  const [quantity, setQuantity] = useState()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')

  function changeType(t) {
    setType(t)
    console.log('Type is  ' + type)
  }

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  const isButtonDisabled = () => {
    const isNameValid = /^[a-zA-Zก-๙]+$/.test(name)
    const isPhoneValid = /^\d{10}$/.test(phone)
    if (!quantity || !name || !phone || !isNameValid || !isPhoneValid) {
      return true
    }
    if (type === 'A' && (quantity < 1 || quantity > 4)) {
      return true
    }
    if (type === 'B' && quantity < 5) {
      return true
    }
    return false
  }

  const handleButtonClick = () => {
    console.log('Button 02 clicked!')
    navigate('/customer')
  }

  useEffect(() => {
    if (type === 'A') {
      setQuantity(1)
    } else if (type === 'B') {
      setQuantity(5)
    }
  }, [type])

  useEffect(() => {
    console.log('11111')
    console.log('222222')
    getDate()
  }, [])

  function getThaiMonth(month) {
    switch (month) {
      case 1:
        return 'มกราคม'
      case 2:
        return 'กุมภาพันธ์'
      case 3:
        return 'มีนาคม'
      case 4:
        return 'เมษายน'
      case 5:
        return 'พฤษภาคม'
      case 6:
        return 'มิถุนายน'
      case 7:
        return 'กรกฎาคม'
      case 8:
        return 'สิงหาคม'
      case 9:
        return 'กันยายน'
      case 10:
        return 'ตุลาคม'
      case 11:
        return 'พฤศจิกายน'
      case 12:
        return 'ธันวาคม'
      default:
        return ''
    }
  }

  function getDate() {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    setDate(date)
    const thaiMonth = getThaiMonth(month)
    setMonth(thaiMonth)
    return `${date}/${month}/${year}`
  }

  return (
    <>
      {/* { type } */}
      {/* { date } { month } */}

      {/* clour bg #FFF9EF */}
      <div
        className='bg-[#FFF9EF] min-h-screen p-12 font-IBM'
        style={{ marginPadding: '50px' }}
      >
        {/* Top */}
        <div className='flex justify-end'>
          <span className='flex items-center'>
            {date + ' ' + month + ' '}
            <img
              src={Calendar}
              alt='Male User'
              style={{ width: '40px', height: 'auto', marginLeft: '7px' }}
            />
          </span>
        </div>

        {/* content */}
        <div className='bg-[#FFF9EF] tablet:grid grid-cols-1 laptop:grid-cols-2'>
          {/* 1 */}
          <div>
            <div className='flex flex-col space-y-8'>
              {/* banner queue */}
              {/* <div className="01 basis-32 flex justify-center items-center">
              <div className="bg-[#402E24] w-80 h-20 flex justify-center items-center text-neutral-50 " >
                คิวปัจจุบัน
              </div>
              
            </div> */}

              {/* banner queue */}
              <div
                className='flex justify-center items-center'
                style={{ marginTop: '5%' }}
              >
                <h3 className='ribbon'>คิวปัจจุบัน</h3>
              </div>

              {/* 1-4 button */}
              <div className='basis-32 flex justify-center items-center'>
                <button
                  type='button'
                  className={`bg-[#EC5D39] flex justify-center items-center text-neutral-50 rounded-[30px] 
                ${type === 'A' ? 'border-2 border-black' : ''}`}
                  style={{ width: '420px', height: '180px' }}
                  // onClick={handleClick}
                  onClick={() => changeType('A')}
                >
                  <div className='grid grid-cols-2 w-full h-full'>
                    {/* left side of button */}
                    <div className='flex justify-center items-center'>
                      {/* user icon */}
                      {/* <img className='text-white' src={MaleUser} alt="Left Image" style={{ width: '100px', height: 'auto' }} /> */}

                      <img
                        src={MaleUser}
                        alt='Male User'
                        style={{ width: '80px', height: '70px' }}
                        className=''
                      />
                    </div>

                    {/* right side of button */}
                    <div className='grid grid-rows-2 w-full h-full'>
                      <div
                        style={{
                          margin: '0',
                          display: 'flex',
                          alignItems: 'flex-end',
                          height: '100%',
                        }}
                      >
                        <div className='text-5xl text-center'>1 - 4 ท่าน</div>
                      </div>

                      <div
                        className='text-xl'
                        style={{
                          margin: '0',
                          display: 'flex',
                          alignItems: 'flex-start',
                          height: '100%',
                        }}
                      >
                        A111 (12)
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* >5 button */}
              <div className='basis-32 flex justify-center items-center'>
                <button
                  type='button'
                  className={`bg-[#EC5D39] flex justify-center items-center text-neutral-50 rounded-[30px] 
                ${type === 'B' ? 'border-2 border-black' : ''}`}
                  style={{ width: '420px', height: '180px' }}
                  // onClick={handleClick}
                  onClick={() => changeType('B')}
                >
                  <div className='grid grid-cols-2 w-full h-full'>
                    {/* left side of button */}
                    <div className='flex justify-center items-center'>
                      {/* user icon */}
                      <img
                        src={G2User}
                        alt='Male User'
                        style={{ width: '100px', height: 'auto' }}
                        className='white-icon'
                      />
                    </div>

                    {/* right side of button */}
                    <div className='grid grid-rows-2 w-full h-full'>
                      <div
                        style={{
                          margin: '0',
                          display: 'flex',
                          alignItems: 'flex-end',
                          height: '100%',
                        }}
                      >
                        <div className='text-5xl text-center'>มากกว่า 5</div>
                      </div>

                      <div
                        className='text-xl'
                        style={{
                          margin: '0',
                          display: 'flex',
                          alignItems: 'flex-start',
                          height: '100%',
                        }}
                      >
                        B47 (5)
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* จำนวนลูกค้าปัจจุบัน */}

              {/* <div className="basis-32 flex justify-center items-center" >
              <div className="bg-[#402E24] w-80 h-20 flex justify-center items-center text-neutral-50">
              จำนวนลูกค้าปัจจุบัน
              </div>
            </div> */}

              <div
                className='flex justify-center items-center'
                style={{ marginTop: '5%' }}
              >
                <h3 className='ribbon'>จำนวนลูกค้าปัจจุบัน</h3>
              </div>

              {/* input */}
              <div className='basis-16 flex justify-center items-center'>
                <div
                  className=' flex justify-center items-center text-neutral-50 '
                  style={{ width: '600px', height: '100px' }}
                >
                  {/* ปุ่มด้านซ้าย */}
                  <div
                    className='bg-[#402E24] flex items-center justify-center rounded-[5px]'
                    style={{ width: '60px', height: '50px' }}
                  >
                    <button
                      className='bg-[#f8fafc] text-gray-950 flex items-center justify-center text-xl'
                      style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                  </div>

                  {/* input: จำนวนคน */}
                  <div className='flex justify-between items-center w-80 h-full px-4'>
                    <input
                      className='bg-[#f8fafc] flex-grow px-2 text-slate-950 border-2 border-black disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-400 rounded-md'
                      style={{ height: '60px' }}
                      disabled={!type}
                      type='number'
                      value={quantity}
                      onChange={e => setQuantity(Number(e.target.value))}
                    ></input>
                  </div>

                  {/* ปุ่มด้านขวา */}

                  <div
                    className='bg-[#402E24] flex items-center justify-center rounded-[5px]'
                    style={{ width: '60px', height: '50px' }}
                  >
                    <button
                      className='bg-[#f8fafc] text-gray-950 flex items-center justify-center text-xl'
                      style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* grid-colum 2 */}
          <div>
            <div className='phone:grid phone:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-1 desktop:grid-cols-1'>
              <div style={{ marginTop: '3%' }}>
                <label>ชื่อ</label>
                <br></br>
                <div className='flex justify-between items-center w-full h-full px-4'>
                  <input
                    type='text'
                    className='bg-[#f8fafc] flex-grow px-2 text-slate-950 border-2 border-black rounded-md'
                    style={{ height: '60px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  ></input>
                </div>
              </div>

              <div style={{ marginTop: '3%' }}>
                <label>เบอร์โทร</label>
                <br></br>
                <div className='flex justify-between items-center w-full h-full px-4'>
                  <input
                    type='text'
                    className='bg-[#f8fafc] flex-grow px-2 text-slate-950 border-2 border-black rounded-md'
                    style={{ height: '60px' }}
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            {/* button รับบัตรคิว */}
            <button
              className='bg-[#402E24] flex justify-center items-center h-20 w-80 mx-auto rounded-[10px] disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-400'
              style={{ marginTop: '5%' }}
              disabled={isButtonDisabled()}
              onClick={handleButtonClick}
            >
              <span className='text-neutral-50 py-2 px-4'>รับบัตรคิว</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page_1
