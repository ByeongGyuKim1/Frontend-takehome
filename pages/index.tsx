import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import TrelloList from '../components/TrelloList';

const Home: NextPage = (props: any) => {
  return (
    <div className='bg-slate-300 h-screen w-auto'>
      <Layout>
        {props.children}
      </Layout>
    </div>
    
  )
}

export default Home;
