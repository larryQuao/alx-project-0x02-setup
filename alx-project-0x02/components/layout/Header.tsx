import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Larry&apos;s App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:underline text-xl font-medium" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:underline text-lg font-medium" href="/about">About</Link>
          </li>
        </ul>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </nav>
    </header>
  );
}

export default Header;
