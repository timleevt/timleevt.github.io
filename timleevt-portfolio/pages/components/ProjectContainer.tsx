import { useState } from "react";
import Project from "./Project";
import styles from "./ProjectContainer.module.css";
import classNames from "classnames";

const ProjectContainer = () => {
  const [displayProject, setDisplayProject] = useState(false);

  return (
    <div
      className={classNames(styles.container, {
        [styles.displayProject]: displayProject,
      })}
      onClick={() => setDisplayProject(true)}
    >
      <Project title="The People's Champ" desc="loremipsum"/>
      <Project title="Project two" desc="something else" />
      <Project title="Project three" desc="something else" />
    </div>
  );
};

export default ProjectContainer;
