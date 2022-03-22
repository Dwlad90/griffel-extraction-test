import { Components } from '@griffel/components';
import { makeStyles } from '@griffel/react';

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
  console.error('!!!!!useClassNames1');
  const classes = useClassNames();
  console.error('!!!!!useClassNames2');

  return (
    <div className={classes.page}>
      <Components>Hello World</Components>
    </div>
  );
}
