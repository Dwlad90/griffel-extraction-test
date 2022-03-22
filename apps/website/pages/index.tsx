import { Components } from '@griffel/components';
import { makeStyles } from '@griffel/react';
import Link from 'next/link';

const useClassNames = makeStyles({
  page: {
    color: '#645349',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    paddingTop: '10rem',
    paddingBottom: '10rem',
  },
});

export default function ContactUsPage() {
  const classes = useClassNames();

  return (
    <div className={classes.page}>
      <Components>Hello World</Components>
      <Link href='test'><a>Test</a></Link>
    </div>
  );
}
