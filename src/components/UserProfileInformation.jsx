import Avatar from "./Avatar.jsx";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function UserProfileInformation({ image, alt, name }) {
  const defaultName = name || "username";
  const nameClean = defaultName.toLowerCase().replace(/\s/g, "");
  return (
    <section className="w-full h-auto flex items-center gap-3 bg-dark2 border-b border-dark1 fixed top-0 left-0 p-2 z-[700]">
      <Link to="../">
        <IoMdArrowRoundBack size={20} />
      </Link>
      <div className="w-11 h-11">
        <Avatar image={image} alt={alt} />
      </div>
      <Link to={`/profile/${nameClean}`} className="w-1/3 truncate">
        {defaultName}
      </Link>
    </section>
  );
}
