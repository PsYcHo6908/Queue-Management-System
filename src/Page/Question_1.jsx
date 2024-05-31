import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Question_1() {

  const [ageArr, setAgeFilterArr] = useState([
    { name: 'John', age: 25 },
    { name: 'Jane', age: 20 },
    { name: 'Doe', age: 17 },
    { name: 'Smith', age: 30 },
    { name: 'Emily', age: 22 },
  ])

  const [show, setShowArr] = useState([])

  const delIndex = () => {
    // sort
    const ans = ageArr.sort((a, b) => a.age - b.age)
    // filter
    const filteredArr = ans.filter(ans => ans.age >= 18)
    console.log(filteredArr)

    setShowArr(filteredArr)
  }
  useEffect(() => {
    delIndex()
  }, [])

  return (
    <>
      {/* First Question */}
      <div className='p-12' style={{ textAlign: 'center' }}>
        <h1>First</h1>
        {show.map((item, index) => (
          <p key={index}>
            {item.name} - {item.age}
          </p>
        ))}
      </div>
    </>
  )
}

export default Question_1
