import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'




function Home() {


  useEffect(() => {
    setTimeout(() => setAnimationsBegin(true), 600)
    setTimeout(() => setAnimations2Begin(true), 1400)
    setTimeout(() => setAnimations3Begin(true), 2100)
  }, [])



  const [animationsBegin, setAnimationsBegin] = useState(false)
  const [animations2Begin, setAnimations2Begin] = useState(false)
  const [animations3Begin, setAnimations3Begin] = useState(false)



  // État pour la catégorie choisie

  const [category, setCategory] = useState('')



  // Variable de className pour changement de styles pour les animations

  const gradientBackgroundHeader = !animationsBegin ? styles.gradientBackgroundHeader1 : styles.gradientBackgroundHeader2

  const headerGradientLine = !animationsBegin ? styles.headerGradientLine1 : styles.headerGradientLine2

  const modal = !animations2Begin ? styles.modal1 : styles.modal2

  const buttonContainer = !animations3Begin ? styles.buttonContainer1 : styles.buttonContainer2




  // Affichage conditionnel des boutons en fonction de la catégorie sélectionnée

  const categoryButton1 = category === "about" ? styles.button2 : styles.button1
  const categoryButton2 = category === "projects" ? styles.button2 : styles.button1
  const categoryButton3 = category === "contact" ? styles.button2 : styles.button1



  return (
    <div className={styles.body}>

      <div className={styles.headerContainer}>
        <div className={gradientBackgroundHeader}>
          {/* <h1 className={styles.title}>LOG ME UP</h1> */}
          <h1 className={styles.title}>Julien Furic</h1>
          <h3 className={styles.subTitle}>Développeur d'applications web et mobile</h3>
        </div>
      </div>

      <div className={styles.headerLineContainer}>
        <div className={headerGradientLine}></div>
      </div>

      <div className={styles.centralContainer}>


        <div className={modal}>

          <div className={buttonContainer}>
            <div className={categoryButton1} onClick={() => setCategory("about")}>
              <div className={styles.categoryLine}></div>
              <div className={styles.gradientCategory}>
                <h5 className={styles.category}>À propos</h5>
              </div>
            </div>
            <div className={categoryButton2} onClick={() => setCategory("projects")}>
              <div className={styles.categoryLine}></div>
              <div className={styles.gradientCategory}>
                <h5 className={styles.category}>Expériences</h5>
              </div>
            </div>
            <div className={categoryButton3} onClick={() => setCategory("contact")}>
              <div className={styles.categoryLine}></div>
              <div className={styles.gradientCategory}>
                <h5 className={styles.category}>Contact</h5>
              </div>
            </div>
          </div>

        </div>

        {/* <div className={styles.leftContainer}>
        </div>

        <div className={styles.rightContainer}>
        </div> */}
      </div>

    </div>
  );
}

export default Home;
