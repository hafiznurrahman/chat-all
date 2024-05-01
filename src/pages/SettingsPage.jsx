import { IoSettingsSharp } from "react-icons/io5";

export default function SettingsPage() {
  return (
    <>
      <section className="w-full h-auto backdrop-blur-md fixed top-0 left-0">
        <h1 className="flex items-center gap-2 text-3xl font-bold capitalize m-4">
          <IoSettingsSharp />
          Settings
        </h1>
      </section>
    </>
  );
}
