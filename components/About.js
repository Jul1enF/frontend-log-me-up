import styles from "../styles/About.module.css"

import { Laptop } from 'react-bootstrap-icons';
import { Phone } from 'react-bootstrap-icons';
import { Palette } from 'react-bootstrap-icons';



export default function About() {



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
          {/* <p className={styles.paragraph1}>Depuis plus d'un an, j'accompagne mes clients pour leur proposer des solutions clés en main de gestion de leur projet web ou mobile. Ma formation de développeur Full Stack me permet ainsi de gérer l'intégralité de la structure de ces projets.</p> */}
          <p className={styles.paragraph1}>Depuis plus d'un an, j'accompagne mes clients pour leur proposer des solutions clés en main de gestion de leur projet web ou mobile, dont je peux gérer l'intégralité de la structure grâce à ma formation de développeur Full Stack.</p>
          {/* <p className={styles.paragraph1}> Depuis je ne cesse de développer des projets de site web ou d'applications mobiles et cherche encore et toujours de nouveaux défis à relever !</p> */}
          <p className={styles.paragraph1}> Fort de quinze ans d'expérience dans la vidéo, le montage et le motion design, je peux également affiner le design de mes applications en créant des animations vidéos, des logos.</p>
          <p className={styles.paragraph1}> Si vous recherchez une personnalisation optimale de votre projet, un gestion rigoureuse du code et un accompagnement à chaque étape, vous êtes donc au bon endroit !</p>
          <p className={styles.paragraph2}>N'hésitez pas à me contacter si vous avez un projet en tête et cherchez à le réaliser ou à en définir les contours !</p>
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