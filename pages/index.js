import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Gentle Ape Society</title>
        <meta name="description" content="Gentle " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: '10vw' }}
            animate={{ opacity: 1, y: '1vw' }}
            transition={{
              type: 'tween',
              duration: 1.5,
            }}
          >
            <Image src="/logo.svg" alt="Vercel Logo" width={400} height={400} />
          </motion.div>
        </div>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image
              src="/title.svg"
              alt="Vercel Logo"
              width={322}
              height={150}
            />
          </motion.div>
        </div>
        <br />
        <Image src="/separator.png" alt="Vercel Logo" width={819} height={40} />
        <div className={styles.gridl}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image src="/gas.jpeg" alt="Vercel Logo" width={400} height={400} />
          </motion.div>
          <motion.div
            className={styles.texter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h1 className={styles.headtext}> The Story Behind </h1>
            <p className={styles.ptext}>
              A Colorful, Derivative and Superlative MultiVerse. The Superlative
              Apes, not a community, but a loyal family. Superlative Apes is a
              unique collection of 4444 generated colorful art pieces, all made
              with pure love and hand drawn artwork.
              <br />
              <br />
              These Apes were quite normal back in the days… But apparently,
              they did some weird things with their new lives, as they all live
              on the never ending Blockchain of Ethereum. There are some rumors
              of them entering the MetaVerse of Happyland, which can explain
              their colorful colors and weird appearance. Superlative Apes has
              been built by a passionate, enthusiastic and hardworking team and
              a powerful grassroots community. The project offers incredible
              utility and is dedicated to support our community.
            </p>
          </motion.div>
        </div>
        <br />
        <Image src="/separator.png" alt="Vercel Logo" width={819} height={40} />
        <h1 className={styles.headtext}>ROADMAP</h1>
        <div className={styles.grid}>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4>10% We build a town in metaverse</h4>
          </motion.div>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4>25% We build a town in metaverse</h4>
          </motion.div>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4>50% We build a town in metaverse</h4>
          </motion.div>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4>75% We build a town in metaverse</h4>
          </motion.div>
          <motion.div
            className={styles.largecard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <h4>100% We build a town in metaverse</h4>
          </motion.div>
        </div>
        <Image src="/separator.png" alt="Vercel Logo" width={819} height={40} />
        <h1 className={styles.headtext}>Team</h1>
        <div className={styles.gridl}>
          <motion.div
            className={styles.smallcard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image src="/gas.jpeg" alt="Vercel Logo" width={400} height={400} />
            <h4>Agent Gallahad</h4>
          </motion.div>
          <motion.div
            className={styles.smallcard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image src="/gas.jpeg" alt="Vercel Logo" width={400} height={400} />
            <h4>Agent Hennesy</h4>
          </motion.div>
          <motion.div
            className={styles.smallcard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image src="/gas.jpeg" alt="Vercel Logo" width={400} height={400} />
            <h4>Agent Tequila</h4>
          </motion.div>
          <motion.div
            className={styles.smallcard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 1.5,
              delay: 1,
            }}
          >
            <Image src="/gas.jpeg" alt="Vercel Logo" width={400} height={400} />
            <h4>Agent Gizmo</h4>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
