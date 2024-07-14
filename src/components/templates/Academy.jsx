import Card from '../modules/academy/Card';

const Academy = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <Card key={course._id} course={course}/>
      ))}
    </div>
  );
};

export default Academy;
