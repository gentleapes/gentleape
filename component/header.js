import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Layout.module.css'
import styles2 from '../styles/Home.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <header className={styles.header}>
        <motion.nav
          className={styles.navbar}
          initial={{ y: '-20vw' }}
          animate={{  y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            duration: 2,
          }}
        >
          <Link href="/">
            <Image src="/logo.svg" alt="Vercel Logo" width={60} height={60} />
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + ' ' + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + ' ' + styles.active
                  }
                  onClick={openMenu}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/about">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + ' ' + styles.active
                  }
                  onClick={openMenu}
                >
                  About
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/contact">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + ' ' + styles.active
                  }
                  onClick={openMenu}
                >
                  Roadmap
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/contact">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + ' ' + styles.active
                  }
                  onClick={openMenu}
                >
                  Team
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.iconic}>
            <div className={styles.iconchild}>
              <Link href="/">
                <Image
                  src="/discord.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className={styles.iconchild}>
              <Link href="/">
                <Image
                  src="/twitter.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className={styles.iconchild}>
              <Link href="/">
                <Image
                  src="/opensea.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + ' ' + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </motion.nav>
      </header>
    </>
  )
}
