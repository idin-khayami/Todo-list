import Page from 'components/Page'
import WrongPage from 'components/WrongPage'

const NotFound = () => {
  return (
    <Page>
      <WrongPage description="Sorry, the page you are looking for does not exist." />
    </Page>
  )
}

export default NotFound
