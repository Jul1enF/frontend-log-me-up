import styles from "../styles/Header.module.css"


export default function Header(props) {

    const { scrollOffset, vw, vh, firstComputerHeaderSize, finalComputerHeaderSize, computerOffsetFrontier, firstPhoneHeaderSize, finalPhoneHeaderSize, phoneOffsetFrontier, animationsBegin, animations2Begin, animationsEnd, src } = props


    let headerStyle = {}
    let titleBgStyle = {}
    let videoStyle = {}

    // ORDINATEUR Ajustement du style en fonction du scroll
    // Le header n'a pas encore sa taille def
    if (vw && vw > 6 && scrollOffset > 0 && scrollOffset < computerOffsetFrontier) {
        headerStyle = { height: firstComputerHeaderSize - scrollOffset, transitionDuration: "0s" }

        const opacityRatio = 1 - scrollOffset / (computerOffsetFrontier)

        videoStyle = { transitionDuration: "0.8s", opacity: `${1 * opacityRatio}` }

        titleBgStyle = { transitionDuration: "0.8s", opacity: `${1 * opacityRatio}` }

    }

    // Le header a sa taille def
    else if (vw && vw > 6 && scrollOffset >= computerOffsetFrontier) {

        headerStyle = { height: finalComputerHeaderSize, transitionDuration: "0s", position: "absolute", top: 0 }

        videoStyle = { transitionDuration: "0.8s", opacity: 0 }

        titleBgStyle = { transitionDuration: "0.8s", opacity: 0 }

    }


    // PORTABLE Ajustement du style en fonction du scroll
    // Le header n'a pas encore sa taille def
    if (vw && vw <= 6 && scrollOffset > 0 && scrollOffset < phoneOffsetFrontier) {
        headerStyle = { height: firstPhoneHeaderSize - scrollOffset, transitionDuration: "0s" }

        const opacityRatio = 1 - scrollOffset / (phoneOffsetFrontier)

        videoStyle = { transitionDuration: "0s", opacity: `${1 * opacityRatio}` }

        titleBgStyle = { transitionDuration: "0s", opacity: `${1 * opacityRatio}` }
    }
    // Le header a sa taille def
    else if (vw && vw <= 6 && scrollOffset >= phoneOffsetFrontier) {
        headerStyle = { height: finalPhoneHeaderSize, transitionDuration: "0s", position: "fixed", top: 0 }

        videoStyle = { transitionDuration: "0.8s", opacity: 0 }

        titleBgStyle = { transitionDuration: "0s", opacity: 0 }
    }



     // Variable de className pour changement de styles pour les animations du début
    
      let titleBackground = !animationsBegin ? styles.titleBackground1 : styles.titleBackground2
    
      let headerTextContainer = !animationsBegin ? styles.headerTextContainer1 : styles.headerTextContainer2

      let backgroundVideo = !animations2Begin ? styles.backgroundVideo1 : styles.backgroundVideo2
      
      
        let headerContainer = styles.headerContainer1

          // Nouvelles classeName avec réglages def et plus de transition duration pour les cas de resize de la fenêtre
          if (animationsEnd) {
            titleBackground = styles.titleBackground3
            backgroundVideo = styles.backgroundVideo3
            headerContainer = styles.headerContainer2
          }




    return (
        <div className={headerContainer} style={headerStyle} >

            <video src={src} className={backgroundVideo} style={videoStyle} autoPlay={true} loop={true} muted={true} playsInline onLoadedData={() => props.markVideoAsLoaded()}></video>


            <div className={headerTextContainer}>
                <div className={titleBackground} style={titleBgStyle}></div>
                <h1 className={styles.title}>Julien Furic</h1>
                <h3 className={styles.subTitle}>Développeur d'applications web et mobile</h3>
            </div>

        </div>
    )
}