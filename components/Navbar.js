import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
            <Image src="/logo.png" width={128} height={77} />
        </div>
        <Link href="/">Home</Link>
        <Link href="/ninjas">Ninja Listing</Link>
      </nav>
    </div>
  )
}

export default Navbar
