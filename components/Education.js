const Education = ({education}) => (
  <div className='mb-4'>
    <h4 className='font-bold text-2xl uppercase'>{education.name}</h4>
    <p className='text-sm italic'>
      {education.studyTime}
    </p>
  </div>
)

export default Education
