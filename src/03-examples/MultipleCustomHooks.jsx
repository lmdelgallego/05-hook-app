import React from 'react'
import useFetch from '../hooks/useFetch'
import {useCounter} from '../hooks/useCounter'

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://api.quotable.io/quotes?page=${counter}&limit=10`);

  // if (isLoading) {
  //   return (
  //       <h3>Loading...</h3>
  //   )
  // }

  return (
    <>
      <h1>Quotes</h1>
      <hr />
      {
        isLoading
          ? (
               <div className='alert alert-info text-center'>
                Loading...
              </div>
          )
          :
            !!data && data.map( ({ _id, author, content }) => (
              <blockquote className='blockquote text-end' key={_id} data-testid={_id}>
                <p className='mb-2'>{content}</p>
                <footer className='blockquote-footer'>{author}</footer>
              </blockquote>
            ))

      }
      <button className='btn btn-primary' disabled={isLoading} onClick={ () => increment() }>Next Quote</button>


    </>
  )
}
