// Layout.jsx
import NavBar from "../Navbar";
import { motion } from 'framer-motion';
import { PageTransition } from 'next-page-transitions';
import { useRouter } from 'next/router';

const Layout = ({ children, noMargin }) => {
  const router = useRouter();

  const transitionStyles = {
    enter: {
      opacity: 0,
    },
    enterActive: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageTransition
      timeout={500}
      classNames="page-transition"
      monkeyPatchScrolling
      loadingDelay={500}
      loadingTimeout={{
        enter: 500,
        exit: 0,
      }}
      loadingClassNames="loading-indicator"
    >
      <motion.div
        key={router.route}
        initial="enter"
        animate="enterActive"
        exit="exit"
        variants={transitionStyles}
      >
        <div className="dark text-foreground bg-background">
          <NavBar />
          <div className={`${noMargin ? "" : "ms:mx-3 sm:mx-3 md:mx-10 lg:mx-40 xl:mx-40"}`}>
            {children}
          </div>
        </div>
      </motion.div>
    </PageTransition>

  );
};

export default Layout;
