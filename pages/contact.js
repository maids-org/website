import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Contact" footer={false} description="Get in touch.">
      <article>
        <p>Get in touch.</p>

        <blockquote>
          <a
            href="mailto:support@maid.uz?subject=Hello there!&body=We've Been Trying To Reach You About Your Car's Extended Warranty"
            className="reset"
          >
            support@maid.uz
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
