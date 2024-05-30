import React from 'react'

function ReverseChristmasTree() {
  const height = 10

  const generateTree = () => {
    let tree = []
    for (let i = 0; i < height; i++) {
      let space = ' '.repeat(i)
      let star = '*'.repeat((height - i) * 2 - 1)
      tree.push(space + star + space)
    }
    return tree
  }

  return (
    <div className='p-12' style={{ textAlign: 'center' }}>
      <h1>Reverse Christmas Tree</h1>
      <div>
        {generateTree().map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  )
}

export default ReverseChristmasTree
