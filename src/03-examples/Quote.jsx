
export const Quote = ({ id, content, author }) => {
  return (
    <>
      <blockquote className='blockquote text-end' data-testid={id}>
        <p className='mb-2'>{content}</p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>
    </>
  );
};
