
import React,{Suspense} from 'react';
import Layout from './layout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageLoader from './components/common/PageLoader/PageLoader';
const Home = React.lazy(() => import('./pages/Home/Home'));

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Suspense fallback={<PageLoader/>}><Home/></Suspense> 
        },
        {
          path:'about-us',
          element:(<h4>About us page</h4>)
        }
      ]
    },
    {
    path:'/login',
    element:(<h4>login page</h4>)
    }



  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
