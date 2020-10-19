import styles from '../styles/Home.module.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <MainContent/>
      <Footer />
    </div>
  )
}
