import css from './job.module.css';
import { GithubJob } from '../../lib/api';
import { fromToday } from '../../lib/date';
import { JobToApply } from './job-to-apply';
import { JobHeader } from './job-header';



export const JobDescription = ({
  title,
  description,
  location,
  type,
  company,
  company_logo,
  how_to_apply,
  created_at,
}) => {
  return (
    <div className={css['job-description']}>
      <JobToApply html={how_to_apply} />
      <div>
        <JobHeader
          title={title}
          location={location}
          type={type}
          company={company}
          logo={company_logo}
          daysAgo={fromToday(created_at)}
        />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};