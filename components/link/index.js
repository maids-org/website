import { memo } from 'react'
import NextLink from 'next/link'
import cn from 'classnames'

import styles from './link.module.css'

const canPrefetch = href => {
  return !(!href || !href.startsWith('/'))
}

const Link = ({
  external,
  href,
  as,
  passHref,
  children,
  className,

  // Styling
  underline,
  gray,
  ...props
}) => {
  const c = cn(className, styles.reset, {
    [styles.gray]: gray,
    [styles.underline]: underline
  })

  if (external) {
    return (
      <NextLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={c}
        {...props}
      >
        {children}
      </NextLink>
    )
  }

  return (
    <>
      <NextLink
        href={href}
        as={as}
        prefetch={canPrefetch(href) ? undefined : false}
        passHref={passHref}
        className={c}
        {...props}
      >
        {children}
      </NextLink>
    </>
  )
}

Link.displayName = 'Link'
export default memo(Link)
