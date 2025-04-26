import React from "react";
import { useLoaderData } from "react-router";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { motion } from "framer-motion";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="my-24 text-[#0f0f0f]">
      <h1 className="w-fit mx-auto text-3xl md:text-5xl font-bold mb-6 -mt-8 md:-mt-6">Bolgs</h1>
      <p className="w-fit m-auto text-sm  md:w-8/12 mx-auto text-center mb-6 sm:text-base md:text-lg font-bold opacity-60">
        Let's explore some bacic concept that will make a good developer
          </p>
          <div className="grid gap-4">
              {
                  blogs.map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
              }
          </div>
    </motion.div>
  );
};

export default Blog;
