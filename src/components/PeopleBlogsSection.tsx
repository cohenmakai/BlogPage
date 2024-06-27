import React from "react";

interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  category: { skill: string; href: string };
  avatar: string;
  author: { name: string; href: string; imageUrl: string };
}
const posts1: Post[] = [
  {
    id: 1,
    title: "UX review presentations",
    href: "#",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your message?",
    date: "Mar 16, 2024",
    category: { skill: "Design", href: "#" },
    avatar: "./person_images/Olyvia .jpg",
    author: {
      name: "Olyvia Foster",
      href: "#",
      imageUrl: "./project_images/UI-UX figma design.jpg",
    },
  },
  {
    id: 2,
    title: "Migrating to linear 101",
    href: "#",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here is how to get started.",
    date: "Mar 12, 2024",
    category: { skill: "Product", href: "#" },
    avatar: "./person_images/Phoenix.jpg",
    author: {
      name: "Phoenix Baker",
      href: "#",
      imageUrl: "./project_images/Ecommerce.jpg",
    },
  },
  {
    id: 3,
    title: "Building API stacks",
    href: "#",
    description:
      "The rise of ReactJs has been met by a rise in tools for creating, testing, and managing them",
    date: "Feb 26, 2024",
    category: { skill: "Software engineering", href: "#" },
    avatar: "./person_images/Lana.jpg",
    author: {
      name: "Lana Steiner",
      href: "#",
      imageUrl: "./project_images/ReactJs.jpg",
    },
  },

  // Add more posts as needed
];

const posts2: Post[] = [
  {
    id: 4,
    title: "Bill wash leadership lessons",
    href: "#",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
    date: "Feb 12, 2024",
    category: { skill: "Leadership", href: "#" },
    avatar: "./person_images/Alec.jpg",
    author: {
      name: "Alec Whitten",
      href: "#",
      imageUrl: "./project_images/project_8.jpg",
    },
  },
  {
    id: 5,
    title: "AI generative models",
    href: "#",
    description:
      "AI models are simple expressions of complex natural language processing",
    date: "Feb 5, 2024",
    category: { skill: "Product", href: "#" },
    avatar: "./person_images/Demi.jpg",
    author: {
      name: "Demi Wllkinson",
      href: "#",
      imageUrl: "./project_images/ai_image_5.jpg",
    },
  },
  {
    id: 6,
    title: "What is Laravel",
    href: "#",
    description: "Introduction to Laravel and Principles",
    date: "Jan 29, 2024",
    category: { skill: "Design", href: "#" },
    avatar: "./person_images/Candic.png",
    author: {
      name: "Candice Wu",
      href: "#",
      imageUrl: "./project_images/Laravel_2.jpg",
    },
  },
];

const posts3: Post[] = [
  {
    id: 7,
    title: "How collaboration makes us better designers",
    href: "#",
    description:
      "Collaboration can make our teams stronger and our individual designs better",
    date: "Jan 21, 2024",
    category: { skill: "Design", href: "#" },
    avatar: "./person_images/Natali.png",
    author: {
      name: "Natali Craig",
      href: "#",
      imageUrl: "./project_images/photo_editing_2.jpg",
    },
  },
  {
    id: 8,
    title: "Our top 10 javascript frameworks to use",
    href: "#",
    description:
      "Javascript frameworks make development easy with extensive features and funtionalities",
    date: "Jan 18, 2024",
    category: { skill: "Design", href: "#" },
    avatar: "./person_images/Drew.png",
    author: {
      name: "Drew Cano",
      href: "#",
      imageUrl: "./project_images/basic UI-UX.jpg",
    },
  },
  {
    id: 9,
    title: "Business support",
    href: "#",
    description:
      "Starting a company does not need to be complicated, but how do you get started",
    date: "Jan 8, 2024",
    category: { skill: "Customer support", href: "#" },
    avatar: "./person_images/Orlando.jpg",
    author: {
      name: "Orlando Diggs",
      href: "#",
      imageUrl: "./project_images/business_card_1.jpg",
    },
  },
];

const PopularBlogsSection: React.FC = () => {
  return (
    <section className="py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {posts1.map((post) => (
            <>
              <div className=" group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                <div className="flex items-center mb-6">
                  <img
                    src={post.author.imageUrl}
                    className="rounded-lg w-full h-[250px]"
                  />
                </div>
                <div
                  // href={post.category.href}
                  className="z-10 mb-4 text-sm text-violet-600 hover:bg-gray-100"
                >
                  {post.category.skill}
                </div>
                <span className="text-2xl font-medium  text-black group-data-[hover]:text-white/80">
                  {post.title}
                </span>
                <div className="block mt-3">
                  <h4 className="text-gray-900 text-xs leading-2 mb-9">
                    {post.description}
                  </h4>
                  <div className="flex items-center justify-between font-medium">
                    <img src={post.avatar} className=" rounded-full w-8 h-8" />
                    <h6 className="text-sm text-gray-500">
                      {post.author.name}
                    </h6>
                    <span className="text-sm text-indigo-600">{post.date}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {posts2.map((post) => (
            <>
              <div className=" group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                <div className="flex items-center mb-6">
                  <img
                    src={post.author.imageUrl}
                    className="rounded-lg w-full h-[250px]"
                  />
                </div>
                <div
                  // href={post.category.href}
                  className="z-10 mb-4 text-sm text-violet-600 hover:bg-gray-100"
                >
                  {post.category.skill}
                </div>
                <span className="text-2xl font-medium  text-black group-data-[hover]:text-white/80">
                  {post.title}
                </span>
                <div className="block mt-3">
                  <h4 className="text-gray-900 text-xs leading-2 mb-9">
                    {post.description}
                  </h4>
                  <div className="flex items-center justify-between font-medium">
                    <img src={post.avatar} className=" rounded-full w-8 h-8" />
                    <h6 className="text-sm text-gray-500">
                      {post.author.name}
                    </h6>
                    <span className="text-sm text-indigo-600">{post.date}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {posts3.map((post) => (
            <>
              <div className=" group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                <div className="flex items-center mb-6">
                  <img
                    src={post.author.imageUrl}
                    className="rounded-lg w-full h-[250px]"
                  />
                </div>
                <div
                  // href={post.category.href}
                  className="z-10 mb-4 text-sm text-violet-600 hover:bg-gray-100"
                >
                  {post.category.skill}
                </div>
                <span className="text-2xl font-medium  text-black group-data-[hover]:text-white/80">
                  {post.title}
                </span>
                <div className="block mt-3">
                  <h4 className="text-gray-900 text-xs leading-2 mb-9">
                    {post.description}
                  </h4>
                  <div className="flex items-center justify-between font-medium">
                    <img src={post.avatar} className=" rounded-full w-8 h-8" />
                    <h6 className="text-sm text-gray-500">
                      {post.author.name}
                    </h6>
                    <span className="text-sm text-indigo-600">{post.date}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <a
          href="javascript:;"
          className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default PopularBlogsSection;
