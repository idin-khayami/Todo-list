export default function classNames(...rest: any): string {
  const classes = []

  for (let i = 0; i < arguments.length; i += 1) {
    const arg = rest[i]
    if (!arg) {
      // eslint-disable-next-line no-continue
      continue
    }

    const argType = typeof arg
    if (argType === 'string' || argType === 'number') {
      classes.push(arg)
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classNames(...arg)
      if (inner) {
        classes.push(inner)
      }
    } else if (argType === 'object') {
      console.warn(
        `For adding class names conditionally in ${Object.keys(
          arg,
        )} please use className={cx(myBooleanCondition && myStrClassName)}`,
      )
    }
  }

  return classes.join(' ')
}
