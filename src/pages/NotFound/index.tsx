import ErrorPage from 'components/Error'
import Page from 'components/Page'

const NotFound = () => {
  return (
    <Page>
      <ErrorPage description="Sorry, the page you are looking for does not exist." />
    </Page>
  )
}

export default NotFound
