import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/mylogo.png" alt="Niccolò Belvedere Logo" className={styles.logo} />
      </footer>
    </>
  )
}
