import styles from './ProjectsStyles.module.css';
import foodapp from '../../assets/foodapp.png';
import erp from '../../assets/erp.png';
import moneyex from '../../assets/moneyex.png';
import moviedb from '../../assets/moviedb.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={foodapp}
          link="https://yumbox.netlify.app/"
          h3="Food App"
          p="Online Food Ordering App"
        />
        <ProjectCard
          src={erp}
          link="https://entnt-erp.netlify.app/"
          h3="ERP App"
          p="Enterprise Resource Planning"
        />
        <ProjectCard
          src={moneyex}
          link="https://rateconvert.netlify.app"
          h3="Currency Converter"
          p="Realtime Currency Exchange"
        />
        <ProjectCard
          src={moviedb}
          link="https://cinemabook.netlify.app"
          h3="Movie Database"
          p="A Movie Info Webpage"
        />
      </div>
    </section>
  );
}

export default Projects;
