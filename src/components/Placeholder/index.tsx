import React from 'react'

interface PlaceholderProps {
  bgColor: string
  width: number
  height: number
}

const Placeholder = ({ bgColor, width, height }: PlaceholderProps) => (
  <div
    style={{
      backgroundColor: bgColor,
      width,
      height
    }}
  ></div>
)

export default Placeholder
