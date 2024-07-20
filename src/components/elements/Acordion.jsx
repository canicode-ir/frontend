import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function AccordionTransition({description, name}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='mt-5'>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          boxShadow: expanded ? '0px 0px 10px 2px rgba(230,230,230,1)' : 'none', p: expanded ? '5px' : '', transition: 'all .3s ease-in-out',
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: expanded ? 'none' : '#374151'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{p: "0 5px", bgcolor: !expanded ? '#f3f4f6' : 'none' , borderRadius: '10px'}}
        >
          <div className={`flex w-fit ${!expanded ? 'text-gray700' : 'none'}`}>
            <MoreHorizIcon sx={{m: '0 0 0 5px'}}/>
            <Typography sx={{fontSize: '14px', fontWeight: '110'}} variant='p' component='p'>توضیحات و پیش نیاز</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{p: '0 5px', m: '0 0 10px 0'}}>
          <Typography sx={{textAlign: 'justify', fontSize: '13px'}} variant='p' component='p'>
            {description}
          </Typography>
          <section className='flex flex-col mt-5'>
            <div className='flex py-2'>
              <PriorityHighIcon fontSize='small' sx={{color: 'red'}}/>
              <p className='text-[13px] font-bold'>پیش نیاز این دوره:</p>
            </div>
            <p className='w-fit text-[13px] px-1 text-justify font-regular'>
              {
              name === 'htmlcss' ? 'شرکت در این دوره هیچ پیش نیازی ندارد و قدم اول آموزش برنامه نویسی است.' : 
              name === 'javascript' ? 'برای شرکت در این دوره می بایست ابتدا HTML  و CSS را به صورت کامل آموزش دیده باشید.' : 
              name === 'reactjs' ? 'برای شرکت در دوره آموزش ریکت حتماً باید در ابتدا آموزش های دوره سطح جونیور یعنی؛ HTML, CSS و JavaScript را گذرانده باشید. درک عمیق زبان جاوااسکریپت باعث افزایش سرعت و کیفیت یادگیری شما در آموزش ریکت می شود.' :
              name === 'nextjs' ? 'از آنجاییکه NextJs یک فریم وورک از کتابخانه قدرتمند ReactJs می باشد؛ می بایست ابتدا آموزش ریکت را به طور کامل و خیلی عمیق کارکرده باشید.' : 
              name === 'tailwindcss' || name === 'materialUi' ? 'برای شرکت در این آموزش باید دوره ریکت را گذرانده باشید.' : 
              'برای  حضور در این دوره، شما پس از گذراندن HTML و CSS می توانید ثبت نام کنید؛ اما پیشنهاد ما بعد از گذراندن دوره جاوااسکریپت است.'}
            </p>
          </section>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}