import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { Laptop } from 'react-bootstrap-icons';
import { Phone } from 'react-bootstrap-icons';
import { Palette } from 'react-bootstrap-icons';




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


  const rightContainer = !animations3Begin ? styles.rightContainer1 : styles.rightContainer2





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


      <div className={styles.mainContainer}>


        <div className={modal}>

          <div className={buttonContainer}>
            <div className={categoryButton1} onClick={() => setCategory("about")}>
              <div className={styles.categoryLine}></div>
              <h5 className={styles.category}>Présentation</h5>
            </div>
            <div className={categoryButton2} onClick={() => setCategory("projects")}>
              <div className={styles.categoryLine}></div>
              <h5 className={styles.category}>Expériences</h5>
            </div>
            <div className={categoryButton3} onClick={() => setCategory("contact")}>
              <div className={styles.categoryLine}></div>
              <h5 className={styles.category}>Contact</h5>
            </div>
          </div>

        </div>


        <div className={rightContainer}>


          <h3 className={styles.categoryTitle}>Présentation</h3>
          <div className={styles.gradientTextContainer}>
            <h4 className={styles.categorySubtitle}>À propos de moi</h4>
          </div>


          <div className={styles.categoryContainer}>

            <div className={styles.textContainer}>
              <p className={styles.paragraph1}>Hello, moi c'est Julien, j'ai 35 ans et je suis développeur de site web et d'applications mobiles.</p>
              <p className={styles.paragraph1}> J'ai obtenu à l'été 2024 un diplôme bac +3 de Développeur Fullstack après avoir suivi les cours de la formation La Capsule.</p>
              <p className={styles.paragraph1}> Depuis je ne cesse de développer des projets de site web ou d'applications mobiles et cherche encore et toujours de nouveaux défis à relever !</p>
              <p className={styles.paragraph1}> Pour cela, quinze années d'expériences dans la vidéo, le montage et le motion design m'accompagnent afin d'élargir mes compétences. Je peux ainsi personnaliser le design de mes créations, créer des animations ou des logos.</p>
              <p className={styles.paragraph1}>N'hésitez pas à me contacter si vous avez un projet un tête et cherchez à la réaliser ou à en définir les contours !</p>
            </div>

            <div className={styles.picturesContainer}>

              {/* <div className={styles.avatarContainer}>
                <Image src="/avatar.png" alt="icone d'un avatar de personnage" layout="fill" objectFit='cover' className={styles.avatar} ></Image>
              </div> */}

              <div className={styles.squareGradient}>
                <p className={styles.squareText}>
                  Développeur web
                </p>
                <Laptop className={styles.skillsIcon} />
              </div>

              <div className={styles.squareGradient}>
                <p className={styles.squareText}>
                  Développeur mobile
                </p>
                <Phone className={styles.skillsIcon} />
              </div>

              <div className={styles.squareGradient}>
                <p className={styles.squareText}>
                  Motion designer
                </p>
                <Palette className={styles.skillsIcon} />
              </div>

            </div>

          </div>


        </div>


      </div>

    </div>
  );
}

export default Home;
