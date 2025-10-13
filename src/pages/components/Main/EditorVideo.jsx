import React, { useRef, useEffect } from 'react';

const VideoAuto = ({ src, width = "100%" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    const cargarVideo = async () => {
      try {
        video.load(); // Fuerza la carga
        await video.play();
        console.log('✅ Video reproduciéndose');
      } catch (error) {
        console.log('❌ Error:', error);
      }
    };

    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(cargarVideo, 100);
  }, [src]);

  return (
    <video 
      ref={videoRef}
      autoPlay 
      muted 
      loop
      playsInline
      style={{ 
        width, 
        display: 'block',
        backgroundColor: '#000' // Fondo negro para ver el contenedor
      }}
    >
      <source src={src} type="video/mp4" />
      Tu navegador no soporta videos.
    </video>
  );
};

export default VideoAuto;