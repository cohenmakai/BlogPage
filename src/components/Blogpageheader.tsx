import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: { skill: string[]; href: string };
  author: { name: string; role: string; href: string; imageUrl: string };
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Improve your design skills: Develop an "eye" for design',
    href: "#",
    description:
      'Toools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design',
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { skill: ["Design", "Research", "Presentation"], href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // Add more posts as needed
];

const navigation = [
  { name: "View all", href: "#", current: true },
  { name: "Design", href: "#", current: false },
  { name: "Product", href: "#", current: false },
  { name: "Software engineering", href: "#", current: false },
  { name: "Customer success", href: "#", current: false },
];

export const Blogpageheader: React.FC = () => {
  function classNames(
    ...classes: (string | boolean | undefined | null)[]
  ): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white pt-20 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* blog-content */}
        <div className="mx-auto max-w-2xl lg:mx-0 px-6 lg:px-8">
          <p className="text-violet-400 text-sm font-semibold">Our blog</p>
          <p className="mt-6 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resources and insights
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The latest industry news, interviews, technologies and resources
          </p>
        </div>
        {/* postpart */}
        <div className="absolute top-[650px] left-[180px] z-10">
          {posts.map((post) => (
            <>
              <div className="hidden lg:flex lg:gap-x-12">
                <Disclosure as="div" className="p-6" defaultOpen={true}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-2xl font-medium  text-white group-data-[hover]:text-white/80">
                      {post.title}
                    </span>
                    {/* <ChevronDownIcon className="-m-2.5 absolute inset-y-2 right-2 flex items-center justify-center size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" /> */}
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                    <p className="text-white text-xl pb-4">
                      {post.description}
                    </p>
                    <table className="w-[92%] text-sm text-left rtl:text-right bg-glass overflow-hidden rounded-xl">
                      <thead className="text-xs uppercase bg-glass">
                        <tr>
                          <th scope="col" className="pl-6 p-4 w-60">
                            Writen by
                          </th>
                          <th scope="col" className="px-6 py-3 w-[400px]">
                            Published on
                          </th>
                          <th scope="col" className="px-6 py-3">
                            File under
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-glass">
                          <th
                            scope="row"
                            className="flex items-center px-5 py-5 whitespace-nowrap w-60"
                          >
                            <img
                              className="w-10 h-10 rounded-full"
                              src={post.author.imageUrl}
                              alt="Jese image"
                            />
                            <div className="ps-3">
                              <div className="text-base font-semibold">
                                {post.author.name}
                              </div>
                            </div>
                          </th>
                          <td className="px-5 py-4 w-[400px]">{post.date}</td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-x-4 text-xs">
                              <a
                                href={post.category.href}
                                className="relative z-10 rounded-full border-x border-y border-white bg-none divide-solid px-3 py-1.5 mr-2 font-medium text-white hover:bg-gray-100"
                              >
                                {post.category.skill[0]}
                              </a>
                              <a
                                href={post.category.href}
                                className="relative z-10 rounded-full border-x border-y border-white bg-none divide-solid px-3 py-1.5 mr-2 font-medium text-white hover:bg-gray-100"
                              >
                                {post.category.skill[1]}
                              </a>
                              <a
                                href={post.category.href}
                                className="relative z-10 rounded-full border-x border-y border-white bg-none divide-solid px-3 py-1.5 mr-2 font-medium text-white hover:bg-gray-100"
                              >
                                {post.category.skill[2]}
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </>
          ))}
        </div>
        {/* blogpicture */}
        <div className="hidden lg:flex lg:gap-x-12 z-0">
          <img
            src="./images/blog_header.jpg"
            className="ease-linear mt-20 rounded-2xl relative inline-block"
          />
        </div>

        {/* navbar */}
        <div className="hidden lg:flex lg:gap-x-12 z-0">
          <Disclosure as="nav" className="bg-none mt-20 ">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                  <div className="relative flex h-9 items-center justify-between border-gray-500 border-b">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="hidden sm:ml-0 sm:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "text-violet-600 border-violet-600 border-b-4"
                                  : "text-gray-900 hover:text-violet-600 hover:border-b-4 hover:border-violet-600",
                                "px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      {/* Profile dropdown */}
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <MenuButton className="flex w-60 justify-self-start gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Most recent
                            <ChevronDownIcon
                              className="-mr-1 h-5 w-5 text-gray-400 absolute inset-y-2 right-2 flex"
                              aria-hidden="true"
                            />
                          </MenuButton>
                        </div>

                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="py-1">
                            <MenuItem>
                              {({ focus }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    focus
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Account settings
                                </a>
                              )}
                            </MenuItem>
                            <MenuItem>
                              {({ focus }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    focus
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Support
                                </a>
                              )}
                            </MenuItem>
                            <MenuItem>
                              {({ focus }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    focus
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  License
                                </a>
                              )}
                            </MenuItem>
                            <form method="POST" action="#">
                              <MenuItem>
                                {({ focus }) => (
                                  <button
                                    type="submit"
                                    className={classNames(
                                      focus
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block w-full px-4 py-2 text-left text-sm"
                                    )}
                                  >
                                    Sign out
                                  </button>
                                )}
                              </MenuItem>
                            </form>
                          </div>
                        </MenuItems>
                      </Menu>
                    </div>
                  </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>

        {/* mobileopenstate */}
        <div className="flex lg:hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* blog_header */}
            <img
              src="./images/blog_header.jpg"
              className="ease-linear mt-20 rounded-2xl relative inline-block"
            />
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-2 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 py-1.5 font-medium text-violet-700 hover:bg-gray-100"
                    >
                      {post.category.skill[0]}
                    </a>
                  </div>
                  <Disclosure as="div" className="p-6" defaultOpen={true}>
                    <DisclosureButton className="group flex w-full items-center justify-between">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        {post.title}{" "}
                      </h3>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <img
                          src={post.author.imageUrl}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.date}</p>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </article>
              ))}
            </div>

            {/* navbar */}
            <Disclosure as="nav" className="bg-none mt-20 ">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                    <div className="relative flex h-9 items-center justify-between border-gray-500 border-b">
                      <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </DisclosureButton>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden lg:ml-0 lg:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "text-violet-600 border-violet-600 border-b-4"
                                    : "text-gray-900 hover:text-violet-600 hover:border-b-4 hover:border-violet-600",
                                  "px-3 py-2 text-sm font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Menu dropdown */}
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <MenuButton className="flex w-60 justify-self-start gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              Most recent
                              <ChevronDownIcon
                                className="-mr-1 h-5 w-5 text-gray-400 absolute inset-y-2 right-2 flex"
                                aria-hidden="true"
                              />
                            </MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div className="py-1">
                              <MenuItem>
                                {({ focus }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      focus
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Account settings
                                  </a>
                                )}
                              </MenuItem>
                              <MenuItem>
                                {({ focus }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      focus
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Support
                                  </a>
                                )}
                              </MenuItem>
                              <MenuItem>
                                {({ focus }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      focus
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    License
                                  </a>
                                )}
                              </MenuItem>
                              <form method="POST" action="#">
                                <MenuItem>
                                  {({ focus }) => (
                                    <button
                                      type="submit"
                                      className={classNames(
                                        focus
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-sm"
                                      )}
                                    >
                                      Sign out
                                    </button>
                                  )}
                                </MenuItem>
                              </form>
                            </div>
                          </MenuItems>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {navigation.map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <div className="bg-none mt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"></div>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                    <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                        </time>
                        <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                        {post.category.title}
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                            </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                        </div>  
                    </div>
                    </article>
            ))}
        </div>
      </div> */}
    </div>
  );
};
