import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import filenodLogo from "/favicon-filenod.png";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={filenodLogo} alt="Filenod Logo" className="h-14" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Your Filenod Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Sign up to get started with Filenod services.
        </p>

        {/* Signup Form */}
        <form className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Signup */}
        <div className="flex gap-4">
          <button className="flex items-center justify-center gap-2 w-1/2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
            <FcGoogle size={22} />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 w-1/2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
            <FaApple size={22} />
            Apple
          </button>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
              to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
