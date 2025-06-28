import styles from "../styles/About.module.css"

import { Laptop } from 'react-bootstrap-icons';
import { Phone } from 'react-bootstrap-icons';
import { Palette } from 'react-bootstrap-icons';



export default function About () {



    return (

        <>
        <h3 className={styles.categoryTitle} >Présentation</h3>
          <div className={styles.gradientTextContainer}>
            <h4 className={styles.categorySubtitle}>À propos de moi</h4>
          </div>


          {/* <div className={styles.avatarContainer}>
            <Image src="/ju.jpg" alt="icone d'un avatar de personnage" fill={true} className={styles.avatar} ></Image>
          </div> */}


          <div className={styles.categoryDetailsContainer}>

            <div className={styles.textContainer}>
              <p className={styles.paragraph1}>Hello, moi c'est Julien ! J'ai 36 ans et je suis développeur de site web et d'applications mobiles.</p>
              <p className={styles.paragraph1}>Après avoir suivi les cours de la formation La Capsule, j'ai obtenu un diplôme bac +3 de Développeur Fullstack et travaille depuis sur des projets pros.</p>
              {/* <p className={styles.paragraph1}> Depuis je ne cesse de développer des projets de site web ou d'applications mobiles et cherche encore et toujours de nouveaux défis à relever !</p> */}
              <p className={styles.paragraph1}> Pour cela, quinze années d'expériences dans la vidéo, le montage et le motion design m'accompagnent afin d'élargir ma palette de compétences. Je peux ainsi personnaliser le design de mes applications en créant des animations vidéos ou des logos.</p>
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
        </>
    )
}