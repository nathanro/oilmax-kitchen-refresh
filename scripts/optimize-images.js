import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const optimize = async () => {
  const files = await imagemin(['public/images/*.{jpg,png}'], {
    destination: 'public/images-optimized',
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminWebp({ quality: 75 })
    ]
  });

  console.log('✅ Imágenes optimizadas:', files);
};

optimize();

