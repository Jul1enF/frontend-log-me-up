import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'




function Home() {


  useEffect(() => {
    setAnimationsBegin(true)
    setTimeout(()=>setAnimations2Begin(true), 1600)
  }, [])



  const [animationsBegin, setAnimationsBegin] = useState(false)
  const [animations2Begin, setAnimations2Begin] = useState(false)


  const gradientBackgroundHeader = !animationsBegin ? styles.gradientBackgroundHeader1 : styles.gradientBackgroundHeader2


  const headerGradientLine = !animationsBegin ? styles.headerGradientLine1 : styles.headerGradientLine2

  const modal = !animations2Begin ? styles.modal1 : styles.modal2


  return (
    <div className={styles.body}>

      <div className={styles.backgroundHeaderContainer}>
        <div className={gradientBackgroundHeader}>
          <h1 className={styles.title}>LOG ME UP</h1>
          <h3 className={styles.name}>Julien Furic - Développeur d'applications web et mobile</h3>
        </div>
      </div>
      
      <div className={headerGradientLine}></div>

      {/* <div className={modal}>

      </div> */}
    </div>
  );
}

export default Home;
