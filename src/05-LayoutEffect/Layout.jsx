import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { IsLoading, Quote } from '../03-examples';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.quotable.io/quotes?page=${counter}&limit=10`
  );

  // if (isLoading) {
  //   return (
  //       <h3>Loading...</h3>
  //   )
  // }

  return (
    <>
      <h1>Quotes</h1>
      <hr />
      {isLoading ? (
        <IsLoading />
      ) : (
        !!data &&
        data.map(({ _id, author, content }) => (
          <Quote id={_id} author={author} content={content} key={_id} />
        ))
      )}
      <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>
        Next Quote
      </button>
    </>
  );
};
