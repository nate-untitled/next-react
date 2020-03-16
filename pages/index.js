import Link from 'next/link';
import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout>
        <header>
        <Link href="/">
            <h2>u</h2>
        </Link>
        <nav>
        <Link href="/brand">
            <a>Brand</a>
        </Link>
        <Link href="/charts">
            <a>Charts</a>
        </Link>
        <Link href="/forms">
            <a>Forms</a>
        </Link>
        </nav>
    </header>
  </Layout>
  );
}