import Page from '@components/page'
import Entry from '@components/entry'

import { join } from 'path'
import { promises } from 'fs'

const Keyboards = ({ data: items }) => {
  return (
    <Page
      title="Keyboards"
      description="Collection of beautiful 60%, 65%, and TKL keyboards."
    >
      <article>
        {items.map(entry => {
          return (
            <Entry
              key={`${entry.title}-${entry.url}`}
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
  const file = await promises.readFile(join('./data', 'keyboards.json'), {
    encoding: 'utf8'
  })
  const parsed = JSON.parse(file)

  return {
    props: { data: parsed.data }
  }
}

export default Keyboards
