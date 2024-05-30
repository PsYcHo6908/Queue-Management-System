import React, { useState } from 'react'

function ChristmasTree() {
  const [height, setHeight] = useState(10)

  const generateTree = height => {
    let tree = []

    for (let i = 0; i < height; i++) {
      let space = ' '.repeat(height - i - 1)
      let star = '*'.repeat(2 * i + 1)
      tree.push(space + star + space)
    }
    return tree
  }

  return (
    <div className='p-12' style={{ textAlign: 'center' }}>
      <h1>Christmas Tree</h1>
      <div>
        {generateTree(height).map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  )
}

export default ChristmasTree
