import ReactMarkdown from 'react-markdown'
import cn from 'classnames'

import styles from './WorkExperience.module.css'

const WorkExperience = ({company}) => {
  return (
    <div className='mb-4'>
      <h4 className='font-bold text-2xl uppercase'>
        <a href={company.website || '#'}>
          {company.name}
        </a>
      </h4>

      <div className='text-sm italic'>
        {company.jobTitle} | {company.joinTime}
      </div>

      <ReactMarkdown
        className={cn(styles.markdown, 'mt-4')}
        children={company.experience}
      />
    </div>
  )
}

export default WorkExperience
