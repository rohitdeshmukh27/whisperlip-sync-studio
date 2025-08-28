import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: {
    opacity: number;
    transform: string;
  };
  animationTo?: {
    opacity: number;
    transform: string;
  };
}

const SplitText = ({
  text,
  className,
  delay = 0,
  animationFrom = { opacity: 0, transform: "translate3d(0,50px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
}: SplitTextProps) => {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn("flex flex-wrap justify-center", className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: animationFrom,
            visible: animationTo,
          }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
