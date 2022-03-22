import Link from "next/link";
import { makeStyles } from "@griffel/react";

const useClassNames = makeStyles({
  page: {
    color: "salmon"
  }
});

export default function IndexPage() {
  const classes = useClassNames();

  return (
    <div className={classes.page}>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
