import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Projects(som) {
  const { project } = useParams();

  return (
    <>
      <HashLink to="/#projects">Back</HashLink>
      <br />
      Project: {project}
    </>
  );
}

export default Projects;
