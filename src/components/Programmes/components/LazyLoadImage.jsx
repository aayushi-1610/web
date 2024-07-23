import React, { useRef, useEffect, useState } from 'react';

function LazyLoadImage({ id, src }) {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      id={id}
      ref={imageRef}
      className="program-related-image"
      style={{ backgroundImage: isVisible ? `url(${src})` : 'none' }}
    />
  );
}

export default LazyLoadImage;
