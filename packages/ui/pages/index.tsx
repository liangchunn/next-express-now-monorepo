import * as React from 'react'
import { NextContext } from 'next'
import fetch from 'isomorphic-unfetch'
import resolveUrl from '../util/resolveUrl'
import Container from '../components/Container'

type IndexViewAysncProps = {
  date: string
}

class IndexView extends React.Component<IndexViewAysncProps> {
  static async getInitialProps(
    context: NextContext
  ): Promise<IndexViewAysncProps> {
    const url = resolveUrl(context, '/api/date')
    const response = await fetch(url)
    const date: string = await response.text()
    return {
      date,
    }
  }

  render() {
    return (
      <Container>
        <h1>Hello from Next.js</h1>
        <h2>The time from Express.js is {this.props.date}</h2>
      </Container>
    )
  }
}

export default IndexView
