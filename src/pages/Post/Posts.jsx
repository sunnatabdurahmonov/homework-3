import React from 'react'
import '../Post/Posts.scss'
import { UsersCard } from './UsersCard'
import { useContext } from 'react'
import { useEffect } from 'react'
import { HeaderContext } from '../../context/Context'
import { languageData } from '../../Lang/Language'
import { useFetch } from '../../hooks/useFetchData'


 const Posts = () => {
    const {lang} = useContext(HeaderContext)
    const {setHeaderTitle} = useContext(HeaderContext)
    const {data:post} = useFetch({endpoint: 'posts'})

    useEffect(() => {
        setHeaderTitle(languageData[lang].sidebar.posts)
    })

  return (
    <div>
    <h2 className='h1'>{languageData[lang].sidebar.posts}</h2>
 
    <div className='user-menu'>
      {
       (post.isFetched && post.data.length) ?  (
        post.data.map((info) => (
            <UsersCard
            title={info.title}
            body={info.body}
            key={info.id}
            id={info.id}
            />
        ))
       ):<div className='loader'></div>
      }
    </div>
        </div>
  )
}

export default Posts
