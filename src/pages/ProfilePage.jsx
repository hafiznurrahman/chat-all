import { HiUserCircle } from "react-icons/hi2";
import Avatar from "../components/Avatar.jsx";

export default function SettingsPage() {
  return (
    <>
      <section className="w-full h-auto backdrop-blur-md fixed top-0 left-0">
        <h1 className="flex items-center gap-2 text-3xl font-bold capitalize m-4">
          <HiUserCircle />
          Profile
        </h1>
      </section>
      <div className="w-1/3 h-auto aspect-square mt-24 mx-auto mb-5">
        <Avatar />
      </div>
      <div className="divide-y divide-dark1 p-3">
        <div className="leading-4 p-2">
          <small className="text-blue2 font-bold">Name</small>
          <p className="pl-2">Your Name</p>
        </div>
        <div className="leading-4 p-2">
          <small className="text-blue2 font-bold">Username</small>
          <p className="pl-2">username</p>
        </div>
        <div className="leading-4 p-2">
          <small className="text-blue2 font-bold">Bio</small>
          <p className="pl-2">aliquip est tempor qui eu id ex ullamco aliqua Lorem</p>
        </div>
      </div>
    </>
  );
}
