'use client';
import { Variants, motion } from 'framer-motion';

type TemplateProps = {
  children?: React.ReactNode;
  class_name?: string;
};

export const SectionTitleMotion: React.FC<TemplateProps> = ({
  children,
  class_name,
}) => {
  return (
    <motion.div
      className={class_name}
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
          ease: 'anticipate',
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const ArticleTitleMotion: React.FC<TemplateProps> = ({
  children,
  class_name,
}) => {
  return (
    <motion.div
      className={class_name}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.4,
          ease: 'easeOut',
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const DescriptionsMotion: React.FC<TemplateProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.7,
          ease: 'easeOut',
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const ImageMotion: React.FC<TemplateProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.1,
          ease: 'easeOut',
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const TrainingImageMotionRight: React.FC<TemplateProps> = ({
  children,
}) => {
  return (
    <motion.div
      className="cards__card__imageContainer"
      initial={{ x: 20, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.1,
          ease: 'easeOut',
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const TrainingImageMotionLeft: React.FC<TemplateProps> = ({
  children,
}) => {
  return (
    <motion.div
      className="cards__card__imageContainer"
      initial={{ x: -20, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.1,
          ease: 'easeOut',
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3 + 0.06 * i,
      delay: 0.3,
    },
  }),
};

const child: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export const ListMotion: React.FC<TemplateProps> = ({ children }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const ItemMotion: React.FC<TemplateProps> = ({ children }) => {
  return (
    <motion.div variants={child} viewport={{ once: true }}>
      {children}
    </motion.div>
  );
};

export const LinkMotion: React.FC<TemplateProps> = ({ children }) => {
  return (
    <motion.div
      variants={child}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
