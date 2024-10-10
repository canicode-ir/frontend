import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

//Functions
import { addCommas } from '../../../../../helpers/functions';

//Icons & Images
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TagIcon from '@mui/icons-material/Tag';

// Define prop types
interface ControlledAccordionsProps {
  card_pan: string;
  amount: number;
  createdAt: string;
  invoice_date: string;
  invoice_number: string; // Make sure to define the correct type
  orders: any; // Define more specific type if possible
  ref_id: string;
  verify: boolean; // Adjust type as needed
  _id: string;
}

export default function ControlledAccordions({
    card_pan,
    amount,
    createdAt,
    invoice_number,
    orders,
    ref_id,
    verify,
}: ControlledAccordionsProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  console.log(orders);

  /////Today-Date
const date = new Date(createdAt);
// Define options for formatting
const weekdayOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    timeZone: 'Asia/Tehran'
};
const dayOptions: Intl.DateTimeFormatOptions = {
    day: "numeric", timeZone: "Asia/Tehran"
};
const monthOptions: Intl.DateTimeFormatOptions = {
    month: "long", timeZone: "Asia/Tehran"
};
const yearOptions: Intl.DateTimeFormatOptions = {
    year: "numeric", timeZone: "Asia/Tehran"
};
// Create formatters for each component
const weekdayFormatter = new Intl.DateTimeFormat("fa-IR", weekdayOptions);
const dayFormatter = new Intl.DateTimeFormat("fa-IR", dayOptions);
const monthFormatter = new Intl.DateTimeFormat("fa-IR", monthOptions);
const yearFormatter = new Intl.DateTimeFormat("fa-IR", yearOptions);
// Get each component
const weekday = weekdayFormatter.format(date);
const day = dayFormatter.format(date);
const month = monthFormatter.format(date);
const year = yearFormatter.format(date);

// Construct the desired format
const formattedDate = `${weekday}، ${day} ${month} ${year}`;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

const paymentDetails = [
    {id: 'amount', title: 'مبلغ خرید: ', data: `${addCommas(amount)} تومان`},
    {id: 'date', title: 'تاریخ خرید: ', data: formattedDate},
    {id: 'card-no', title: 'شماره کارت: ', data: `${verify ? card_pan : 'خرید انجام نشده است'}`},
    {id: 'invoice-number', title: 'شماره فاکتور: ', data: invoice_number}
]

  return (
    <div className='block mb-3 w-full rounded-md backdrop-filter 
    backdrop-blur-md odd:bg-indigo500/50 even:bg-indigo800/50 transition-all duration-300 hover:opacity-70 hover:ring-2
    ring-indigo200'>
      <Accordion expanded={expanded === 'panel1'} sx={{bgcolor: 'transparent'}} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='small' sx={{color: 'whitesmoke'}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className='flex w-full justify-between items-center'>
            <Typography sx={{fontFamily: 'dana', fontWeight: '90', fontSize: '13px', color: 'white', width: 'fit-content',}}>
                <CreditCardIcon fontSize='small' sx={{mr: .5}}/>
            اطلاعات تراکنش |{' '} 
            <span className='block w-fit text-white text-[10px] mx-auto 
                mt-1 font-ultralight min-[500px]:inline min-[500px]:my-0'>
                {formattedDate}
            </span>
            </Typography>
             <span className={`hidden text-[12px] text-white ${verify ? 'bg-green600' : 'bg-red500'}
            p-1 rounded-md ml-2 min-[340px]:block`}>
                {verify ? 'انجام شده' : 'انجام نشده'}
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col w-full justify-between items-center divide-y divide-indigo50'>
            <section className='w-full'>
                <h4 className='font-demibold text-indigo200 text-[12px]'>
                    <HelpCenterIcon fontSize='small' sx={{mr: .5}}/>
                    اطلاعات پرداخت:
                </h4>
                <ul className='flex flex-col justify-between items-center my-2'>
                    {paymentDetails.map(detail => 
                    <li key={detail.id} className='flex flex-col w-full justify-between items-center p-1 mb-2
                    rounded-md backdrop-filter backdrop-blur-2xl bg-white/70 min-[500px]:flex-row min-[500px]:p-2'>
                        <span className='font-bold text-[13px] text-slate800'>{detail.title}</span>
                        <span className='break-all font-regular text-[13px] text-slate800
                         ltr mt-1 min-[500px]:my-0'>{detail.data}</span>
                    </li>)}
                </ul>
            </section>
            <section className='w-full'>
                <h4 className='font-demibold text-indigo200 text-[12px] mt-2'>
                    <ShoppingBasketIcon fontSize='small' sx={{mr: .5}}/>
                    بابت خرید: 
                </h4>
                <ul className='mb-2'></ul>
            </section>
            <section className='w-full flex flex-col justify-between items-center min-[428px]:flex-row'>
                <h4 className='font-demibold text-indigo200 text-[12px] mt-2 ml-auto'>
                    <TagIcon fontSize='small' sx={{mr: .5}}/>
                    شماره ارجاع تراکنش: 
                </h4>
                <span className='w-full text-center p-1 mt-2 font-regular text-[13px] text-slate800
                    rounded-md backdrop-filter backdrop-blur-2xl bg-white/70 min-[428px]:w-fit min-[500px]:text-sm min-[500px]:p-2'>
                        {ref_id ? ref_id : 'عملیات خرید ناموفق بوده است'}
                </span>
            </section>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
