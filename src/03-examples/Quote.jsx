import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ id, content, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" data-testid={id} style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-2">
          {content}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize, null, 2)}</code>
    </>
  );
};
