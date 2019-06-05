import * as React from 'react'
import Link from 'next/link'

const Container: React.FC<{}> = props => {
  return (
    <>
      <ul>
        <Link href="/">
          <a>Index</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ul>
      {props.children}
    </>
  )
}

export default Container
