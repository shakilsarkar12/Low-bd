import React from 'react';
import Hero from '../../Components/Hero/Hero';
import BestLawers from '../../Components/bestLawers/BestLawers';
import { useLoaderData } from 'react-router';
import LowServices from '../../Components/LowServices/LowServices';
import { motion } from "framer-motion";

const Home = () => {
    const lawers = useLoaderData();
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <Hero></Hero>
        <BestLawers lawers={lawers}></BestLawers>
        <LowServices></LowServices>
      </motion.div>
    );
};

export default Home;