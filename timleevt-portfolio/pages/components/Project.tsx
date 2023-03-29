import styles from "./Project.module.css";

type Props = {
  title: string;
  desc: string;
  imgUrl: string;
  onClick: () => {};
};

const Project = ({ title, desc, imgUrl, onClick }: Props) => {
  console.log(title);
  return (
    <div className={styles.container}>
      {/* <h2>{title}</h2> */}
      {title}
    </div>
  );
};

export default Project;
