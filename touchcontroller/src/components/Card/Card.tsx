import React from 'react';
import './Card.css'

interface Props {
  children: any
}

const Card = ({children}: Props) => {
  return (
    <div className="card">
      <div className="card__content">{children}</div>
    </div>
  )
}

export default Card
