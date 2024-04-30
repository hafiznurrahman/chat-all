import Avatar from "./Avatar.jsx";
import { Link } from "react-router-dom";

export default function UserProfileInformation({ image, alt, name }) {
  return (
    <section className="w-full h-auto flex items-center gap-3 bg-dark2 border-b border-dark1 p-2">
      <Link to="../" className="font-bold text-xs">
        Back
      </Link>
      <div className="w-10 h-10">
        <Avatar image={image} alt={alt} />
      </div>
      <Link to="/" className="w-1/3 truncate">
        {name || "Name"}
      </Link>
    </section>
  );
}
