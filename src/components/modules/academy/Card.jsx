'use client';

import Image from "next/image";

//Components
import Acordion from '../../elements/Acordion';

function Card({course}) {
  const imageUrl = 'https://canicode-app.storage.iran.liara.space/'
  return (
    <div>
      <div>
        <Image className='w-[40px] h-[40px]' src={`${imageUrl}${course.image}`} width={600} height={600} alt='course-avatar' />
        <h2>{course.title}</h2>
      </div>
      <Acordion {...course}/>
    </div>
  )
}

export default Card;