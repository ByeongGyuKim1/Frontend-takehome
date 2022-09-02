import type { NextPage } from 'next';
import { TrelloPage } from '../components/TrelloPage';
import TrelloList from '../components/TrelloList';
import { FC, useState } from "react";


const Home: NextPage = (props: any) => {
  return (
    <>
      <div className='bg-slate-300 h-screen w-auto'>
        <TrelloPage />
      </div>
    </>
    
    
  )
}

export default Home;
