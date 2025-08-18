import styles from "../styles/Projects.module.css"
import { useState, useRef } from "react";

import Link from 'next/link';
import Image from 'next/image';

import { HiMiniXMark } from "react-icons/hi2";



export default function Projects(props) {

  const { scrollOffset, projectsContainer, vh, vw, animationsEnd } = props




  // Styles conditionnels pour les containers des projets

  let project1
  let project2
  let project3
  let project4
  let project5
  let project6

  // ORDINATEUR
  if (vw > 6) {
    if (projectsContainer && scrollOffset + 100 * vh < projectsContainer.offsetTop + 17 * vw) {
      project1 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
      project2 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
    }

    if (projectsContainer && scrollOffset + 100 * vh < projectsContainer.offsetTop + 42 * vw) {
      project3 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
      project4 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
    }

    if (projectsContainer && scrollOffset + 100 * vh < projectsContainer.offsetTop + 72 * vw) {
      project5 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
      project6 = { width: 18 * vw, height: 19.2 * vw, opacity: 0, transitionDuration: "3s", }
    }
  }

  // PORTABLE
  if (vw <= 6) {
    if (projectsContainer && scrollOffset + 100 * vh < projectsContainer.offsetTop + 55 * vw) {
      project1 = { width: 55 * vw, height: 55 * vw, opacity: 0, transitionDuration: "1s", fontSize: 2.9 * vw }
    }
    if (projectsContainer && scrollOffset + 100 * vh < projectsContainer.offsetTop + 110 * vw) {
      project2 = { width: 55 * vw, height: 55 * vw, opacity: 0, transitionDuration: "1s", fontSize: 2.9 * vw }
    }
    if (projectsContainer && scrollOffset + 100 * vh < projectsContainer.offsetTop + 190 * vw) {
      project3 = { width: 55 * vw, height: 55 * vw, opacity: 0, transitionDuration: "1s", fontSize: 2.9 * vw }
      project4 = { width: 55 * vw, height: 55 * vw, opacity: 0, transitionDuration: "1s", fontSize: 2.9 * vw }
      project5 = { width: 55 * vw, height: 55 * vw, opacity: 0, transitionDuration: "1s", fontSize: 2.9 * vw }
      project6 = { width: 55 * vw, height: 55 * vw, opacity: 0, transitionDuration: "1s", fontSize: 2.9 * vw }
    }
  }






  // États et styles conditionnel pour l'affichage des modals et de leur masque
  // R1C1 = Row 1 Column 1

  const [modalR1C1Visible, setModalR1C1Visible] = useState(false)
  const [modalR1C2Visible, setModalR1C2Visible] = useState(false)
  const [modalR2C1Visible, setModalR2C1Visible] = useState(false)





  // Réglage du offset top de la modal par rapport au viewport, pour qu'elle reste fixe dans l'écran (car normalement réglée par rapport à son parent vu qu'en position : absolute)
  const projectsLine1Ref = useRef(null)

  const projectsLine1ViewportOffset = projectsLine1Ref.current && projectsLine1Ref.current.offsetTop - scrollOffset

  const maskRow1 = (modalR1C1Visible || modalR1C2Visible) ? styles.maskOn : styles.maskOff


  let modalR1C1Style
  // ORDINATEUR
  if (vw > 6 && modalR1C1Visible) {
    modalR1C1Style = { top: - projectsLine1ViewportOffset + 3 * vw, }
  }
  // PORTABLE
  if (vw <= 6 && modalR1C1Visible) {
    modalR1C1Style = { top: - projectsLine1ViewportOffset + 20 * vw, }
  }

  const modalR1C1 = modalR1C1Visible ? styles.bigProjectModal : styles.smallLeftProjectModal

  const videoContainerR1C1Style = modalR1C1Visible ? styles.projectVideoContainer : styles.projectImgContainer



  let modalR1C2Style
  // ORDINATEUR
  if (vw > 6 && modalR1C2Visible) {
    modalR1C2Style = { top: - projectsLine1ViewportOffset + 3 * vw, }
  }
  // PORTABLE
  if (vw <= 6 && modalR1C2Visible) {
    modalR1C2Style = { top: - projectsLine1ViewportOffset + 20 * vw, }
  }

  const modalR1C2 = modalR1C2Visible ? styles.bigProjectModal : styles.smallRightProjectModal

  const videoContainerR1C2Style = modalR1C2Visible ? styles.projectVideoContainer : styles.projectImgContainer





  const projectsLine2Ref = useRef(null)

  const projectsLine2ViewportOffset = projectsLine2Ref.current && projectsLine2Ref.current.offsetTop - scrollOffset

  const maskRow2 = modalR2C1Visible ? styles.maskOn : styles.maskOff

  let modalR2C1Style
  // ORDINATEUR
  if (vw > 6 && modalR2C1Visible) {
    modalR2C1Style = { top: - projectsLine2ViewportOffset + 3 * vw, }
  }
  // PORTABLE
  if (vw <= 6 && modalR2C1Visible) {
    modalR2C1Style = { top: - projectsLine2ViewportOffset + 20 * vw, }
  }

  const modalR2C1 = modalR2C1Visible ? styles.bigProjectModal : styles.smallLeftProjectModal

  const videoContainerR2C1Style = modalR2C1Visible ? styles.projectVideoContainer : styles.projectImgContainer






  return (
    <>
      <h3 className={styles.categoryTitle} >Projets</h3>
      <div className={styles.gradientTextContainer2}>
        <h4 className={styles.categorySubtitle}>Quelques exemples de mon travail</h4>
      </div>




      <div className={styles.projectsLine} ref={projectsLine1Ref}>

        <div className={maskRow1} onClick={() => {
          modalR1C1Visible && setModalR1C1Visible(false)
          modalR1C2Visible && setModalR1C2Visible(false)
        }}></div>


        <div className={styles.squareRevealContainerLeftOrTopLine}>
          <div className={styles.leftProjectItem} style={project1} onClick={() => {
            !modalR1C1Visible && setModalR1C1Visible(true)
          }} >
            <h6 className={styles.projectTitle}>Sport Amat</h6>
            <div className={videoContainerR1C1Style}>
              {animationsEnd && <video src="/Sport-Amat.mp4" className={styles.projectVideo} autoPlay={true} loop={true} playsInline muted={true} alt="vidéo d'un site internet"></video>}
            </div>
            <p className={styles.projectSubtitle}>
              Appli de streams sportifs pour l'entreprise Sport Amat, bientôt sur IOS et Android.
            </p>
          </div>
        </div>

        {/* Utilisation de modals pour avoir des temps de transition différents entre 1ère apparition et agrandissement */}

        <div className={modalR1C1} style={modalR1C1Style} >
          <h6 className={styles.projectTitle}>Sport Amat</h6>
          <HiMiniXMark className={styles.closeIcon} onClick={() => setModalR1C1Visible(false)} />
          <div className={videoContainerR1C1Style}>
            {animationsEnd && <video src="/Sport-Amat.mp4" className={styles.projectVideo} autoPlay={true} loop={true} muted={true} playsInline alt="vidéo d'un site internet" ></video>}
          </div>
          <p className={styles.projectSubtitle}>
             Appli de streams sportifs pour l'entreprise Sport Amat, bientôt sur IOS et Android.
          </p>
        </div>




        <div className={styles.squareRevealContainerRightOrBottomLine}>
          <div className={styles.rightProjectItem} style={project2} onClick={() => {
            !modalR1C2Visible && setModalR1C2Visible(true)
          }} >
            <h6 className={styles.projectTitle}>Me Baudelin</h6>
            <div className={videoContainerR1C2Style}>
              {animationsEnd && <video src="/Me-Baudelin.mp4" className={styles.projectVideo} autoPlay={true} loop={true} playsInline muted={true} alt="vidéo d'un site internet"></video>}
            </div>
            <p className={styles.projectSubtitle}>
              Appli de conseils légaux pour le cabinet Baudelin, dispo sur IOS et Android stores.
            </p>
          </div>
        </div>

        <div className={modalR1C2} style={modalR1C2Style} >
          <h6 className={styles.projectTitle}>Me Baudelin</h6>
          <HiMiniXMark className={styles.closeIcon} onClick={() => setModalR1C2Visible(false)} />
          <div className={videoContainerR1C2Style}>
            {animationsEnd && <video src="/Me-Baudelin.mp4" className={styles.projectVideo} autoPlay={true} loop={true} muted={true} playsInline alt="vidéo d'un site internet" ></video>}
          </div>
          <p className={styles.projectSubtitle}>
            Appli de conseils légaux pour le cabinet Baudelin, dispo sur IOS et Android stores.
          </p>
        </div>


      </div>





      <div className={styles.projectsLine} ref={projectsLine2Ref}>


        <div className={styles.squareRevealContainerLeftOrTopLine}>
          <div className={styles.leftProjectItem} style={project3} onClick={() => {
            !modalR2C1Visible && setModalR2C1Visible(true)
          }} >
            <h6 className={styles.projectTitle}>Boost Up</h6>
            <div className={videoContainerR2C1Style}>
              {animationsEnd && <video src="/BoostUp.mp4" className={styles.projectVideo} autoPlay={true} loop={true} playsInline muted={true} alt="vidéo d'un site internet"></video>}
            </div>
            <p className={styles.projectSubtitle}>
              Appli de coaching pour l'entreprise Kevfit, dispo sur IOS et Android stores.
            </p>
          </div>
        </div>
        <div className={modalR2C1} style={modalR2C1Style} >
          <h6 className={styles.projectTitle}>Boost Up</h6>
          <HiMiniXMark className={styles.closeIcon} onClick={() => setModalR2C1Visible(false)} />
          <div className={videoContainerR2C1Style}>
            {animationsEnd && <video src="/BoostUp.mp4" className={styles.projectVideo} autoPlay={true} loop={true} muted={true} playsInline alt="vidéo d'un site internet" ></video>}
          </div>
          <p className={styles.projectSubtitle}>
            Appli de coaching pour l'entreprise Kevfit, dispo sur IOS et Android stores.
          </p>
        </div>


        <Link href='https://frontend-clothe-me-up.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
          <div className={styles.squareRevealContainerRightOrBottomLine}  >
            <div className={styles.rightProjectItem}
              style={project4} >
              <h6 className={styles.projectTitle}>Clothe Me Up</h6>
              <div className={styles.projectImgContainer}>
                <Image alt="Vignette d'un site internet" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw" fill={true} src="/Clothe-Me-Up2.png" className={styles.projectImg} />
              </div>
              <p className={styles.projectSubtitle}>
                Template pour site de e-commerce.
              </p>
            </div>
          </div>
        </Link>



      </div>






      <div className={styles.projectsLine} style={{ marginBottom: (vw && vw < 6) ? 18 * vw : 10 * vw }} >

        <div className={maskRow2} onClick={() => {
          modalR2C1Visible && setModalR2C1Visible(false)
        }}></div>



        <Link href='https://kairos-fronted.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
          <div className={styles.squareRevealContainerLeftOrTopLine}>
            <div className={styles.leftProjectItem} style={project5}>
              <h6 className={styles.projectTitle}>Kairos</h6>
              <div className={styles.projectImgContainer}>
                <Image alt="Vignette d'un site internet" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw" fill={true} src="/Kairos.png" className={styles.projectImg} />
              </div>
              <p className={styles.projectSubtitle}>
                Site web pour réaliser une étude de marché. Projet de fin de formation.
              </p>
            </div>
          </div>
        </Link>



        <Link href='https://frontend-twitter2.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
          <div className={styles.squareRevealContainerRightOrBottomLine}  >
            <div className={styles.rightProjectItem} style={project6}>
              <h6 className={styles.projectTitle}>Hackatweet</h6>
              <div className={styles.projectImgContainer}>
                <Image alt="Vignette d'un site internet" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw" src="/Hackatweet.png" className={styles.projectImg} />
              </div>
              <p className={styles.projectSubtitle}>
                Réplique d'un réseau social. Exercice de formation.
              </p>
            </div>
          </div>
        </Link>






        {/* 
            <div className={styles.squareRevealContainerRightOrBottomLine}>
              <div className={styles.rightProjectItem} style={project6} onClick={() => {
                !modalR2C1Visible && setModalR2C1Visible(true)
              }} >
                <h6 className={styles.projectTitle}>ChatApp</h6>
                <div className={videoContainerR2C1Style}>
                  {animationsEnd && <video src="/ChatApp.mp4" className={styles.projectVideo} autoPlay={true} loop={true} playsInline muted={true} alt="vidéo d'un site internet"></video>}
                </div>
                <p className={styles.projectSubtitle}>
                  Application de Chat (messages et vocaux). Exercice de formation.
                </p>
              </div>
            </div>
            <div className={modalR2C1} style={modalR2C1Style} >
              <h6 className={styles.projectTitle}>ChatApp</h6>
              <HiMiniXMark className={styles.closeIcon} onClick={() => setModalR2C1Visible(false)} />
              <div className={videoContainerR2C1Style}>
                {animationsEnd && <video src="/ChatApp.mp4" className={projectVideo} autoPlay={true} loop={true} muted={true} playsInline alt="vidéo d'un site internet" ></video>}
              </div>
              <p className={styles.projectSubtitle}>
                Application de Chat (messages et vocaux). Exercice de formation.
              </p>
            </div> */}

        {/* <Link href='https://morningnews-frontend-zeta.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainerRightOrBottomLine}>
                <div className={styles.rightProjectItem}
                  style={project6} >
                  <h6 className={styles.projectTitle}>Morning News</h6>
                  <div className={styles.projectImgContainer}>
                    <Image alt="Vignette d'un site internet" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw" fill={true} src="/Morningnews.png" className={styles.projectImg} />
                  </div>
                  <p className={styles.projectSubtitle}>
                    Site d'informations sur la tech. Exercice de formation.
                  </p>
                </div>
              </div>
            </Link> */}

      </div>
    </>
  )
}