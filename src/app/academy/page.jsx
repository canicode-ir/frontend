import Academy from '../../components/templates/academy';

async function getData() {
  const res = await fetch('https://cnc.liara.run/course?page=1&limit=20', {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


async function page() {
  const apiData = await getData();
  const courses = apiData.result;
  return (
    <div className='px-2'>
        <Academy courses={courses}/>
    </div>
  )
}

export default page