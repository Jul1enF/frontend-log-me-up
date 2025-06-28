import styles from "../styles/Projects.module.css"
import { useState, useRef } from "react";

import Link from 'next/link';
import Image from 'next/image';

import { HiMiniXMark } from "react-icons/hi2";



export default function Projects (props){

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
    
      const [modal1Visible, setModal1Visible] = useState(false)
      const [modal2Visible, setModal2Visible] = useState(false)
      const [modal3Visible, setModal3Visible] = useState(false)
    
      const projectsLine1Ref = useRef(null)
    
    
      // Réglage du offset top de la modal par rapport au viewport, pour qu'elle reste fixe dans l'écran (car normalement réglée par rapport à son parent vu qu'en position : absolute)
      const projectsLine1ViewportOffset = projectsLine1Ref.current && projectsLine1Ref.current.offsetTop - scrollOffset
    
      const mask1 = (modal1Visible || modal2Visible) ? styles.maskOn : styles.maskOff
    
    
      let modal1Style
      // ORDINATEUR
      if (vw > 6 && modal1Visible) {
        modal1Style = { top: - projectsLine1ViewportOffset + 3 * vw, }
      }
      // PORTABLE
      if (vw <= 6 && modal1Visible) {
        modal1Style = { top: - projectsLine1ViewportOffset + 20 * vw, }
      }
    
      const modal1 = modal1Visible ? styles.bigProjectModal : styles.smallLeftProjectModal
    
      const videoContainer1Style = modal1Visible ? styles.projectVideoContainer : styles.projectImgContainer
    
    
    
      let modal2Style
      // ORDINATEUR
      if (vw > 6 && modal2Visible) {
        modal2Style = { top: - projectsLine1ViewportOffset + 3 * vw, }
      }
      // PORTABLE
      if (vw <= 6 && modal2Visible) {
        modal2Style = { top: - projectsLine1ViewportOffset + 20 * vw, }
      }
    
      const modal2 = modal2Visible ? styles.bigProjectModal : styles.smallRightProjectModal
    
      const videoContainer2Style = modal2Visible ? styles.projectVideoContainer : styles.projectImgContainer
    
    
    
    
    
      const projectsLine3Ref = useRef(null)
    
      const modal3ViewportOffset = projectsLine3Ref.current && projectsLine3Ref.current.offsetTop - scrollOffset
    
      const mask3 = modal3Visible ? styles.maskOn : styles.maskOff
    
      let modal3Style
      // ORDINATEUR
      if (vw > 6 && modal3Visible) {
        modal3Style = { top: - modal3ViewportOffset + 3 * vw, }
      }
      // PORTABLE
      if (vw <= 6 && modal3Visible) {
        modal3Style = { top: - modal3ViewportOffset + 20 * vw, }
      }
    
      const modal3 = modal3Visible ? styles.bigProjectModal : styles.smallRightProjectModal
    
      const videoContainer3Style = modal3Visible ? styles.projectVideoContainer : styles.projectImgContainer
    
    
    
    
      // PORTABLE Pour mettre la vidéo de la modal en cover
      let projectVideo = styles.projectVideo
      if (vw <= 6 && (modal1Visible || modal2Visible || modal3Visible)) {
        projectVideo = styles.modalVideo
      }


    return (
        <>
        <h3 className={styles.categoryTitle} >Projets</h3>
          <div className={styles.gradientTextContainer2}>
            <h4 className={styles.categorySubtitle}>Quelques exemples de mon travail</h4>
          </div>




          <div className={styles.projectsLine} ref={projectsLine1Ref}>

            <div className={mask1} onClick={() => {
              modal1Visible && setModal1Visible(false)
              modal2Visible && setModal2Visible(false)
            }}></div>


            <div className={styles.squareRevealContainer1}>
              <div className={styles.leftProjectItem} style={project1} onClick={() => {
                !modal1Visible && setModal1Visible(true)
              }} >
                <h6 className={styles.projectTitle}>Me Baudelin</h6>
                <div className={videoContainer1Style}>
                  {animationsEnd && <video src="/Me-Baudelin.mp4" className={styles.projectVideo} autoPlay={true} loop={true} playsInline muted={true} alt="vidéo d'un site internet"></video>}
                </div>
                <p className={styles.projectSubtitle}>
                  Appli de conseils légaux pour le cabinet Baudelin, dispo sur IOS et Android stores.
                </p>
              </div>
            </div>
            {/* Appli de conseils légaux pour le cabinet Baudelin, dispo sur IOS et Android stores. */}

            {/* Utilisation de modals pour avoir des temps de transition différents entre 1ère apparition et agrandissement */}

            <div className={modal1} style={modal1Style} >
              <h6 className={styles.projectTitle}>Me Baudelin</h6>
              <HiMiniXMark className={styles.closeIcon} onClick={() => setModal1Visible(false)} />
              <div className={videoContainer1Style}>
                {animationsEnd && <video src="/Me-Baudelin.mp4" className={projectVideo} autoPlay={true} loop={true} muted={true} playsInline alt="vidéo d'un site internet" ></video>}
              </div>
              <p className={styles.projectSubtitle}>
                Appli de conseils légaux pour le cabinet Baudelin, dispo sur IOS et Android stores.
              </p>
            </div>



            <div className={styles.squareRevealContainer2}>
              <div className={styles.rightProjectItem} style={project2} onClick={() => {
                !modal2Visible && setModal2Visible(true)
              }} >
                <h6 className={styles.projectTitle}>Boost Up</h6>
                <div className={videoContainer2Style}>
                  {animationsEnd && <video src="/BoostUp.mp4" className={styles.projectVideo} autoPlay={true} loop={true} playsInline muted={true} alt="vidéo d'un site internet"></video>}
                </div>
                <p className={styles.projectSubtitle}>
                  Appli de coaching pour l'entreprise Kevfit, dispo sur IOS et Android stores.
                </p>
              </div>
            </div>

            <div className={modal2} style={modal2Style} >
              <h6 className={styles.projectTitle}>Boost Up</h6>
              <HiMiniXMark className={styles.closeIcon} onClick={() => setModal2Visible(false)} />
              <div className={videoContainer2Style}>
                {animationsEnd && <video src="/BoostUp.mp4" className={projectVideo} autoPlay={true} loop={true} muted={true} playsInline alt="vidéo d'un site internet" ></video>}
              </div>
              <p className={styles.projectSubtitle}>
                Appli de coaching pour l'entreprise Kevfit, dispo sur IOS et Android stores.
              </p>
            </div>


          </div>





          <div className={styles.projectsLine}>


            <Link href='https://frontend-clothe-me-up.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainer1}  >
                <div className={styles.leftProjectItem}
                  style={project3} >
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



            <Link href='https://kairos-fronted.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainer2}>
                <div className={styles.rightProjectItem} style={project4}>
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


          </div>






          <div className={styles.projectsLine} style={{ marginBottom: (vw && vw < 6) ? 18 * vw : 10 * vw }} ref={projectsLine3Ref}>

            <div className={mask3} onClick={() => {
              modal3Visible && setModal3Visible(false)
            }}></div>


            <Link href='https://frontend-twitter2.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainer1}  >
                <div className={styles.leftProjectItem} style={project5}>
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



            <div className={styles.squareRevealContainer2}>
              <div className={styles.rightProjectItem} style={project6} onClick={() => {
                !modal3Visible && setModal3Visible(true)
              }} >
                <h6 className={styles.projectTitle}>ChatApp</h6>
                <div className={videoContainer3Style}>
                  {animationsEnd && <video src="/ChatApp.mp4" className={styles.projectVideo} autoPlay={true} loop={true} playsInline muted={true} alt="vidéo d'un site internet"></video>}
                </div>
                <p className={styles.projectSubtitle}>
                  Application de Chat (messages et vocaux). Exercice de formation.
                </p>
              </div>
            </div>
            <div className={modal3} style={modal3Style} >
              <h6 className={styles.projectTitle}>ChatApp</h6>
              <HiMiniXMark className={styles.closeIcon} onClick={() => setModal3Visible(false)} />
              <div className={videoContainer3Style}>
                {animationsEnd && <video src="/ChatApp.mp4" className={projectVideo} autoPlay={true} loop={true} muted={true} playsInline alt="vidéo d'un site internet" ></video>}
              </div>
              <p className={styles.projectSubtitle}>
                Application de Chat (messages et vocaux). Exercice de formation.
              </p>
            </div>

            {/* <Link href='https://morningnews-frontend-zeta.vercel.app/' target="_blank" style={{ textDecoration: 'none' }}>
              <div className={styles.squareRevealContainer2}>
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