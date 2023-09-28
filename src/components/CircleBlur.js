import React from 'react'

function CircleBlur({additionalClasses}) {
    const circleClasses = `opacity-60 w-64 h-64 rounded-full blur-3xl bg-orange-300 ${additionalClasses || ''}`;

  return <div className={circleClasses}></div>
}

export default CircleBlur