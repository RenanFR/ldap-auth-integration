import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Login</Link></li>
                <li><Link href="/home">Home</Link></li>
            </ul>
        </nav>
    );
}
