const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
    <div className="container py-6">

        <hr className="h-px mt-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
                <a href="#!" className="text-xl font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
            </div>

            <div className="flex mt-4 md:m-0">
                <div className="-mx-4">
                    <a href="#!" className="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</a>
                    <a href="#!" className="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Blog</a>
                    <a href="#!" className="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">News</a>
                    <a href="#!" className="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
