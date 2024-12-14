import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { Laptop } from 'react-bootstrap-icons';
import { Phone } from 'react-bootstrap-icons';
import { Palette } from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons'

import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";


function Home() {


  useEffect(() => {
    setTimeout(() => setAnimationsBegin(true), 600)
    setTimeout(() => setAnimations2Begin(true), 1400)
    setTimeout(() => setAnimations3Begin(true), 2100)
    setTimeout(() => setAnimations4Begin(true), 2600)
  }, [])



  const [animationsBegin, setAnimationsBegin] = useState(false)
  const [animations2Begin, setAnimations2Begin] = useState(false)
  const [animations3Begin, setAnimations3Begin] = useState(false)
  const [animations4Begin, setAnimations4Begin] = useState(false)



  // État pour la catégorie choisie

  const [category, setCategory] = useState('about')



  // Variable de className pour changement de styles pour les animations

  const gradientBackgroundHeader = !animationsBegin ? styles.gradientBackgroundHeader1 : styles.gradientBackgroundHeader2

  const headerGradientLine = !animationsBegin ? styles.headerGradientLine1 : styles.headerGradientLine2

  const modal = !animations2Begin ? styles.modal1 : styles.modal2

  const buttonContainer = !animations3Begin ? styles.buttonContainer1 : styles.buttonContainer2


  const rightContainer = !animations4Begin ? styles.rightContainer1 : styles.rightContainer2





  // Affichage conditionnel des boutons et de leurs lignes en fonction de la catégorie sélectionnée

  const categoryButton1 = category === "about" ? styles.button2 : styles.button1
  const categoryButton2 = category === "skills" ? styles.button2 : styles.button1
  const categoryButton3 = category === "projects" ? styles.button2 : styles.button1
  const categoryButton4 = category === "contact" ? styles.button2 : styles.button1


  const categoryLine1 = category === "about" ? styles.categoryLine2 : styles.categoryLine1

  const categoryLine2 = category === "skills" ? styles.categoryLine2 : styles.categoryLine1

  const categoryLine3 = category === "projects" ? styles.categoryLine2 : styles.categoryLine1

  const categoryLine4 = category === "contact" ? styles.categoryLine2 : styles.categoryLine1



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
              <div className={categoryLine1}></div>
              <h5 className={styles.category}>Présentation</h5>
            </div>
            <div className={categoryButton2} onClick={() => setCategory("skills")}>
              <div className={categoryLine2}></div>
              <h5 className={styles.category}>Compétences</h5>
            </div>
            <div className={categoryButton3} onClick={() => setCategory("projects")}>
              <div className={categoryLine3}></div>
              <h5 className={styles.category}>Projets</h5>
            </div>
            <div className={categoryButton4} onClick={() => setCategory("contact")}>
              <div className={categoryLine4}></div>
              <h5 className={styles.category}>Contact</h5>
            </div>
          </div>

        </div>


        <div className={rightContainer}>


          <h3 className={styles.categoryTitle}>Présentation</h3>
          <div className={styles.gradientTextContainer}>
            <h4 className={styles.categorySubtitle}>À propos de moi</h4>
          </div>


          {/* <div className={styles.avatarContainer}>
            <Image src="/avatar.png" alt="icone d'un avatar de personnage" layout="fill" objectFit='cover' className={styles.avatar} ></Image>
          </div> */}


          <div className={styles.categoryDetailsContainer}>

            <div className={styles.textContainer}>
              <p className={styles.paragraph1}>Hello, moi c'est Julien ! J'ai 35 ans et je suis développeur de site web et d'applications mobiles.</p>
              <p className={styles.paragraph1}> J'ai obtenu à l'été 2024 un diplôme bac +3 de Développeur Fullstack après avoir suivi les cours de la formation La Capsule.</p>
              <p className={styles.paragraph1}> Depuis je ne cesse de développer des projets de site web ou d'applications mobiles et cherche encore et toujours de nouveaux défis à relever !</p>
              <p className={styles.paragraph1}> Pour cela, quinze années d'expériences dans la vidéo, le montage et le motion design m'accompagnent afin d'élargir mes compétences. Je peux ainsi personnaliser le design de mes créations, créer des animations ou des logos.</p>
              <p className={styles.paragraph1}>N'hésitez pas à me contacter si vous avez un projet en tête et cherchez à le réaliser ou à en définir les contours !</p>
            </div>

            <div className={styles.picturesContainer}>

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


          <h3 className={styles.categoryTitle}>Compétences</h3>
          <div className={styles.gradientTextContainer}>
            <h4 className={styles.categorySubtitle}>Mes outils de travail</h4>
          </div>

          <div className={styles.toolsCategoriesContainer1}>

            <div className={styles.rectangleGradient}>
              <h6 className={styles.skillTitle}>Front-End</h6>
              <div className={styles.toolsContainer}>

                <div className={styles.tool}>
                  <p className={styles.toolText}>React</p>
                  <FontAwesomeIcon icon={faReact} className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Next.js</p>
                  <SiNextdotjs className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>TypeScript</p>
                  <SiTypescript className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>CSS</p>
                  <FaCss3Alt className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Expo</p>
                  <SiExpo className={styles.toolIcon} />
                </div>

              </div>

            </div>

            <div className={styles.rectangleGradient}>
              <h6 className={styles.skillTitle}>Back-End</h6>
              <div className={styles.toolsContainer}>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Node.js</p>
                  <FontAwesomeIcon icon={faNode} className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Express</p>
                  <SiExpress className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>MongoDB</p>
                  <SiMongodb className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Vercel</p>
                  <SiVercel className={styles.toolIcon} />
                </div>

              </div>

            </div>

          </div>


          <div className={styles.toolsCategoriesContainer2}>

            <div className={styles.rectangleGradient}>
              <h6 className={styles.skillTitle}>Vidéo / Graphisme</h6>
              <div className={styles.toolsContainer}>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Premiere Pro</p>
                  <SiAdobepremierepro className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>After Effects</p>
                  <SiAdobeaftereffects className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Photoshop</p>
                  <SiAdobephotoshop className={styles.toolIcon} />
                </div>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Illustrator</p>
                  <SiAdobeillustrator className={styles.toolIcon} />
                </div>

              </div>

            </div>

          </div>




        </div>


      </div>

    </div>
  );
}

export default Home;
