import OrganizationsList from '../components/organizationsList';
import LiveComponent from '../hocs/liveComponent'
import {OrganizationListQuery as query, OrganizationListSubscription as subscription} from '../graphql/organizations.gql'
import { withI18next } from '../hocs/withI18next'
import Layout from '../layouts/index'

const Page = () =>
  <Layout>
    <LiveComponent
      query={query}
      subscription={subscription}
      >
      {OrganizationsList}
    </LiveComponent>
  </Layout>

Page.getInitialProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return {}
}
  
export default withI18next(['common'])(Page);
