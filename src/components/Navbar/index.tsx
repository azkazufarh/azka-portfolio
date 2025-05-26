export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl flex items-center justify-between mx-auto py-4 px-4">
        <a href="#" className="text-2xl font-bold text-gray-900">
          azka.dev
        </a>
        <div className="hidden md:flex md:items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Works
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
          <a href="#" className="bg-blue-800 text-white px-4 py-2 rounded">Lets Talk</a>
        </div>
      </div>
    </nav>
  );
};
