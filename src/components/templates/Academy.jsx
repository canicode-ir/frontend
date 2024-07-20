import Card from '../modules/academy/Card';

//Images & Icons
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const Academy = ({ courses }) => {
  return (
    <>
      <div className='flex flex-col justify-between items-center mt-10 px-6 min-[900px]:p-0'>
        <div className='flex w-fit ml-auto justify-center items-center'>
          <ViewStreamIcon sx={{color: '#1f2937', fontSize: '20px', m: '0 0 0 7px'}} />
          <h5 className='font-heavey text-title text-md md:text-lg'>دوره های آموزشی: </h5>
        </div>
        <p className='text-justify py-2 text-detail text-md mt-5 md:text-lg'>
          ما در آکادمی آموزشی کَن آی کُد؛ سعی کرده ایم تا به روز ترین و پرکاربرد ترین مفاهیم را در حوزه تخصصی برنامه نویسی 
          فرانت اند، در اختیار شما همکاران و کارآموزان عزیز قرار دهیم. شما می توانید دوره های آکادمی ما رو در پایین مشاهده فرمایید.
        </p>    
      </div>
      <div className='grid grid-cols-1 gap-4 min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 p-6
        min-[900px]:p-0'>
        {courses.map((course) => (
          <Card key={course._id} course={course}/>
        ))}
      </div>
    </>
  );
};

export default Academy;
