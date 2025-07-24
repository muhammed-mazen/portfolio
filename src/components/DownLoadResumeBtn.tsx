import React from 'react'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a href="/Muhammed_Mazen_Hafez_CV.pdf" download>
        <HackerBtn label='Download Resume' />
      </a>
    </div>
  )
}

export default DownLoadResumeBtn