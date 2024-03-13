import Page from '@components/page'
import Link from '@components/link'

const Index = ({ domain }) => {
  return (
    <Page description="Hello there, we are Maids. Started as a group of developers which later became a network for communities consisting tech enthusiasts.">
      <article>
        <h1>Maids. (ex Mad Maids)</h1>

        <p>
          Started as a group of developers which later became a network for
          communities & teams consisting tech enthusiasts. We govern{' '}
          <Link underline href="/">
            many communities & teams
          </Link>{' '}
          in Uzbek IT segment.
        </p>

        <p>
          Working with{' '}
          <Link underline href="https://udc.org.uz" external>
            ᚯ Uzbek Developers Consortium
          </Link>{' '}
          to standardize uzbek IT communities and bring best community
          experience.
        </p>
      </article>
    </Page>
  )
}

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      domain: req.headers.host,
    },
  }
}

export default Index
