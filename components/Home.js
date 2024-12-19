import styles from '../styles/Home.module.css';
import { useState, useEffect, useRef } from 'react'
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
  // États pour setter les timings d'animation

  const [animationsBegin, setAnimationsBegin] = useState(false)
  const [animations2Begin, setAnimations2Begin] = useState(false)
  const [animations3Begin, setAnimations3Begin] = useState(false)
  const [animations4Begin, setAnimations4Begin] = useState(false)
  const [animations5Begin, setAnimations5Begin] = useState(false)
  const [animationsEnd, setAnimationsEnd] = useState(false)




  // Listener taille de la fenêtre pour enregistrement vw et vh

  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0)

  if (vh === 0 && vw === 0 && typeof window !== "undefined") {
    setVw(window.innerWidth / 100);
    setVh(window.innerHeight / 100)
  }

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth / 100);
      setVh(window.innerHeight / 100)

      bodyRef.current && bodyRef.current.scroll({
        top: scrollOffset,
        behavior: "smooth"
      })

    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [vw, vh]);




  // État et variables pour enregistrer le scroll offset et les changements de style


  const [scrollOffset, setScrollOffset] = useState(0)
  const offset = vw ? 50 * vh - 10 * vw : 0

  let bodyStyle = {}
  let headerStyle = {}
  let videoStyle = {}
  let titleBgStyle = {}
  let lineStyle = {}
  let modalStyle = {}
  let rightContainerStyle = {}



  // Styles conditionnels en fonction du scroll et de la taille du header


  // Le header n'a pas encore sa taille def
  if (scrollOffset > 0 && scrollOffset < 50 * vh - 10 * vw) {
    !animationsEnd && setAnimationsEnd(true)

    bodyStyle = { paddingTop: scrollOffset, transitionDuration: "0s" }

    headerStyle = { height: 50 * vh - scrollOffset, transitionDuration: "0s" }

    modalStyle = { height: 50 * vh + scrollOffset - 4.5, paddingTop: 8 * vh + scrollOffset / 3, transitionDuration: "0s" }

    const opacityRatio = 1 - scrollOffset / (50 * vh - 10 * vw)

    titleBgStyle = { transitionDuration: "0.8s", backgroundColor: `rgba(233, 227, 235, ${(0.85 * opacityRatio).toFixed(2)})` }

    videoStyle = { transitionDuration: "0.8s", opacity: `${0.95 * opacityRatio}` }
  }

  // Le header a sa taille def
  else if (vw && scrollOffset >= 50 * vh - 10 * vw) {

    bodyStyle = { paddingTop: offset + 10 * vw + 4.5, transitionDuration: "0s" }

    headerStyle = { height: 50 * vh - offset, transitionDuration: "0s", position: "absolute", top: 0 }

    modalStyle = { height: 50 * vh + offset - 4.5, paddingTop: 8 * vh + offset / 3, transitionDuration: "0s", position: "absolute", top: 10 * vw + 4.5 }

    lineStyle = { position: "absolute", top: 10 * vw, transitionDuration: "0S" }

    rightContainerStyle = { paddingLeft: 29 * vw, width: 100 * vw, transitionDuration: "0S" }

    titleBgStyle = { backgroundColor: `rgba(233, 227, 235, 0)`, transitionDuration: "0.8s" }

    videoStyle = { transitionDuration: "0.8s", opacity: 0 }
  }




  // Fonction activée en scrollant pour enregister le offset du scroll

  const bodyScroll = (height) => {
    setScrollOffset(height)

    const aboutHeight = categoriesRef.current.about.offsetTop
    const skillsHeight = categoriesRef.current.skills.offsetTop
    const projectsHeight = categoriesRef.current.projects.offsetTop
    const containerHeight = rightContainerRef.current.offsetTop

    if (category !== "home" && height < aboutHeight - containerHeight + 8 * vw) {
      setCategory("home")
    }

    if (category !== "about" && height >= aboutHeight - containerHeight + 8 * vw && height < skillsHeight - containerHeight - 4 * vw) {
      setCategory("about")
    }

    if (category !== "skills" && height >= skillsHeight - containerHeight - 4 * vw && height < projectsHeight - containerHeight - 4 * vw) {
      setCategory("skills")
    }

    if (category !== "projects" && height >= projectsHeight - containerHeight - 4 * vw) {
      setCategory("projects")
    }
  }



  // État pour la catégorie choisie

  const [category, setCategory] = useState('home')



  useEffect(() => {

    // Déclenchement des timings d'animation

    setTimeout(() => setAnimationsBegin(true), 600)
    setTimeout(() => setAnimations2Begin(true), 1000)
    setTimeout(() => setAnimations3Begin(true), 1800)
    setTimeout(() => setAnimations4Begin(true), 2400)
    setTimeout(() => setAnimations5Begin(true), 2700)
    setTimeout(() => setAnimationsEnd(true), 9000)

  }, [])



  // Variable de className pour changement de styles pour les animations du début

  let titleBackground = !animations2Begin ? styles.titleBackground1 : styles.titleBackground2

  const gradientBackgroundHeader = !animationsBegin ? styles.gradientBackgroundHeader1 : styles.gradientBackgroundHeader2

  let headerGradientLine = !animationsBegin ? styles.headerGradientLine1 : styles.headerGradientLine2

  let modal = !animations3Begin ? styles.modal1 : styles.modal2

  const buttonContainer = !animations4Begin ? styles.buttonContainer1 : styles.buttonContainer2


  let rightContainer = !animations5Begin ? styles.rightContainer1 : styles.rightContainer2

  let backgroundVideo = !animationsBegin ? styles.backgroundVideo0 : styles.backgroundVideo1

  if (animations2Begin) { backgroundVideo = styles.backgroundVideo2 }


  if (animationsEnd) {
    titleBackground = styles.titleBackground3
    headerGradientLine = styles.headerGradientLine3
    modal = styles.modal3
    rightContainer = styles.rightContainer3
    backgroundVideo = styles.backgroundVideo3
  }




  // useRef pour scroller jusqu'à la catégorie choisie

  const categoriesRef = useRef({})
  const bodyRef = useRef(null)
  const rightContainerRef = useRef(null)




  // Fonction déclenchée en cliquant sur une catégorie pour scroller jusqu'à celle ci

  const categoryClick = (cat) => {
    const categoryToScroll = categoriesRef.current[cat]
    const containerToScroll = bodyRef.current

    const distanceToScroll = cat === "home" ? 0 : categoryToScroll.offsetTop - rightContainerRef.current.offsetTop + 50 * vh - 14 * vw

    containerToScroll.scroll({
      top: distanceToScroll,
      behavior: "smooth"
    })

    setCategory(cat)
  }





  // Affichage conditionnel des boutons et de leurs lignes en fonction de la catégorie sélectionnée

  const categoryButton0 = category === "home" ? styles.button3 : styles.button1
  const categoryButton1 = category === "about" ? styles.button2 : styles.button1
  const categoryButton2 = category === "skills" ? styles.button2 : styles.button1
  const categoryButton3 = category === "projects" ? styles.button3 : styles.button1
  const categoryButton4 = category === "contact" ? styles.button3 : styles.button1

  const categoryLine0 = category === "home" ? styles.categoryLine2 : styles.categoryLine1

  const categoryLine1 = category === "about" ? styles.categoryLine2 : styles.categoryLine1

  const categoryLine2 = category === "skills" ? styles.categoryLine2 : styles.categoryLine1

  const categoryLine3 = category === "projects" ? styles.categoryLine2 : styles.categoryLine1

  const categoryLine4 = category === "contact" ? styles.categoryLine2 : styles.categoryLine1



  // Styles conditionnels pour les containers des compétences

  let skill1
  let skill2
  let skill3

  if (categoriesRef.current.skills && scrollOffset + 100 * vh < categoriesRef.current.skills.offsetTop + 17 * vw) {
    skill1 = { left: -20 * vw, opacity: 0, transitionDuration: "3s", marginRight: 600 }
    skill2 = { marginRight: -40 * vw, opacity: 0, transitionDuration: "3s" }
    skill3 = { marginTop: 40 * vw, opacity: 0, transitionDuration: "3s" }
  }


  // Styles conditionnels pour les containers des projets

  let project1 = {}
  let project2

  if (categoriesRef.current.projects && scrollOffset + 100 * vh < categoriesRef.current.projects.offsetTop + 17 * vw) {
    project1 = { width: 12 * vw, height: 12.5 * vw, opacity: 0, transitionDuration: "3s", margin : 6*vw,}
  }

  if (categoriesRef.current.projects && scrollOffset + 100 * vh < categoriesRef.current.projects.offsetTop + 44 * vw) {
    project2 = { width: 12 * vw, height: 12.5 * vw, opacity: 0, transitionDuration: "3s", margin : 6*vw,}
  }




  return (
    <div className={styles.body} onScroll={(e) => { bodyScroll(e.target.scrollTop) }} style={bodyStyle} ref={bodyRef}>

      <div className={styles.headerContainer} style={headerStyle} >

        <video src="/Header-Video.mp4" className={backgroundVideo} style={videoStyle} autoPlay={true} loop={true} muted={true} ></video>

        <div className={titleBackground} style={titleBgStyle}>
          <div className={gradientBackgroundHeader}>
            {/* <h1 className={styles.title}>LOG ME UP</h1> */}
            <h1 className={styles.title}>Julien Furic</h1>
            <h3 className={styles.subTitle}>Développeur d'applications web et mobile</h3>
          </div>
        </div>
      </div>

      <div className={styles.headerLineContainer} style={lineStyle}>
        <div className={headerGradientLine}></div>
      </div>


      <div className={styles.mainContainer}>


        <div className={modal} style={modalStyle}>

          <div className={buttonContainer}>
            <div className={categoryButton0} onClick={() => categoryClick("home")}>
              <div className={categoryLine0}></div>
              <h5 className={styles.category}>Accueil</h5>
            </div>
            <div className={categoryButton1} onClick={() => categoryClick("about")}>
              <div className={categoryLine1}></div>
              <h5 className={styles.category}>Présentation</h5>
            </div>
            <div className={categoryButton2} onClick={() => categoryClick("skills")}>
              <div className={categoryLine2}></div>
              <h5 className={styles.category}>Compétences</h5>
            </div>
            <div className={categoryButton3} onClick={() => categoryClick("projects")}>
              <div className={categoryLine3}></div>
              <h5 className={styles.category}>Projets</h5>
            </div>
            <div className={categoryButton4} onClick={() => categoryClick("contact")}>
              <div className={categoryLine4}></div>
              <h5 className={styles.category}>Contact</h5>
            </div>
          </div>

        </div>


        <div className={rightContainer} style={rightContainerStyle} ref={rightContainerRef} >


          <h3 className={styles.categoryTitle} ref={(m) => categoriesRef.current.about = m} >Présentation</h3>
          <div className={styles.gradientTextContainer}>
            <h4 className={styles.categorySubtitle}>À propos de moi</h4>
          </div>


          {/* <div className={styles.avatarContainer}>
            <Image src="/ju.jpg" alt="icone d'un avatar de personnage" fill={true} className={styles.avatar} ></Image>
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


          <h3 className={styles.categoryTitle} ref={(m) => categoriesRef.current.skills = m} >Compétences</h3>
          <div className={styles.gradientTextContainer2}>
            <h4 className={styles.categorySubtitle}>Mes outils de travail</h4>
          </div>

          <div className={styles.toolsCategoriesContainer1}>

            <div className={styles.rectangleGradient} style={skill1}>
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

            <div className={styles.rectangleGradient} style={skill2}>
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

            <div className={styles.rectangleGradient} style={skill3}>
              <h6 className={styles.skillTitle}>Vidéo / Graphisme</h6>
              <div className={styles.toolsContainer}>

                <div className={styles.tool}>
                  <p className={styles.toolText}>Premiere</p>
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


          <h3 className={styles.categoryTitle} ref={(m) => categoriesRef.current.projects = m} >Projets</h3>
          <div className={styles.gradientTextContainer2}>
            <h4 className={styles.categorySubtitle}>Quelques exemples de mon travail</h4>
          </div>

          <div className={styles.projectsContainer}>

            <div className={styles.projectsLine1}>

                <div className={styles.squareGradient2} style={Object.assign({ cursor: "auto" }, project1)}>
                  <h6 className={styles.projectTitle}>Boost Up</h6>
                  <div className={styles.projectImgContainer}>
                    <video src="/Test Boost Up.mp4" className={styles.boostUpVideo} autoPlay={true} loop={true} muted={true} ></video>
                  </div>
                  <p className={styles.projectSubtitle}>
                    Appli de coaching pour l'entreprise KevFit, bientôt sur App Store et Google Play.
                  </p>
                </div>

                <div className={styles.squareGradient3}
                style={project1} >
                  <h6 className={styles.projectTitle}>Clothe Me Up</h6>
                  <div className={styles.projectImgContainer}>
                    <Image alt="Vignette d'un site internet" fill={true} src="/Clothe-Me-Up2.png" className={styles.projectImg} />
                  </div>
                  <p className={styles.projectSubtitle}>
                    Template pour site de e-commerce 100% fonctionnel.
                  </p>
                </div>

            </div>

            <div className={styles.projectsLine1}>

                <div className={styles.squareGradient2} style={project2}>
                  <h6 className={styles.projectTitle}>Kairos</h6>
                  <div className={styles.projectImgContainer}>
                    <Image alt="Vignette d'un site internet" fill={true} src="/Kairos.png" className={styles.projectImg} />
                  </div>
                  <p className={styles.projectSubtitle}>
                    Site web pour réaliser une étude de marché (projet de fin de formation).
                  </p>
                </div>
            
                <div className={styles.squareGradient3} style={project2}>
                  <h6 className={styles.projectTitle}>Hackatweet</h6>
                  <div className={styles.projectImgContainer}>
                    <Image alt="Vignette d'un site internet" fill={true} src="/Hackatweet.png" className={styles.projectImg} />
                  </div>
                  <p className={styles.projectSubtitle}>
                    Exercice de cours, réplique d'un réseau social.
                  </p>
                </div>

            </div>

          </div>






        </div>


      </div>

    </div>
  );
}

export default Home;
