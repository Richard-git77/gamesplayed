import {Routes,Route,Navigate} from 'react-router-dom';
import {App,Chest,Search,GamePage} from '../pages';

import {NavBar} from '../components';

export const AppRouter = () => {
  return (

        
        <>

        <NavBar />



        <Routes>

            < Route path="app" element={<App/>} />
            < Route path="chest" element={<Chest/>} />
            < Route path="search" element={<Search/>} />
            < Route path="gamePage/:id" element={<GamePage/>} />
            <Route path="/" element={<Navigate to="/app"/>} />

        </Routes>
        </>
  )
}


