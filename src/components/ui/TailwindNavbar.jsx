import { supabase } from "@/lib/supabase/superbase";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Dashboard", to: "/dashboard", current: true },
  { name: "User", to: "/user", current: false },
  { name: "Table", to: "/table", current: false },
  { name: "Todo", to: "/todo", current: false },
];

export default function TailwindNavbar() {
  //NOTE Logout Section
  const navigate = useNavigate();

  async function handleSignOut() {
    const res = await supabase.auth.signOut();
    console.log("object", res);

    if (res.error) {
      console.error("Logout Error:", res.error.message);
    } else {
      navigate("/");
    }
  }

  return (
    <Disclosure as="nav" className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"
                    to={item.to}
                  >
                    {" "}
                    {item.name}
                  </Link>
                  /* <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a> */
                ))}

                {/* <Link
                  className=" text-white rounded-md px-3 py-2 text-sm font-medium"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link to="/user">User</Link>
                <Link to="/supabase-table">Table</Link>
                <Link to="/todo">Todo</Link> */}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={handleSignOut}
              className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <LogOut aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
