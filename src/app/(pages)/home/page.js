"use client";
import { motion } from "framer-motion";

import MovieBanner from "@/app/components/MovieBanner";
import MoviePremiere from "@/app/components/MoviePremiere";
import MovieTabsShow from "@/app/components/MovieTabsShow";

export default function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
            <MovieBanner />
            <MovieTabsShow />
            <MoviePremiere />
        </motion.div>
    );
}