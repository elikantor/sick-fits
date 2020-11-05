import Link from 'next/link'

const Nav = () => (
    <div className="nav-bar">
        <Link href="/index">
            <a>Home!</a>
        </Link>
        <Link href="/sell">
            <a>Sell!</a>
        </Link>
    </div>
)

export default Nav