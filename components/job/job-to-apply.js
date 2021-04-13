import Link from 'next/link';

import css from './job.module.css';
import { ArrowIcon } from '../common/icons';

export const JobToApply= ({ html }) => (
  <div className={css.apply}>
    <Link href="/">
      <a>
        <ArrowIcon /> Back to search
      </a>
    </Link>
    <h3 className={css['apply-header']}>how to apply</h3>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);