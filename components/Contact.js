import styles from "../styles/Contact.module.css"
import Image from 'next/image';
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {



      // Fonction et état pour copier adresse mail
    
      const [copyVisible, setCopyVisible] = useState(false)
    
      const copy = !copyVisible ? styles.copy1 : styles.copy2
    
      const copyText = () => {
        navigator.clipboard.writeText("contact@julien-furic.com")
        setCopyVisible(true)
        setTimeout(() => setCopyVisible(false), 1500)
      }




    return (
        <>
            <h3 className={styles.categoryTitle}>Contact</h3>
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

                <FontAwesomeIcon icon={faCopy} className={styles.copyIcon} onClick={() => copyText()} />

            </div>

            {/* <div className={styles.gradientMail2} onClick={() => copyText()}>
            <div className={styles.gradientShadow}></div>
            <h6 className={styles.mail2}>contact@julien-furic.com</h6>
          </div> */}

            {/* <p className={styles.paragraph2}> À très bientôt ! :) </p> */}

            <div className={styles.bottomContainer}>
                <div className={styles.siteLogoContainer}>
                    <Image alt="Logo du présent site internet"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                        fill={true} src="/logo-9-portfolio.png"
                        className={styles.siteLogo} />
                </div>
                <p className={styles.paragraph3}>2025 </p>
            </div>
        </>
    )
}