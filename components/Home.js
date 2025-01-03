import styles from '../styles/Home.module.css';
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Laptop } from 'react-bootstrap-icons';
import { Phone } from 'react-bootstrap-icons';
import { Palette } from 'react-bootstrap-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons' 

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
import { HiMiniXMark } from "react-icons/hi2";


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

  // Offset à ne pas dépasser pour que le Header ne fasse pas moins de 10vw
  const offset = vw ? 50 * vh - 9 * vw : 0

  let bodyStyle = {}
  let headerStyle = {}
  let videoStyle = {}
  let titleBgStyle = {}
  let buttonContainerStyle = {}
  let modalStyle = {}
  let rightContainerStyle = {}



  // Styles conditionnels en fonction du scroll et de la taille du header


  // Le header n'a pas encore sa taille def
  if (scrollOffset > 0 && scrollOffset < offset) {
    !animationsEnd && setAnimationsEnd(true)

    bodyStyle = { paddingTop: scrollOffset, transitionDuration: "0s" }

    headerStyle = { height: 50 * vh - scrollOffset, transitionDuration: "0s" }

    modalStyle = { height: 50 * vh + scrollOffset, paddingTop: 8 * vh + scrollOffset / 4.5, transitionDuration: "0s" }

    const sizeRatio = scrollOffset / (offset)

    buttonContainerStyle = { height: 17 * vw + sizeRatio * 4.5 * vw }

    const opacityRatio = 1 - scrollOffset / (offset)

    videoStyle = { transitionDuration: "0.8s", opacity: `${1 * opacityRatio}` }

    titleBgStyle = { transitionDuration: "0.8s", opacity: `${1 * opacityRatio}` }
  }

  // Le header a sa taille def
  else if (vw && scrollOffset >= offset) {

    bodyStyle = { paddingTop: offset + 9 * vw, transitionDuration: "0s" }

    headerStyle = { height: 9 * vw, transitionDuration: "0s", position: "absolute", top: 0 }

    modalStyle = { height: 50 * vh + offset, paddingTop: 8 * vh + offset / 4.5, transitionDuration: "0s", position: "absolute", top: 9 * vw }

    rightContainerStyle = { paddingLeft: 29 * vw, width: 100 * vw, transitionDuration: "0s" }

    buttonContainerStyle = { height: 17 * vw + 4.5 * vw }

    videoStyle = { transitionDuration: "0.8s", opacity: 0 }

    titleBgStyle = { transitionDuration: "0.8s", opacity: 0 }
  }




  // Fonction activée en scrollant pour enregister le offset du scroll et enregistrer la catégorie visionnée

  const bodyScroll = (height) => {
    setScrollOffset(height)

    const aboutHeight = categoriesRef.current.about.offsetTop
    const skillsHeight = categoriesRef.current.skills.offsetTop
    const projectsHeight = categoriesRef.current.projects.offsetTop
    const contactHeight = categoriesRef.current.contact.offsetTop
    const containerHeight = rightContainerRef.current.offsetTop

    if (category !== "home" && height < aboutHeight - containerHeight + 8 * vw) {
      setCategory("home")
    }
    else if (category !== "about" && height >= aboutHeight - containerHeight + 8 * vw && height < skillsHeight - containerHeight - 4 * vw) {
      setCategory("about")
    }
    else if (category !== "skills" && height >= skillsHeight - containerHeight - 4 * vw && height < projectsHeight - containerHeight - 4 * vw) {
      setCategory("skills")
    }
    else if (category !== "projects" && height >= projectsHeight - containerHeight - 4 * vw && height < contactHeight - containerHeight - 4 * vw) {
      setCategory("projects")
    }
    else if (height >= contactHeight - containerHeight - 4 * vw) {
      setCategory("contact")
    }
  }



  // État pour la catégorie choisie

  const [category, setCategory] = useState('home')



  useEffect(() => {

    // Déclenchement des timings d'animation

    setTimeout(() => setAnimationsBegin(true), 600)
    setTimeout(() => setAnimations2Begin(true), 1200)
    setTimeout(() => setAnimations3Begin(true), 2800)
    setTimeout(() => setAnimations4Begin(true), 3500)
    setTimeout(() => setAnimations5Begin(true), 3800)
    // setTimeout(() => setAnimationsEnd(true), 9000)

  }, [])



  // Variable de className pour changement de styles pour les animations du début

  let titleBackground = !animationsBegin ? styles.titleBackground1 : styles.titleBackground2

  let headerTextContainer = !animationsBegin ? styles.headerTextContainer1 : styles.headerTextContainer2

  let modal = !animations3Begin ? styles.modal1 : styles.modal2

  let buttonContainer = !animations4Begin ? styles.buttonContainer1 : styles.buttonContainer2


  let rightContainer = !animations5Begin ? styles.rightContainer1 : styles.rightContainer2

  let backgroundVideo = !animations2Begin ? styles.backgroundVideo1 : styles.backgroundVideo2


  let headerContainer = styles.headerContainer1

  // Nouvelles classeName avec réglages def et plus de transition duration pour les cas de resize de la fenêtre
  if (animationsEnd) {
    titleBackground = styles.titleBackground3
    modal = styles.modal3
    rightContainer = styles.rightContainer3
    backgroundVideo = styles.backgroundVideo3
    headerContainer = styles.headerContainer2
    buttonContainer = styles.buttonContainer3
  }




  // useRef pour scroller jusqu'à la catégorie choisie

  const categoriesRef = useRef({})
  const bodyRef = useRef(null)
  const rightContainerRef = useRef(null)




  // Fonction déclenchée en cliquant sur une catégorie pour scroller jusqu'à celle ci

  const categoryClick = (cat) => {
    const categoryToScroll = categoriesRef.current[cat]
    const containerToScroll = bodyRef.current

    const distanceToScroll = cat === "home" ? 0 : categoryToScroll.offsetTop - rightContainerRef.current.offsetTop + 50 * vh - 11 * vw

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

  if (categoriesRef.current.skills && scrollOffset + 100 * vh < categoriesRef.current.skills.offsetTop + 14 * vw) {
    skill1 = { left: -20 * vw, opacity: 0, transitionDuration: "3s", marginRight: 600 }
    skill2 = { marginRight: -40 * vw, opacity: 0, transitionDuration: "3s" }
    skill3 = { marginTop: 10 * vw, opacity: 0, transitionDuration: "3s" }
  }


  // Styles conditionnels pour les containers des projets

  let project1
  let project2
  let project3

  if (categoriesRef.current.projects && scrollOffset + 100 * vh < categoriesRef.current.projects.offsetTop + 17 * vw) {
    project1 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
  }

  if (categoriesRef.current.projects && scrollOffset + 100 * vh < categoriesRef.current.projects.offsetTop + 42 * vw) {
    project2 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
  }

  if (categoriesRef.current.projects && scrollOffset + 100 * vh < categoriesRef.current.projects.offsetTop + 72 * vw) {
    project3 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
  }





  // États et styles conditionnel pour l'affichage des modals et de leur masque

  const [modal1Visible, setModal1Visible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)

  const modal1Ref = useRef(null)

  const modal1ViewportOffset = modal1Ref.current && modal1Ref.current.offsetTop - scrollOffset

  const modal1Style = modal1Visible ? { top: - modal1ViewportOffset + 3 * vw, } : {}

  const mask1 = modal1Visible ? styles.maskOn : styles.maskOff
  const modal1 = modal1Visible ? styles.squareGradient5 : styles.squareGradient4

  const videoContainer1Style = modal1Visible ? styles.projectVideoContainer : styles.projectImgContainer



  const modal2Ref = useRef(null)

  const modal2ViewportOffset = modal2Ref.current && modal2Ref.current.offsetTop - scrollOffset

  const modal2Style = modal2Visible ? { top: - modal2ViewportOffset + 3 * vw, } : {}

  const mask2 = modal2Visible ? styles.maskOn : styles.maskOff
  const modal2 = modal2Visible ? styles.squareGradient5 : styles.squareGradient4

  const videoContainer2Style = modal2Visible ? styles.projectVideoContainer : styles.projectImgContainer



  // Fonction et état pour copier adresse mail

  const [copyVisible, setCopyVisible]=useState(false)

  const copy = !copyVisible ? styles.copy1 : styles.copy2

  const copyText = () => {
    navigator.clipboard.writeText("contact@julien-furic.com") 
    setCopyVisible(true)
    setTimeout(()=> setCopyVisible(false), 1500)
  }





  return (
    <div className={styles.body} onScroll={(e) => { bodyScroll(e.target.scrollTop) }} style={bodyStyle} ref={bodyRef}>

      <div className={headerContainer} style={headerStyle} >

        <video src="/Header-Video-1.4.mp4" className={backgroundVideo} style={videoStyle} autoPlay={true} loop={true} muted={true}></video>


        <div className={headerTextContainer}>
          <div className={titleBackground} style={titleBgStyle}></div>
          <h1 className={styles.title}>Julien Furic</h1>
          <h3 className={styles.subTitle}>Développeur d'applications web et mobile</h3>
        </div>


      </div>


      <div className={styles.mainContainer}>


        <div className={modal} style={modalStyle}>

          <div className={buttonContainer} style={buttonContainerStyle}>
            <button type="button" className={categoryButton0} onClick={() => categoryClick("home")}>
              <div className={categoryLine0}></div>
              <h5 className={styles.category}>Accueil</h5>
            </button>
            <button type="button" className={categoryButton1} onClick={() => categoryClick("about")}>
              <div className={categoryLine1}></div>
              <h5 className={styles.category}>Présentation</h5>
            </button>
            <button type="button" className={categoryButton2} onClick={() => categoryClick("skills")}>
              <div className={categoryLine2}></div>
              <h5 className={styles.category}>Compétences</h5>
            </button>
            <button type="button" className={categoryButton3} onClick={() => categoryClick("projects")}>
              <div className={categoryLine3}></div>
              <h5 className={styles.category}>Projets</h5>
            </button>
            <button type="button" className={categoryButton4} onClick={() => categoryClick("contact")}>
              <div className={categoryLine4}></div>
              <h5 className={styles.category}>Contact</h5>
            </button>
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

          <div className={styles.projectsLine1} ref={modal1Ref}>

            <div className={mask1} onClick={() => {
              modal1Visible && setModal1Visible(false)
            }}></div>

            <div className={styles.squareRevealContainer1}>
              <div className={styles.squareGradient2} style={project1} onClick={() => {
                !modal1Visible && setModal1Visible(true)
              }} >
                <h6 className={styles.projectTitle}>Boost Up</h6>
                <div className={videoContainer1Style}>
                  <video src="/BoostUp.mp4" className={styles.projectVideo} autoPlay={false} loop={true} muted={true} alt="vidéo d'un site internet"></video>
                </div>
                <p className={styles.projectSubtitle}>
                  Appli de coaching pour l'entreprise KevFit, bientôt sur App Store et Google Play.
                </p>
              </div>
            </div>

            <div className={modal1} style={modal1Style} >
              <h6 className={styles.projectTitle}>Boost Up</h6>
              <HiMiniXMark className={styles.closeIcon} onClick={() => setModal1Visible(false)} style={!modal1Visible && { opacity: 0, transitionDuration: "0.3s" }} />
              <div className={videoContainer1Style}>
                <video src="/BoostUp.mp4" className={styles.projectVideo} autoPlay={false} loop={true} muted={true} alt="vidéo d'un site internet" ></video>
              </div>
              <p className={styles.projectSubtitle}>
                Appli de coaching pour l'entreprise KevFit, bientôt sur App Store et Google Play.
              </p>
            </div>

            <Link href='https://frontend-clothe-me-up.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainer2}  >
                <div className={styles.squareGradient3}
                  style={project1} >
                  <h6 className={styles.projectTitle}>Clothe Me Up</h6>
                  <div className={styles.projectImgContainer}>
                    <Image alt="Vignette d'un site internet" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw" fill={true} src="/Clothe-Me-Up2.png" className={styles.projectImg} />
                  </div>
                  <p className={styles.projectSubtitle}>
                    Template pour site de e-commerce 100% fonctionnel.
                  </p>
                </div>
              </div>
            </Link>

          </div>

          <div className={styles.projectsLine1}>

            <Link href='https://kairos-fronted.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainer1}>
                <div className={styles.squareGradient2} style={project2}>
                  <h6 className={styles.projectTitle}>Kairos</h6>
                  <div className={styles.projectImgContainer}>
                    <Image alt="Vignette d'un site internet" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw" fill={true} src="/Kairos.png" className={styles.projectImg} />
                  </div>
                  <p className={styles.projectSubtitle}>
                    Site web pour réaliser une étude de marché (projet de fin de formation).
                  </p>
                </div>
              </div>
            </Link>

            <Link href='https://frontend-twitter2.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainer2}  >
                <div className={styles.squareGradient3} style={project2}>
                  <h6 className={styles.projectTitle}>Hackatweet</h6>
                  <div className={styles.projectImgContainer}>
                    <Image alt="Vignette d'un site internet" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw" src="/Hackatweet.png" className={styles.projectImg} />
                  </div>
                  <p className={styles.projectSubtitle}>
                    Exercice de formation, réplique d'un réseau social.
                  </p>
                </div>
              </div>
            </Link>

          </div>

          <div className={styles.projectsLine2} ref={modal2Ref}>

            <div className={mask2} onClick={() => {
              modal2Visible && setModal2Visible(false)
            }}></div>

            <div className={styles.squareRevealContainer1}>
              <div className={styles.squareGradient2} style={project3} onClick={() => {
                !modal2Visible && setModal2Visible(true)
              }} >
                <h6 className={styles.projectTitle}>ChatApp</h6>
                <div className={videoContainer2Style}>
                  <video src="/ChatApp.mp4" className={styles.projectVideo} autoPlay={false} loop={true} muted={true} alt="vidéo d'un site internet"></video>
                </div>
                <p className={styles.projectSubtitle}>
                  Exercice de formation, application de chat (messages et vocaux).
                </p>
              </div>
            </div>
            <div className={modal2} style={modal2Style} >
              <h6 className={styles.projectTitle}>ChatApp</h6>
              <HiMiniXMark className={styles.closeIcon} onClick={() => setModal2Visible(false)} style={!modal2Visible && { opacity: 0, transitionDuration: "0.3s" }} />
              <div className={videoContainer2Style}>
                <video src="/ChatApp.mp4" className={styles.projectVideo} autoPlay={true} loop={true} muted={true} alt="vidéo d'un site internet" ></video>
              </div>
              <p className={styles.projectSubtitle}>
                Exercice de formation, application de chat (messages et vocaux).
              </p>
            </div>

            <Link href='https://morningnews-frontend-zeta.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainer2}>
                <div className={styles.squareGradient3}
                  style={project3} >
                  <h6 className={styles.projectTitle}>Morning News</h6>
                  <div className={styles.projectImgContainer}>
                    <Image alt="Vignette d'un site internet" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw" fill={true} src="/Morningnews.png" className={styles.projectImg} />
                  </div>
                  <p className={styles.projectSubtitle}>
                    Exercice de formation, site d'informations sur la tech.
                  </p>
                </div>
              </div>
            </Link>

          </div>


          <h3 className={styles.categoryTitle} ref={(m) => categoriesRef.current.contact = m} >Contact</h3>
          <div className={styles.gradientTextContainer2}>
            <h4 className={styles.categorySubtitle}>Mes coordonnées</h4>
          </div>

          <div className={styles.textContainer2}>
            <p className={styles.paragraph2}>Une envie ? Une idée ? Une question ? N'hésitez pas à me contacter ! </p>
            <p className={styles.paragraph2}>Vous pouvez me joindre à tout moment en m'écrivant à l'adresse mail suivante : </p>

            <p className={copy}>Adresse mail copiée !</p>

          </div>

          <div className={styles.gradientMail} onClick={() => copyText()} >
            <h6 className={styles.mail}>contact@julien-furic.com</h6>

              {/* <FontAwesomeIcon icon={faClipboard} className={styles.copyIcon} onClick={() => copyText()}/> */}

          </div>

          <div className={styles.gradientMail2} onClick={() => copyText()}>
            <div className={styles.gradientShadow}></div>
            <h6 className={styles.mail2}>contact@julien-furic.com</h6>
          </div>

          <p className={styles.paragraph2}> À très bientôt ! :) </p>

        </div>


      </div>

    </div>
  );
}

export default Home;
