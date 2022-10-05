import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "#" },
  { name: "Projects", href: "/projects" },
]

const Nav = () => (
  <nav className="bg-gray-200 text-xl">
    <div className="mx-auto px-2 w-full">
      <div className="relative flex h-12 items-center justify-between">
        <div className="flex">
          {navLinks.map((item) => (
            <Link href={item.href}>
              <a className="px-1 hover:underline">{item.name}</a>
            </Link>
          ))}
        </div>
        <div className="font-mono">require('nathan')</div>
      </div>
    </div>
  </nav>
)

export default Nav
