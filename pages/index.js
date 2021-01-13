import Head from 'next/head'

import Title from '../components/Title'
import Section from '../components/Section'
import Skill from '../components/Skill'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import me from '../me'

export default function Home() {
  return (
    <main className='w-4/5 mx-auto py-8 antialiased font-sans'>
      <Head>
        <title>Yi Lu's Resume</title>
      </Head>

      <Section>
        <h1 className='text-2xl font-bold'>{me.name}</h1>
      </Section>

      <Section>
        <div className='text-sm italic leading-relaxed'>
          <p>{me.jobTitle} | {me.address}</p>

          <p>
            <a href={`//${me.githubUrl}`} className='underline inline-block'>{me.githubUrl}</a>
          </p>

          <p>
            <a href={`mailto:${me.email}`} className='underline inline-block'>{me.email}</a>
          </p>

          <p>
            <a href={`tel:${me.phone}`} className='underline inline-block'>{me.phone}</a>
          </p>

        </div>
      </Section>

      <Section>
        <p>
          {me.introduce}
        </p>
      </Section>

      <Section>
        <Title>Skills</Title>
        <div>
          {me.skills.map((skill, idx) => (
            <Skill key={`skills_${idx}`}>{skill}</Skill>
          ))}
        </div>
      </Section>

      <Section>
        <Title>WORK EXPERIENCE</Title>

        {me.companies.map((company, idx) => (
          <WorkExperience key={`companies_${idx}`} company={company}/>
        ))}
      </Section>

      <Section>
        <Title>Education</Title>

        {me.educations.map((education, idx) => (
          <Education key={`educations_${idx}`} education={education}/>
        ))}
      </Section>
    </main>
  )
}
