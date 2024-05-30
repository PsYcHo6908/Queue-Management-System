import { useEffect, useState } from 'react'

function Question_2() {
  const [item, setItem] = useState([
    { category: 'fruit', value: 10 },
    { category: 'vegetable', value: 5 },
    { category: 'fruit', value: 15 },
    { category: 'meat', value: 20 },
    { category: 'vegetable', value: 7 },
  ])
  const [data, setData] = useState([])

  const countItem = () => {
    const count = []

    for (let i = 0; i < item.length; i++) {
      const category = item[i].category

      if (count[category]) {
        count[category] += 1
        console.log(count)
      } else {
        count[category] = 1
      }
    }

    // แปลง object เป็น array
    const countArray = Object.keys(count).map(key => ({
      category: key,
      count: count[key],
    }))

    setData(countArray)
  }

  useEffect(() => {
    countItem()
  }, [])

  return (
    <div className='p-12' style={{ textAlign: 'center' }}>
      <h1>Second</h1>
      {data.map(index => (
        <div key={index}>
          {index.category}: {index.count}
        </div>
      ))}
    </div>
  )
}

export default Question_2
