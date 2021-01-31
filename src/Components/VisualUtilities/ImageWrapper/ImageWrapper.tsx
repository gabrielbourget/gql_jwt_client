import React from 'react';

interface ImageWrapperProps {
  alt: string;
  src: string;
  height: string | number;
  width: string | number;
}

const ImageWrapper: React.FC<ImageWrapperProps> = (props: any) => {
  const { alt, src, height, width } = props;

  return (
    <img
      src={src}
      alt={alt}
      style={{
        height, width,
        objectFit: 'cover'
      }}
    />
  );
}

export default ImageWrapper;
