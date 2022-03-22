/* eslint-disable-next-line */
import { makeStyles } from '@griffel/react';

const useClassNames = makeStyles({
  page: {
    color: '#344658',
    paddingRight: '10rem',
  },
});

export function Components({ children }: any) {
  const classes = useClassNames();

  return (
    <div className={classes.page}>
      <h1>{children}</h1>
    </div>
  );
}

export default Components;
