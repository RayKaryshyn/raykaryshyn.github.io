import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Projects() {
  const { project } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split('/')[1] === 'projects') {
      document.querySelectorAll('.nav-item').forEach(elm => {
        elm.classList.remove('actives');
      });

      document.querySelectorAll('.nav-item-projects').forEach(elm => {
        elm.classList.add('actives');
      });
    }
  }, [location.pathname]);

  return (
    <>
      <HashLink to="/#projects" className='block pt-16 md:pt-20'>Back</HashLink>

      Project: {project}
    </>
  );
}

export default Projects;
