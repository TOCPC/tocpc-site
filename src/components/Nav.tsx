import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAuth } from 'lib/auth'
import classnames from 'classnames'

const DetectOuside = (ref: any, dep: boolean, callback: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && dep) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, dep, callback])
}

export const Nav = () => {
  const [reveal, setReveal] = useState<boolean>(false)
  const panel = useRef(null)
  const { pathname } = useRouter()

  useEffect(() => {
    setReveal(false)
  }, [pathname])

  const variants = {
    open: {
      x: '-100%',
      opacity: 1,
      transition: {
        type: 'tween',
        stiffness: 100,
      },
    },
    close: {
      x: 0,
      transition: {
        type: 'tween',
        stiffness: 100,
      },
    },
  }

  DetectOuside(panel, reveal, () => {
    setReveal(false)
  })

  const getClass = (expected: string, part: 'ul' | 'color') => {
    if (pathname == expected) {
      switch (part) {
        case 'ul':
          return 'underline'
        case 'color':
          return 'text-red-400'
      }
    } else {
      switch (part) {
        case 'ul':
          return ''
        case 'color':
          return 'text-white'
      }
    }
  }

  const auth = useAuth()

  return (
    <nav className="absolute flex justify-center w-full px-10 sm:px-16 md:px-24 z-50">
      <div
        className={classnames(
          'flex w-full justify-between max-w-4xl items-center border-white py-5 sm:pt-12',
          (pathname === '/about' || pathname === 'scope') && 'border-b'
        )}
      >
        <div className="flex items-center justify-center">
          <svg
            className="-ml-3"
            width="50"
            height=""
            viewBox="0 0 174 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.7119 53.5754L105.489 60.3522L78.9568 86.884C76.8925 83.5919 75.5731 81.9493 73.0303 79.2571L98.7119 53.5754Z"
              fill="white"
            />
            <path
              d="M95.2915 40.6504C95.3119 45.6823 96.3232 50.661 98.2676 55.302C100.212 59.9431 103.052 64.1558 106.624 67.6994C110.197 71.2431 114.432 74.0485 119.089 75.9552C123.746 77.862 128.732 78.833 133.764 78.8126L133.724 68.9791C129.984 68.9942 126.277 68.2725 122.815 66.855C119.354 65.4376 116.205 63.3522 113.549 60.7179C110.894 58.0837 108.783 54.9522 107.337 51.5021C105.892 48.0521 105.14 44.3512 105.125 40.6106L95.2915 40.6504Z"
              fill="white"
            />
            <path
              d="M79.3736 40.6504C79.3532 45.6823 78.3419 50.661 76.3974 55.302C74.4529 59.9431 71.6134 64.1558 68.0409 67.6994C64.4684 71.2431 60.2328 74.0485 55.5762 75.9552C50.9195 77.862 45.9328 78.833 40.9009 78.8126L40.9408 68.9791C44.6813 68.9942 48.3882 68.2725 51.8499 66.855C55.3115 65.4376 58.46 63.3522 61.1157 60.7179C63.7714 58.0837 65.8822 54.9521 67.3277 51.5021C68.7732 48.0521 69.5249 44.3511 69.5401 40.6106L79.3736 40.6504Z"
              fill="white"
            />
            <path
              d="M130.009 69.0584C124.977 69.0584 119.994 70.0496 115.346 71.9752C110.697 73.9008 106.473 76.7233 102.914 80.2814C99.3563 83.8396 96.5338 88.0637 94.6082 92.7126C92.6825 97.3615 91.6914 102.344 91.6914 107.376L101.269 107.376C101.269 103.602 102.013 99.8647 103.457 96.3778C104.901 92.8909 107.018 89.7227 109.687 87.0539C112.356 84.3852 115.524 82.2682 119.011 80.8239C122.498 79.3796 126.235 78.6362 130.009 78.6362L130.009 69.0584Z"
              fill="white"
            />
            <path
              d="M44.6559 69.0584C49.6879 69.0584 54.6706 70.0496 59.3195 71.9752C63.9684 73.9008 68.1925 76.7233 71.7506 80.2814C75.3088 83.8396 78.1312 88.0637 80.0569 92.7126C81.9825 97.3615 82.9736 102.344 82.9736 107.376L73.3959 107.376C73.3959 103.602 72.6525 99.8647 71.2082 96.3778C69.7639 92.8909 67.6469 89.7227 64.9782 87.0539C62.3094 84.3852 59.1411 82.2682 55.6542 80.8239C52.1673 79.3796 48.4301 78.6362 44.6559 78.6362L44.6559 69.0584Z"
              fill="white"
            />
          </svg>
          <p className="font-light text-2xl text-white">TOCPC</p>
        </div>
        <div className="hidden sm:flex items-center">
          {((auth?.userData?.password !== '' && auth?.user !== null) ||
            auth?.user === null) && (
            <>
              <Link href="/" passHref>
                <a
                  className={classnames(
                    'font-display sm:pr-4 md:pr-8 pb-6 sm:pb-0 font-semibold text-white',
                    getClass('/', 'ul')
                  )}
                >
                  Home
                </a>
              </Link>
              <Link href="/about" passHref>
                <a
                  className={classnames(
                    'font-display sm:pr-4 md:pr-8 pb-6 sm:pb-0 font-semibold text-white',
                    getClass('/about', 'ul')
                  )}
                >
                  About us
                </a>
              </Link>
            </>
          )}
          {auth?.userData?.password !== '' && auth?.user !== null && (
            <Link href="/dashboard" passHref>
              <a
                className={classnames(
                  'font-display sm:pr-4 md:pr-8 pb-6 sm:pb-0 font-semibold text-white',
                  getClass('/dashboard', 'ul')
                )}
              >
                Dashboard
              </a>
            </Link>
          )}

          {auth?.user ? (
            <button
              className="font-display bg-white font-semibold px-6 py-2.5 rounded-full hover:bg-gray-300"
              onClick={() => auth?.signout()}
            >
              Logout
            </button>
          ) : (
            <Link href="/login" passHref>
              <button className="font-display bg-white font-semibold px-6 py-2.5 rounded-full hover:bg-gray-300">
                Login
              </button>
            </Link>
          )}
        </div>
        <button onClick={() => setReveal(!reveal)} className="sm:hidden">
          <svg
            width="29"
            height="25"
            viewBox="0 0 29 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.149887 2.24995C0.149887 1.11777 1.0677 0.199951 2.19989 0.199951H26.7999C27.9321 0.199951 28.8499 1.11777 28.8499 2.24995C28.8499 3.38213 27.9321 4.29995 26.7999 4.29995H2.19989C1.0677 4.29995 0.149887 3.38213 0.149887 2.24995Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.149887 12.5C0.149887 11.3678 1.0677 10.45 2.19989 10.45H26.7999C27.9321 10.45 28.8499 11.3678 28.8499 12.5C28.8499 13.6321 27.9321 14.55 26.7999 14.55H2.19989C1.0677 14.55 0.149887 13.6321 0.149887 12.5Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.149887 22.75C0.149887 21.6178 1.0677 20.7 2.19989 20.7H26.7999C27.9321 20.7 28.8499 21.6178 28.8499 22.75C28.8499 23.8821 27.9321 24.7999 26.7999 24.7999H2.19989C1.0677 24.7999 0.149887 23.8821 0.149887 22.75Z"
              fill="white"
            />
          </svg>
        </button>
        <motion.div
          ref={panel}
          animate={reveal ? 'open' : 'close'}
          variants={variants}
          className="flex flex-col items-center left-full fixed top-0 bg-black h-full w-32 z-50 py-4"
        >
          <button onClick={() => setReveal(false)} className="mb-16">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.58579 8.58579C9.36683 7.80474 10.6332 7.80474 11.4142 8.58579L20 17.1716L28.5858 8.58579C29.3668 7.80474 30.6332 7.80474 31.4142 8.58579C32.1953 9.36683 32.1953 10.6332 31.4142 11.4142L22.8284 20L31.4142 28.5858C32.1953 29.3668 32.1953 30.6332 31.4142 31.4142C30.6332 32.1953 29.3668 32.1953 28.5858 31.4142L20 22.8284L11.4142 31.4142C10.6332 32.1953 9.36683 32.1953 8.58579 31.4142C7.80474 30.6332 7.80474 29.3668 8.58579 28.5858L17.1716 20L8.58579 11.4142C7.80474 10.6332 7.80474 9.36683 8.58579 8.58579Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="grid grid-cols-1 gap-6">
            {((auth?.userData?.password !== '' && auth?.user !== null) ||
              auth?.user === null) && (
              <>
                <Link href="/" passHref>
                  <div className="flex flex-col items-center">
                    <svg
                      className={classnames(
                        'fill-current',
                        getClass('/', 'color')
                      )}
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.3196 1.27874C15.5909 0.549991 14.4093 0.549991 13.6806 1.27874L0.618093 14.3412C-0.110653 15.07 -0.110653 16.2515 0.618093 16.9803C1.34684 17.709 2.52837 17.709 3.25712 16.9803L3.80368 16.4337V28.7232C3.80368 29.7539 4.63914 30.5893 5.66975 30.5893H9.40189C10.4325 30.5893 11.268 29.7539 11.268 28.7232V24.9911C11.268 23.9605 12.1034 23.125 13.134 23.125H16.8662C17.8968 23.125 18.7322 23.9605 18.7322 24.9911V28.7232C18.7322 29.7539 19.5677 30.5893 20.5983 30.5893H24.3305C25.3611 30.5893 26.1965 29.7539 26.1965 28.7232V16.4337L26.7431 16.9803C27.4718 17.709 28.6534 17.709 29.3821 16.9803C30.1109 16.2515 30.1109 15.07 29.3821 14.3412L16.3196 1.27874Z" />
                    </svg>
                    <p
                      className={classnames(
                        'mt-2 font-semibold text-sm',
                        getClass('/', 'color'),
                        getClass('/', 'ul')
                      )}
                    >
                      Home
                    </p>
                  </div>
                </Link>
                <Link href="/about" passHref>
                  <div className="flex flex-col items-center">
                    <svg
                      className={classnames(
                        'fill-current',
                        getClass('/about', 'color')
                      )}
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24.5982 11.8394C24.5982 14.9312 22.0918 17.4376 19 17.4376C15.9082 17.4376 13.4018 14.9312 13.4018 11.8394C13.4018 8.74762 15.9082 6.24121 19 6.24121C22.0918 6.24121 24.5982 8.74762 24.5982 11.8394Z" />
                      <path d="M33.9285 15.5716C33.9285 17.6328 32.2576 19.3037 30.1964 19.3037C28.1352 19.3037 26.4643 17.6328 26.4643 15.5716C26.4643 13.5104 28.1352 11.8394 30.1964 11.8394C32.2576 11.8394 33.9285 13.5104 33.9285 15.5716Z" />
                      <path d="M26.4643 28.6341C26.4643 24.5117 23.1224 21.1698 19 21.1698C14.8776 21.1698 11.5357 24.5117 11.5357 28.6341V34.2323H26.4643V28.6341Z" />
                      <path d="M11.5357 15.5716C11.5357 17.6328 9.86474 19.3037 7.80354 19.3037C5.74233 19.3037 4.07139 17.6328 4.07139 15.5716C4.07139 13.5104 5.74233 11.8394 7.80354 11.8394C9.86474 11.8394 11.5357 13.5104 11.5357 15.5716Z" />
                      <path d="M30.1964 34.2323V28.6341C30.1964 26.667 29.6891 24.8183 28.7982 23.2119C29.2451 23.097 29.7136 23.0359 30.1964 23.0359C33.2882 23.0359 35.7946 25.5423 35.7946 28.6341V34.2323H30.1964Z" />
                      <path d="M9.20171 23.2119C8.31082 24.8183 7.80354 26.667 7.80354 28.6341V34.2323H2.20532V28.6341C2.20532 25.5423 4.71173 23.0359 7.80354 23.0359C8.28631 23.0359 8.7548 23.097 9.20171 23.2119Z" />
                    </svg>
                    <p
                      className={classnames(
                        'mt-2 font-semibold text-sm',
                        getClass('/about', 'color'),
                        getClass('/about', 'ul')
                      )}
                    >
                      About
                    </p>
                  </div>
                </Link>
              </>
            )}
            {auth?.userData?.password !== '' && auth?.user !== null && (
              <Link href="/dashboard" passHref>
                <div className="flex flex-col items-center">
                  <svg
                    className={classnames(
                      'fill-current',
                      getClass('/dashboard', 'color')
                    )}
                    width="42"
                    height="43"
                    viewBox="0 0 42 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.8001 21.3039C37.8001 30.5823 30.2785 38.1039 21.0002 38.1039C11.7218 38.1039 4.2002 30.5823 4.2002 21.3039C4.2002 12.0255 11.7218 4.50391 21.0002 4.50391C30.2785 4.50391 37.8001 12.0255 37.8001 21.3039ZM25.2001 15.0039C25.2001 17.3235 23.3197 19.2039 21.0002 19.2039C18.6806 19.2039 16.8002 17.3235 16.8002 15.0039C16.8002 12.6843 18.6806 10.8039 21.0002 10.8039C23.3197 10.8039 25.2001 12.6843 25.2001 15.0039ZM21 23.4039C16.7632 23.4039 13.1125 25.9133 11.453 29.5269C13.7636 32.2072 17.1837 33.9039 21.0001 33.9039C24.8164 33.9039 28.2365 32.2072 30.5471 29.5271C28.8877 25.9134 25.2369 23.4039 21 23.4039Z"
                    />
                  </svg>
                  <p
                    className={classnames(
                      'mt-2 font-semibold text-sm',
                      getClass('/dashboard', 'color'),
                      getClass('/dashboard', 'ul')
                    )}
                  >
                    Dashboard
                  </p>
                </div>
              </Link>
            )}

            {auth?.user ? (
              <div
                className="flex flex-col items-center rounded-xl bg-white w-24 h-24 justify-center"
                onClick={() => auth.signout()}
              >
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.4001 5.70361C4.40599 5.70361 3.6001 6.5095 3.6001 7.50361V29.1036C3.6001 30.0977 4.40599 30.9036 5.4001 30.9036C6.39421 30.9036 7.2001 30.0977 7.2001 29.1036V7.50361C7.2001 6.5095 6.39421 5.70361 5.4001 5.70361Z"
                    fill="#111827"
                  />
                  <path
                    d="M23.9273 22.4308C23.2244 23.1338 23.2244 24.2735 23.9273 24.9764C24.6302 25.6793 25.7699 25.6793 26.4729 24.9764L31.8729 19.5764C32.2104 19.2388 32.4001 18.781 32.4001 18.3036C32.4001 17.8262 32.2104 17.3684 31.8729 17.0308L26.4729 11.6308C25.7699 10.9279 24.6302 10.9279 23.9273 11.6308C23.2244 12.3338 23.2244 13.4735 23.9273 14.1764L26.2545 16.5036L12.6001 16.5036C11.606 16.5036 10.8001 17.3095 10.8001 18.3036C10.8001 19.2977 11.606 20.1036 12.6001 20.1036H26.2545L23.9273 22.4308Z"
                    fill="#111827"
                  />
                </svg>
                <p className="mt-2 font-semibold text-sm">Logout</p>
              </div>
            ) : (
              <Link href="/login" passHref>
                <div className="flex flex-col items-center rounded-xl bg-white w-24 h-24 justify-center">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3 4.16455C14.2783 4.16455 13.45 4.99282 13.45 6.01455C13.45 7.03628 14.2783 7.86455 15.3 7.86455H19C20.0218 7.86455 20.85 7.03628 20.85 6.01455C20.85 4.99282 20.0218 4.16455 19 4.16455H15.3Z"
                      fill="black"
                    />
                    <path
                      d="M6.05005 9.71455C6.05005 7.6711 7.7066 6.01455 9.75005 6.01455C9.75005 9.07973 12.2349 11.5646 15.3 11.5646H19C22.0652 11.5646 24.55 9.07973 24.55 6.01455C26.5935 6.01455 28.25 7.6711 28.25 9.71455V20.8146H19.7663L22.1582 18.4227C22.8807 17.7002 22.8807 16.5289 22.1582 15.8064C21.4357 15.0839 20.2644 15.0839 19.5419 15.8064L13.9919 21.3564C13.2694 22.0789 13.2694 23.2502 13.9919 23.9727L19.5419 29.5227C20.2644 30.2452 21.4357 30.2452 22.1582 29.5227C22.8807 28.8002 22.8807 27.6289 22.1582 26.9064L19.7663 24.5145H28.25V30.0645C28.25 32.108 26.5935 33.7645 24.55 33.7645H9.75005C7.7066 33.7645 6.05005 32.108 6.05005 30.0645V9.71455Z"
                      fill="black"
                    />
                    <path
                      d="M28.25 20.8146H31.95C32.9718 20.8146 33.8 21.6428 33.8 22.6646C33.8 23.6863 32.9718 24.5145 31.95 24.5145H28.25V20.8146Z"
                      fill="black"
                    />
                  </svg>
                  <p className="mt-2 font-semibold text-sm">Login</p>
                </div>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
