import React, { Component, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Featured from './pages/Featured';

// Lazy load Hero
const Hero = lazy(() => import('./pages/Hero'));

export class App extends Component {
  render() {
    return (
      <>
        <div>
          <Header />

          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
                <div className="flex space-x-2">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-4 h-2 bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a]"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            }
          >
            <Hero />
          </Suspense>
          <Featured/>
        </div>
      </>
    );
  }
}

export default App;