import Image from 'next/image';

const ProfilePicture = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="rounded-full w-16 h-16 overflow-hidden relative border-2 border-custom-dark">
      <Image style={{ objectFit: 'cover' }} fill src={src} alt={alt} />
    </div>
  );
};

export default ProfilePicture;
