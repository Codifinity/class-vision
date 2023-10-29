import Image from 'next/image';

const ProfilePicture = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="rounded-full w-10 h-10 lg:w-16 lg:h-16 overflow-hidden relative border-2 border-custom-dark">
      <Image
        quality={100}
        style={{ objectFit: 'cover' }}
        fill
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ProfilePicture;
