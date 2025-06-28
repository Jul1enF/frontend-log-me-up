import styles from "../styles/Skills.module.css"


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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons'



export default function Skills(props) {

    const { scrollOffset, vw, vh, skillContainer } = props

    // Styles conditionnels pour les containers des compétences

    let skill1
    let skill2
    let skill3

    // ORDINATEUR
    if (vw > 6 && skillContainer && scrollOffset + 100 * vh < skillContainer.offsetTop + 14 * vw) {
        skill1 = { left: -20 * vw, opacity: 0, transitionDuration: "3s", marginRight: 600 }
        skill2 = { marginRight: -40 * vw, opacity: 0, transitionDuration: "3s" }
        skill3 = { marginTop: 10 * vw, opacity: 0, transitionDuration: "3s" }
    }
    // PORTABLE
    if (vw <= 6 && skillContainer && scrollOffset + 100 * vh < skillContainer.offsetTop + 20 * vw) {
        skill1 = { left: 40 * vw, opacity: 0, transitionDuration: "1s" }
    }
    if (vw <= 6 && skillContainer && scrollOffset + 100 * vh < skillContainer.offsetTop + 55 * vw) {
        skill2 = { left: -40 * vw, opacity: 0, transitionDuration: "1s" }
    }
    if (vw <= 6 && skillContainer && scrollOffset + 100 * vh < skillContainer.offsetTop + 90 * vw) {
        skill3 = { left: 40 * vw, opacity: 0, transitionDuration: "1s" }
    }


    return (
        <>
            <h3 className={styles.categoryTitle} >Compétences</h3>
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

        </>
    )
}