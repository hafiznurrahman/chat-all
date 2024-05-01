import { SiMaildotru } from "react-icons/si";
import UserChatBox from "../components/UserChatBox.jsx";
import { IoSearch } from "react-icons/io5";

export default function SearchPage() {
  return (
    <div className="w-full h-full p-3 pt-32">
      <section className="w-full h-auto backdrop-blur-md fixed top-0 left-0">
        <h1 className="flex items-center gap-2 text-3xl font-bold capitalize m-4">
          <IoSearch />
          Search
        </h1>
        <div className="p-2">
          <div className="w-full h-auto relative rounded-lg overflow-hidden">
            <input
              className="w-full text-dark2 bg-light outline-none p-2 pl-10"
              placeholder="username"
            />
            <SiMaildotru className="w-6 h-6 aspect-square bg-dark2 p-1 absolute top-1/2 left-2 -translate-y-1/2 rounded-md" />
          </div>
        </div>
      </section>
      <section className="pb-20">
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
        <UserChatBox image="" alt="" name="username" />
      </section>
    </div>
  );
}
