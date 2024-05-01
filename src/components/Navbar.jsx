import { NavLink } from "react-router-dom";
import {
  IoChatbubbleSharp,
  IoChatbubblesSharp,
  IoSearch,
  IoSettingsSharp
} from "react-icons/io5";

export default function Navbar({ searchBtn }) {
  return (
    <nav
      className="w-screen h-auto bg-dark3 border-t border-t-dark1 fixed bottom-0 left-0"
      translate="no"
    >
      <ul className="w-full h-16 flex items-center justify-evenly gap-2 p-2">
        <NavlinkElement href="/" title="chat">
          <IoChatbubbleSharp size={30} />
        </NavlinkElement>

        <NavlinkElement href="/group" title="group">
          <IoChatbubblesSharp size={30} />
        </NavlinkElement>

        <NavlinkElement href="/search" title="search">
          <IoSearch size={30} />
        </NavlinkElement>

        <NavlinkElement href="/settings" title="settings">
          <IoSettingsSharp size={30} />
        </NavlinkElement>
      </ul>
    </nav>
  );
}

export const NavlinkElement = props => {
  return (
    <li className="w-fit h-full">
      <NavLink
        to={props.href}
        className="flex flex-col items-center justify-evenly gap-0.5 w-auto h-full rounded-lg px-2 py-1"
      >
        {props.children}
        <span className="capitalize text-xs font-bold">{props.title}</span>
      </NavLink>
    </li>
  );
};
