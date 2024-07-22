//Images & Icons
import ViewStreamIcon from '@mui/icons-material/ViewStream';

function RoadMap() {
  return (
    <div className='flex flex-col justify-between items-center mt-20 ml-auto px-6 lg:p-0'>
        <div className='flex w-fit ml-auto justify-center items-center'>
          <ViewStreamIcon sx={{color: '#1f2937', fontSize: '20px', m: '0 0 0 7px'}} />
          <h5 className='font-heavey text-title text-md md:text-lg'>نقشه راه متخصص فرانت اند: </h5>
        </div>
        <p className='text-justify py-2 text-detail text-md mt-5 md:text-lg'>
            روزی که می خواستم برنامه نویسی رو شروع به یادگیری کنم؛ واقعاً واسم گیج کننده بود؛ چون هرجارو که سرچ می کردم؛ 
            به یک نتیجه جدید می رسیدم که <q className='p-1 mx-1 bg-gradient-to-r from-indigo600 to-indigo800 text-transparent
            bg-clip-text font-bold'>عه، این مسیر که بهتره</q>، البته که چندین راه وجود داره اما، به جرئت می تونم بگم نقشه راه زیر 
            تمام نیاز شما رو برای تبدیل شدن به یک برنامه نویس سنیور فراهم می کنه.
        </p>
    </div>
  )
}

export default RoadMap