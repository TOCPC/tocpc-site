import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
}

export const Loading = () => {
  const initState = true
  const refreshTime = 1
  const [state, setState] = useState(initState)
  useEffect(() => {
    const id = setInterval(() => {
      setState((s) => !s)
    }, 1300)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black flex-col">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-80 stroke-current text-white -my-16"
        viewBox="0 0 174 146"
      >
        <motion.path
          d="M98.7119 53.5754L105.489 60.3522L78.9568 86.884C76.8925 83.5919 75.5731 81.9493 73.0303 79.2571L98.7119 53.5754Z"
          variants={icon}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M95.2915 40.6504C95.3119 45.6823 96.3232 50.661 98.2676 55.302C100.212 59.9431 103.052 64.1558 106.624 67.6994C110.197 71.2431 114.432 74.0485 119.089 75.9552C123.746 77.862 128.732 78.833 133.764 78.8126L133.724 68.9791C129.984 68.9942 126.277 68.2725 122.815 66.855C119.354 65.4376 116.205 63.3522 113.549 60.7179C110.894 58.0837 108.783 54.9522 107.337 51.5021C105.892 48.0521 105.14 44.3512 105.125 40.6106L95.2915 40.6504Z"
          variants={icon}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M79.3736 40.6504C79.3532 45.6823 78.3419 50.661 76.3974 55.302C74.4529 59.9431 71.6134 64.1558 68.0409 67.6994C64.4684 71.2431 60.2328 74.0485 55.5762 75.9552C50.9195 77.862 45.9328 78.833 40.9009 78.8126L40.9408 68.9791C44.6813 68.9942 48.3882 68.2725 51.8499 66.855C55.3115 65.4376 58.46 63.3522 61.1157 60.7179C63.7714 58.0837 65.8822 54.9521 67.3277 51.5021C68.7732 48.0521 69.5249 44.3511 69.5401 40.6106L79.3736 40.6504Z"
          variants={icon}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M130.009 69.0584C124.977 69.0584 119.994 70.0496 115.346 71.9752C110.697 73.9008 106.473 76.7233 102.914 80.2814C99.3563 83.8396 96.5338 88.0637 94.6082 92.7126C92.6825 97.3615 91.6914 102.344 91.6914 107.376L101.269 107.376C101.269 103.602 102.013 99.8647 103.457 96.3778C104.901 92.8909 107.018 89.7227 109.687 87.0539C112.356 84.3852 115.524 82.2682 119.011 80.8239C122.498 79.3796 126.235 78.6362 130.009 78.6362L130.009 69.0584Z"
          variants={icon}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M44.6559 69.0584C49.6879 69.0584 54.6706 70.0496 59.3195 71.9752C63.9684 73.9008 68.1925 76.7233 71.7506 80.2814C75.3088 83.8396 78.1312 88.0637 80.0569 92.7126C81.9825 97.3615 82.9736 102.344 82.9736 107.376L73.3959 107.376C73.3959 103.602 72.6525 99.8647 71.2082 96.3778C69.7639 92.8909 67.6469 89.7227 64.9782 87.0539C62.3094 84.3852 59.1411 82.2682 55.6542 80.8239C52.1673 79.3796 48.4301 78.6362 44.6559 78.6362L44.6559 69.0584Z"
          variants={icon}
          initial={initState ? 'visible' : 'hidden'}
          animate={state ? 'visible' : 'hidden'}
          transition={{
            default: { duration: refreshTime, ease: 'easeInOut' },
            fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
      <motion.p
        className="text-white font-semibold text-4xl mt-8"
        variants={icon}
        initial={initState ? 'visible' : 'hidden'}
        animate={state ? 'visible' : 'hidden'}
        transition={{
          default: { duration: refreshTime, ease: 'easeInOut' },
          fill: { duration: refreshTime, ease: [1, 0, 0.8, 1] },
        }}
      >
        TOCPC
      </motion.p>
    </div>
  )
}
