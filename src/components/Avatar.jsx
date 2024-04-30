import defaultAvatar from "../assets/Avatars/default_avatar.webp"

export default function Avatar({ image, alt }) {
  return (
    <>
      <img
        src={image || defaultAvatar}
        alt={alt || "default avatar"}
        className="w-full h-auto aspect-square rounded-full"
      />
    </>
  );
}
