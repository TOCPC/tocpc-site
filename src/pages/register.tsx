import Link from 'next/link'
import { useAuth } from 'lib/auth'
import { Layout } from 'components/Layout'
import { Description } from 'components/Description'

const Register = () => {
  const auth = useAuth()
  return (
    <>
      <Description />
      <main className="relative w-full min-h-screen bg-gray-900">
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <p className="font-display text-3xl text-white text-center font-extrabold py-2">
              Register
            </p>
            <p className="font-display text-white text-center pb-8">
              Or{' '}
              <Link href="/login" passHref>
                <a className="text-red-400">login here</a>
              </Link>
            </p>
          </div>
          <div>
            <button
              className="flex items-center justify-center mx-auto font-display bg-white hover:bg-gray-300 py-auto rounded-full w-80 py-3 mb-6"
              onClick={() => auth?.signinWithFacebook('/onboard')}
            >
              <svg
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.0505 17.639C35.0505 8.0979 27.3164 0.36377 17.7752 0.36377C8.23413 0.36377 0.5 8.0979 0.5 17.639C0.5 26.2611 6.81756 33.4079 15.0769 34.7035V22.6333H10.6889V17.639H15.0769V13.8333C15.0769 9.5041 17.6543 7.11321 21.6017 7.11321C23.4916 7.11321 25.4679 7.45008 25.4679 7.45008V11.6998H23.2912C21.1439 11.6998 20.4754 13.0317 20.4754 14.3982V17.639H25.2658L24.5005 22.6316H20.4754V34.7035C28.7329 33.4079 35.0505 26.2611 35.0505 17.639Z"
                  fill="#1877F2"
                />
              </svg>
              <p className="px-4">Sign up with Facebook</p>
            </button>
            <button
              className="flex items-center justify-center mx-auto font-display bg-white hover:bg-gray-300 py-auto rounded-full w-80 py-3 mb-6"
              onClick={() => auth?.signinWithGoogle('/onboard')}
            >
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_582:964)">
                  <path
                    d="M6.86609 18.5478L5.84918 22.344L2.13242 22.4227C1.02165 20.3624 0.391602 18.0053 0.391602 15.5004C0.391602 13.0782 0.980679 10.794 2.02486 8.78271H2.02566L5.33463 9.38937L6.78415 12.6785C6.48077 13.5629 6.31541 14.5124 6.31541 15.5004C6.31553 16.5726 6.50976 17.6 6.86609 18.5478Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M29.3501 12.7715C29.5178 13.6551 29.6053 14.5676 29.6053 15.5003C29.6053 16.5461 29.4954 17.5662 29.2859 18.5501C28.5748 21.8985 26.7168 24.8223 24.1429 26.8914L24.1421 26.8906L19.9743 26.678L19.3845 22.9957C21.0923 21.994 22.4271 20.4266 23.1301 18.5501H15.3193V12.7715H23.2441H29.3501Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M24.143 26.8907L24.1438 26.8915C21.6406 28.9036 18.4607 30.1075 14.9991 30.1075C9.43637 30.1075 4.59999 26.9983 2.13281 22.4227L6.86649 18.5479C8.10005 21.84 11.2759 24.1836 14.9991 24.1836C16.5994 24.1836 18.0987 23.751 19.3852 22.9958L24.143 26.8907Z"
                    fill="#28B446"
                  />
                  <path
                    d="M24.3219 4.25639L19.5899 8.13047C18.2584 7.2982 16.6845 6.81742 14.9983 6.81742C11.1908 6.81742 7.95553 9.26851 6.78376 12.6788L2.02521 8.78299H2.02441C4.45547 4.09588 9.35285 0.893555 14.9983 0.893555C18.5425 0.893555 21.7922 2.15604 24.3219 4.25639Z"
                    fill="#F45D5D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_582:964">
                    <rect
                      width="29.2142"
                      height="29.2142"
                      fill="white"
                      transform="translate(0.392578 0.893066)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="px-4">Sign up with Google</p>
            </button>
            <button
              className="flex items-center justify-center mx-auto font-display bg-white hover:bg-gray-300 py-auto rounded-full w-80 py-3 mb-6"
              onClick={() => auth?.signinWithGitHub('/onboard')}
            >
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0.5C6.7155 0.5 0 7.38489 0 15.8805C0 22.6748 4.2975 28.4403 10.2585 30.4732C11.0085 30.6145 11.2815 30.14 11.2815 29.7316C11.2815 29.3677 11.2695 28.3989 11.262 27.1168C7.089 28.0457 6.2085 25.0547 6.2085 25.0547C5.5275 23.2766 4.5435 22.8037 4.5435 22.8037C3.1815 21.8518 4.647 21.8702 4.647 21.8702C6.1515 21.9777 6.9435 23.4548 6.9435 23.4548C8.2815 25.804 10.455 25.1253 11.3085 24.7322C11.4465 23.7388 11.8335 23.0617 12.2625 22.6778C8.9325 22.2894 5.43 20.9689 5.43 15.0759C5.43 13.3977 6.015 12.0234 6.9735 10.9486C6.819 10.5602 6.3045 8.99556 7.1205 6.87973C7.1205 6.87973 8.3805 6.46517 11.2455 8.45509C12.4692 8.11348 13.7317 7.93948 15 7.93765C16.275 7.94379 17.5575 8.11422 18.756 8.45509C21.6195 6.46517 22.8765 6.8782 22.8765 6.8782C23.6955 8.99556 23.1795 10.5602 23.0265 10.9486C23.9865 12.0234 24.5685 13.3977 24.5685 15.0759C24.5685 20.9842 21.06 22.2848 17.7195 22.6655C18.258 23.14 18.7365 24.0781 18.7365 25.5138C18.7365 27.5682 18.7185 29.228 18.7185 29.7316C18.7185 30.1431 18.9885 30.6222 19.7505 30.4717C22.7374 29.4462 25.334 27.4857 27.1732 24.8674C29.0124 22.2491 30.0013 19.1054 30 15.8805C30 7.38489 23.283 0.5 15 0.5Z"
                  fill="#111827"
                />
              </svg>
              <p className="px-4">Sign up with Github</p>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Register
