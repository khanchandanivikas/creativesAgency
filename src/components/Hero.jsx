import { motion } from "framer-motion";
import arrow from "../images/icon-arrow-down.svg";
import "../style/hero.css";

const Hero = () => {
    const animationText = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: 0.22,
            },
        },
    };

    const animationArrow = {
        hidden: { translateY: -200 },
        visible: {
            translateY: 0,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <section className="hero_container">
            <motion.h1
                className="hero_text"
                variants={animationText}
                initial="hidden"
                animate="visible"
            >
                WE ARE CREATIVES
            </motion.h1>
            <motion.div
                variants={animationArrow}
                initial="hidden"
                animate="visible"
            >
                <img src={arrow} alt="arrow" className="arrow" />
            </motion.div>
        </section>
    )
}

export default Hero