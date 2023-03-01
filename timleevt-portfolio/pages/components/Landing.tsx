import styles from './Landing.module.css';
import Links from './Links';

const Landing = () => {
    return ( 
        <div className={styles.container}>
            <h1>Tim Lee</h1>
            <h2>Software Engineer @ <a href="https://www.playnext-lab.co.jp/">PlayNext Lab Inc.</a></h2>
            <div className="container">
                  <h2> Projects </h2>
                  <p><a href="#" >The People&apos;s Champ - Boxing Ranking Aggregator</a></p>
                  <p id="project_tpc">
                        Boxing &quot;pound for pound&quot; lists are subjective ranking lists put together by pundits to display
                        who they view
                        to be the current best boxers across all weight classes.
                        <br /><br />
                        Using python, I scraped some of the most respected lists online and put them into one place for
                        easy comparison.
                        The website also allows users to submit/view their own list. A community list is then compiled
                        based on the submissions of users.
                        <br /><br />

                        Under reconstruction <br /><br />

                        links:<br />
                        <Links />
                  </p>
                  </div>
            </div>
     );
}
 
export default Landing;