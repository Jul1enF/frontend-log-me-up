import styles from '../styles/Home.module.css';
import { useState, useEffect, useRef, useLayoutEffect } from 'react'


import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';





function Home() {

  // useEffect  pour quand l'utilisateur rafraichit la page, retour en haut et réinitialisation du scrolloffset.

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);






  // useLayoutEffect pour setter l'état initiale de la source de la vidéo et de vh et vw, après que la page ait monté mais avant qu'elle ne s'affiche

  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0)

  const [src, setSrc] = useState(null)

  useLayoutEffect(() => {
    setVw(window.innerWidth / 100);
    setVh(window.innerHeight / 100)

    if (window.innerWidth / 100 > 6) {
      setSrc("/Header-Video-1.4.mp4")
    } else {
      setSrc("/PhoneHeader-Video-2.mp4")
    }
  }, []);



  // État pour enregistrer la distance scrollée
  const [scrollOffset, setScrollOffset] = useState(0)




  useEffect(() => {
    const handleResize = () => {

      // Pour éviter resize portable quand la barre url disparait
      if (vw <= 6 && window.innerWidth / 100 <= 6 && vw !== 0) { return }

      setVw(window.innerWidth / 100);
      setVh(window.innerHeight / 100)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [vw, vh, scrollOffset]);





  // État et fonction IDF pour valider le chargement de la vidéo du header

  const [videoLoaded, setVideoLoaded] = useState(false)

  const markVideoAsLoaded = () => {
    setVideoLoaded(true)
  }



  // Variables pour enregistrer les changements de style

  // computerOffsetFrontier = limite de scroll/offset à partir de laquelle on ne réajuste plus le style parceque le header a atteint sa taille finale
  const firstComputerHeaderSize = 50 * vh
  const finalComputerHeaderSize = 9 * vw
  const computerOffsetFrontier = firstComputerHeaderSize - finalComputerHeaderSize

  let bodyStyle = videoLoaded ? {} : { display: "none" }
  let buttonContainerStyle = {}
  let modalStyle = {}
  let rightContainerStyle = {}


  // Styles conditionnels en fonction du scroll et de la taille du header


  // ÉCRAN D'ORDINATEUR

  // Le header n'a pas encore sa taille def
  if (vw && vw > 6 && scrollOffset > 0 && scrollOffset < computerOffsetFrontier) {

    bodyStyle = { paddingTop: scrollOffset, transitionDuration: "0s" }

    modalStyle = { height: firstComputerHeaderSize + scrollOffset, paddingTop: 8 * vh + scrollOffset / 4.5, transitionDuration: "0s" }

    const sizeRatio = scrollOffset / (computerOffsetFrontier)

    buttonContainerStyle = { height: 17 * vw + sizeRatio * 4.5 * vw }

  }

  // Le header a sa taille def
  else if (vw && vw > 6 && scrollOffset >= computerOffsetFrontier) {

    bodyStyle = { paddingTop: computerOffsetFrontier + finalComputerHeaderSize, transitionDuration: "0s" }

    modalStyle = { height: firstComputerHeaderSize + computerOffsetFrontier, paddingTop: 8 * vh + computerOffsetFrontier / 4.5, transitionDuration: "0s", position: "absolute", top: finalComputerHeaderSize }

    rightContainerStyle = { paddingLeft: 29 * vw, width: 100 * vw, transitionDuration: "0s" }

    buttonContainerStyle = { height: 17 * vw + 4.5 * vw }
  }


  // PORTABLE : Styles conditionnels en fonction du scroll et de la taille du header

  // phoneOffsetFrontier = limite de scroll/offset à partir de laquelle on ne réajuste plus le style parceque le header a atteint sa taille finale

  const firstPhoneHeaderSize = 85 * vw
  const finalPhoneHeaderSize = 32 * vw
  const phoneOffsetFrontier = firstPhoneHeaderSize - finalPhoneHeaderSize
  const modalSize = 13 * vw


  // Le header n'a pas encore sa taille def
  if (vw && vw <= 6 && scrollOffset > 0 && scrollOffset < phoneOffsetFrontier) {

    rightContainerStyle = { paddingTop: modalSize, transitionDuration: "0s" }

    modalStyle = { top: firstPhoneHeaderSize - scrollOffset }

  }

  // Le header a sa taille def
  else if (vw && vw <= 6 && scrollOffset >= phoneOffsetFrontier) {
    rightContainerStyle = { paddingTop: modalSize, transitionDuration: "0s" }

    modalStyle = { top: finalPhoneHeaderSize }
  }








  // PORTABLE  : Listener de scroll

  useLayoutEffect(() => {
    const windowScroll = () => {

      bodyScroll(window.scrollY)

    }

    window.addEventListener('scroll', windowScroll)

    return () => {
      window.removeEventListener('scroll', windowScroll)
    }

  }, [vw])



  // Fonction activée en scrollant pour enregister le offset du scroll, sélectionner la catégorie visionnée et sur portable scroller dans le container des boutons

  const buttonContainerRef = useRef(null)

  const bodyScroll = (height) => {
    setScrollOffset(height)

    const aboutHeight = categoriesRef.current.about.offsetTop
    const skillsHeight = categoriesRef.current.skills.offsetTop
    const projectsHeight = categoriesRef.current.projects.offsetTop
    const contactHeight = categoriesRef.current.contact.offsetTop
    const containerHeight = rightContainerRef.current.offsetTop

    if (category !== "home" && height < aboutHeight - containerHeight + 8 * vw) {
      setCategory("home")
      // PORTABLE, SCROLLER MENU CATÉGORIES
      if (vw <= 6) {
        categoryClicked === "home" && buttonContainerRef.current.scroll({
          left: 0 * vw,
          behavior: "smooth"
        })
      }
    }
    else if (category !== "about" && height >= aboutHeight - containerHeight + 8 * vw && height < skillsHeight - containerHeight - 4 * vw) {
      setCategory("about")
      // PORTABLE, SCROLLER MENU CATÉGORIES
      if (vw <= 6) {
        //Éviter scroll si la catégorie est juste survolée après un clique dans le menu
        userScrolling && buttonContainerRef.current.scroll({
          left: 0 * vw,
          behavior: "smooth"
        })
        categoryClicked === "about" && buttonContainerRef.current.scroll({
          left: 0 * vw,
          behavior: "smooth"
        })
      }
    }
    else if (category !== "skills" && height >= skillsHeight - containerHeight - 4 * vw && height < projectsHeight - containerHeight - 4 * vw) {
      setCategory("skills")
      // PORTABLE, SCROLLER MENU CATÉGORIES
      if (vw <= 6) {
        //Éviter scroll si la catégorie est juste survolée après un clique dans le menu
        userScrolling && buttonContainerRef.current.scroll({
          left: 22 * vw,
          behavior: "smooth"
        })
        categoryClicked === "skills" && buttonContainerRef.current.scroll({
          left: 22 * vw,
          behavior: "smooth"
        })
      }
    }
    else if (category !== "projects" && height >= projectsHeight - containerHeight - 4 * vw && height < contactHeight - containerHeight - 4 * vw) {
      setCategory("projects")
      // PORTABLE, SCROLLER MENU CATÉGORIES
      if (vw <= 6) {
        //Éviter scroll si la catégorie est juste survolée après un clique dans le menu
        userScrolling && buttonContainerRef.current.scroll({
          left: 170 * vw,
          behavior: "smooth"
        })
        categoryClicked === "projects" &&
          buttonContainerRef.current.scroll({
            left: 170 * vw,
            behavior: "smooth"
          })
      }
    }
    else if (category !== "contact" && height >= contactHeight - containerHeight - 4 * vw) {
      setCategory("contact")
      // PORTABLE, SCROLLER MENU CATÉGORIES
      if (vw <= 6) {
        categoryClicked === "contact" &&
          buttonContainerRef.current.scroll({
            left: 170 * vw,
            behavior: "smooth"
          })
      }
    }
  }


  // État pour la catégorie choisie

  const [category, setCategory] = useState('home')










  // États pour setter les timings d'animation

  const [animationsBegin, setAnimationsBegin] = useState(false)
  const [animations2Begin, setAnimations2Begin] = useState(false)
  const [animations3Begin, setAnimations3Begin] = useState(false)
  const [animations4Begin, setAnimations4Begin] = useState(false)
  const [animations5Begin, setAnimations5Begin] = useState(false)
  const [animationsEnd, setAnimationsEnd] = useState(false)


  // Fonction et useEffect pour le déclenchement des timings d'animations une fois la vidéo chargée

  const timingFunction = () => {
    if (!videoLoaded) { return }

    setTimeout(() => setAnimationsBegin(true), 600)
    setTimeout(() => setAnimations2Begin(true), 1200)
    setTimeout(() => setAnimations3Begin(true), 2800)
    setTimeout(() => setAnimations4Begin(true), 3250)
    setTimeout(() => setAnimations5Begin(true), 3600)
    setTimeout(() => setAnimationsEnd(true), 9000)
  }


  useEffect(() => {
    timingFunction()
  }, [videoLoaded])

// Variable de className pour changement de styles pour les animations du début


  let modal = !animations3Begin ? styles.modal1 : styles.modal2

  let buttonContainer = !animations4Begin ? styles.buttonContainer1 : styles.buttonContainer2


  let rightContainer = styles.rightContainer1
  // ORDINATEUR
  if (vw > 6 && animations5Begin) {
    rightContainer = styles.rightContainer2
  }
  // PORTABLE
  if (vw <= 6 && animations4Begin) {
    rightContainer = styles.rightContainer2
  }


  // Nouvelles classeName avec réglages def et sans 'transition : duration' pour les cas de resize de la fenêtre
  if (animationsEnd) {
    modal = styles.modal3
    rightContainer = styles.rightContainer3
    buttonContainer = styles.buttonContainer3
  }



  // Si l'on scroll, les animations s'arrêtent
  if (scrollOffset > 0 && !animationsEnd) {
    setAnimationsEnd(true)
  }








  // useRef pour scroller jusqu'à la catégorie choisie

  const categoriesRef = useRef({})
  const bodyRef = useRef(null)
  const rightContainerRef = useRef(null)




  // Fonction déclenchée en cliquant sur une catégorie pour scroller jusqu'à celle ci

  // États pour ne pas scroller dans la modal du PORTABLE quand la fonction scroll opère
  const [userScrolling, setUserScrolling] = useState(true)
  const [categoryClicked, setCategoryClicked] = useState('')

  const categoryClick = (cat) => {
    const categoryToScroll = categoriesRef.current[cat]
    const containerToScroll = bodyRef.current

    // Offset différent Portable / Ordi
    const categoryOffset = vw > 6 ? - finalComputerHeaderSize - 5 * vw : - finalPhoneHeaderSize - 20 * vw

    const distanceToScroll = cat === "home" ? 0 : categoryToScroll.offsetTop + categoryOffset

    // ORDINATEUR
    vw > 6 && containerToScroll.scroll({
      top: distanceToScroll,
      behavior: "smooth"
    })
    // PORTABLE
    vw <= 6 && window.scroll({
      top: distanceToScroll,
      behavior: "smooth"
    })

    setUserScrolling(false)
    setTimeout(() => setUserScrolling(true), 500)
    setCategoryClicked(cat)
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









  return (
    <div className={styles.body} onScroll={(e) => {
      bodyScroll(e.target.scrollTop)
      console.log("scroll height :", e.target.scrollTop)
    }} style={bodyStyle} ref={bodyRef} >


      <Header scrollOffset={scrollOffset} vw={vw} vh={vh} firstComputerHeaderSize={firstComputerHeaderSize} finalComputerHeaderSize={finalComputerHeaderSize} computerOffsetFrontier={computerOffsetFrontier} markVideoAsLoaded={markVideoAsLoaded}
        firstPhoneHeaderSize={firstPhoneHeaderSize} finalPhoneHeaderSize={finalPhoneHeaderSize}
        phoneOffsetFrontier={phoneOffsetFrontier}
        animationsBegin={animationsBegin}
        animations2Begin={animations2Begin}
        animationsEnd={animationsEnd}
        src={src}
      />


      <div className={styles.mainContainer} >


        <div className={modal} style={modalStyle}>

          <div className={buttonContainer} style={buttonContainerStyle} ref={buttonContainerRef}>
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


          


          <div ref={(m) => categoriesRef.current.about = m}>
            <About />
          </div>





          <div ref={(m) => categoriesRef.current.skills = m} >
            <Skills scrollOffset={scrollOffset} vh={vh} vw={vw} skillContainer={categoriesRef.current.skills} />
          </div>



          


            <div ref={(m) => categoriesRef.current.projects = m} >
              <Projects scrollOffset={scrollOffset} projectsContainer={categoriesRef.current.projects} vh={vh} vw={vw} animationsEnd={animationsEnd} />
            </div>





          <div ref={(m) => categoriesRef.current.contact = m} >
            <Contact />
          </div>
          


       

        </div>


      </div>

    </div>
  );
}

export default Home;
