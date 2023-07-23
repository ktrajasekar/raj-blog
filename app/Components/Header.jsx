"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <header className="site-header header-bg">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Rajasekar Thangavel</h2>
          </div>
          <div className="col-8">
            <nav className="site-navigation">
              <ul>
                <li>
                  <Link
                    href="/"
                    className={currentPath === "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={currentPath === "/about" ? "active" : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={currentPath === "/blog" ? "active" : ""}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
