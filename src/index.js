import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Layout } from './component/Layout/Layout';
import Owerviev from './pages/owerview/Owerviev';
import Tickets from './pages/tickets/Tickets';
import Ideas from './pages/pages2/Ideas';
import Agents from './pages/pages2/Agents';
import Articles from './pages/pages2/Articles';
import Contacts from './pages/pages2/Contacts';
import Settings from './pages/pages2/Settings';
import Subscription from './pages/pages2/Subscription';
import Users from './pages/Post/Posts';
import Posts from './pages/Post/Posts';
import PostSingle from './pages/pages2/PostSingle/PostSingle';
import Comment from './pages/pages2/Comment/Comment';


const routes =  createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        index: true,
        element:<Owerviev/>
      },
      {
        path:'/tickets',
        element:<Tickets/>
      },
      {
        path:'/posts',
        element:<Posts/>
      },
      {
        path:'posts/:postId',
        element:<PostSingle/>

      },
      {
        path:'/agents',
        element:<Agents/>
      },
      {
        path:'/articles',
        element:<Articles/>
      },
      {
        path:'/contact',
        element:<Contacts/>
      },
      {
        path:'/setting',
        element:<Settings/>
      },
      {
        path:'/subscription',
        element:<Subscription/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)
reportWebVitals();
