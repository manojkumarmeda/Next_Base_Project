import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/images/image1.png', // Image paths relative to the public folder
  '/images/image2.png',
  '/images/image3.png',
];

const CustomImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className='bg-zinc-50 relative w-full max-w-[800px] mx-auto border-gray-500'>
      <Image
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        width={800}
        height={400}
      />
      <Grid container className='absolute top-1/2 w-full justify-between'>
        <Button
          onClick={prevImage}
          className='bg-black bg-opacity-50 text-white'
        >
          Prev
        </Button>
        <Button
          onClick={nextImage}
          className='bg-black bg-opacity-50 text-white'
        >
          Next
        </Button>
      </Grid>
    </Box>
  );
};

export default CustomImageSlider;
