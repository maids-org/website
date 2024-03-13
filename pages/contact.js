import Page from '@components/page'

const mail = {
  subject: "Hello Mad Maids!",
  body: "I'd like to talk with you about ..."
}

const Contact = () => {
  return (
    <Page title="Contact" footer={false} description="Get in touch.">
      <article>
        <p>Get in touch...</p>

        <blockquote>
          <a
            href={`mailto:support@maid.uz?subject=${mail.subject}&body=${mail.body}`}
            className="reset"
          >
            support@maid.uz
          </a>
        </blockquote>

        <p>...or join us on telegram...</p>

        <blockquote>
          <a href="https://t.me/s/madmaids" className="reset">
            @madmaids
          </a>
        </blockquote>

        <p>...emmm, maybe twitter?</p>

        <blockquote>
          <a href="https://twitter.com/maids_org" className="reset">
            @maids_org
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
