import Page from '@components/page'
import Entry from '@components/entry'

// Data
import { join } from 'path'
import { promises } from 'fs'

const Music = ({ data: items }) => {
  return (
    <Page title="Music" description="Collection of exemplary electronic music.">
      <article>
        {items.map(entry => {
          return (
            <Entry
              key={entry.title}
              title={entry.title}
              image={entry.image}
              href={entry.url}
              description={entry.description}
            />
          )
        })}
      </article>
    </Page>
  )
}

export const getStaticProps = async () => {
  const file = await promises.readFile(join('./data', 'music.json'), {
    encoding: 'utf8'
  })
  const parsed = JSON.parse(file)

  return {
    props: { data: parsed.data }
  }
}

export default Music
