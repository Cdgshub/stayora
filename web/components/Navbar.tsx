export default function Navbar() {
      return (
          <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        {/* Logo */}
                                <div>
                                          <h1 className="text-3xl font-extrabold text-blue-700">
                                                      Stayora
                                                                </h1>
                                                                        </div>
                                                                                {/* Navigation */}
                                                                                        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                                                                                                  <a href="#" className="hover:text-blue-600">Hotels</a>
                                                                                                            <a href="#" className="hover:text-blue-600">Flights</a>
                                                                                                                      <a href="#" className="hover:text-blue-600">Cars</a>
                                                                                                                                <a href="#" className="hover:text-blue-600">Packages</a>
                                                                                                                                        </nav>
                                                                                                                                                {/* Buttons */}
                                                                                                                                                        <div className="flex items-center gap-3">
                                                                                                                                                                  <button className="px-4 py-2 text-gray-700 hover:text-blue-700">
                                                                                                                                                                              Sign In
                                                                                                                                                                                        </button>
                                                                                                                                                                                                  <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
                                                                                                                                                                                                              Register
                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                          </header>
                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                            }