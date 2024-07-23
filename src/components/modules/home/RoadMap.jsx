//Components
import RoadMapStepper from '../../elements/RoadMapStepper';

//Images & Icons
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import roadmapBanner from '../../../../public/homepage/roadmapBanner.png';
import Image from 'next/image';

function RoadMap() {
  return (
    <div className='relative flex flex-col justify-between items-center mt-20 ml-auto px-6 lg:p-0 min-[800px]:w-full'>
        <div className='flex w-fit ml-auto justify-center items-center'>
          <ViewStreamIcon sx={{color: '#1f2937', fontSize: '20px', m: '0 0 0 7px'}} />
          <h5 className='font-heavey text-title text-md md:text-lg'>نقشه راه یادگیری فرانت اند: </h5>
        </div>
        <RoadMapStepper />
        <Image className='hidden absolute w-[350px] left-5 top-6 min-[800px]:block' src={roadmapBanner} width={600} height={600} alt='roadmap-banner'/>
    </div>
  )
}

export default RoadMap;