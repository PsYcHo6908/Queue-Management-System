import { useEffect, useState } from 'react'

function Third() {
  const [item, setItem] = useState([
    { category: 'fruit', value: 10 },
    { category: 'vegetable', value: 5 },
    { category: 'fruit', value: 15 },
    { category: 'meat', value: 20 },
    { category: 'vegetable', value: 7 },
  ])
  const [data, setData] = useState([])

  const calculateAverage = () => {
    const sum = {}
    const count = {}

    for (let i = 0; i < item.length; i++) {
      const category = item[i].category
      const value = item[i].value

      if (sum[category]) {
        sum[category] += value
        count[category] += 1
      } else {
        sum[category] = value
        count[category] = 1
      }
    }

    const averageArray = Object.keys(sum).map(key => ({
      category: key,
      average: sum[key] / count[key],
    }))

    setData(averageArray)
  }

  useEffect(() => {
    calculateAverage()
  }, [item])

  return (
    <div className='p-12' style={{ textAlign: 'center' }}>
      <h1>Third</h1>
      {data.map((item, index) => (
        <div key={index}>
          {item.category}: {item.average.toFixed(2)}
        </div>
      ))}
    </div>
  )
}

export default Third
