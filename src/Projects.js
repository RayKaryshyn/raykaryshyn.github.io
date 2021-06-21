import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Projects(som) {
  const { project } = useParams();

  return (
    <>
      <HashLink to="/#projects" className='block pt-16 md:pt-20'>Back</HashLink>

      Project: {project}
    </>
  );
}

export default Projects;
