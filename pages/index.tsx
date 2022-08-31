import type { NextPage } from 'next';
import { TrelloPage } from '../components/TrelloPage';
import TrelloList from '../components/TrelloList';

const Home: NextPage = (props: any) => {
  const generateId = (arr: any) => {
    return arr.length ? Math.max(...arr.map((user: any) => user.id)) + 1 : 1;
  }

  return (
    <div className='bg-slate-300 h-screen w-auto'>
      <TrelloPage generateId={generateId} />
    </div>
    
  )
}

export default Home;
