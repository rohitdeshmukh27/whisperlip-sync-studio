import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string; // classes for the wrapper h1
  wordClassName?: string; // classes applied to each animated word (use for gradients)
  /** Tailwind (or arbitrary) class applied to each word for spacing. Defaults to mr-2 */
  spacingClassName?: string;
  /** Per-word additional delay (seconds) */
  wordDelay?: number;
  /** Base delay before first word starts (seconds) */
  baseDelay?: number;
  /** Optional override for variants applied to each word */
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
}

const BlurText = ({
  text,
  className,
  wordClassName,
  spacingClassName = "mr-2",
  wordDelay = 0.2,
  baseDelay = 0.3,
  variant,
}: BlurTextProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(12px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  const words = text.split(/\s+/);

  return (
    <h1 className={cn("leading-tight", className)}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            // Each word animates individually
            initial="hidden"
            animate="visible"
            variants={combinedVariants}
            transition={{
              duration: 0.8,
              delay: baseDelay + i * wordDelay,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className={cn(
              "inline-block will-change-transform will-change-filter",
              !isLast && spacingClassName,
              wordClassName
            )}
          >
            {word}
          </motion.span>
        );
      })}
    </h1>
  );
};

export default BlurText;
