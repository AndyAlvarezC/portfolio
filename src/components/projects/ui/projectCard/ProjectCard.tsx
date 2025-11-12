import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCardPreview } from './ProjectCardPreview';
import { ProjectModal } from './ProjectModal';

interface ProjectCardProps {
  title: string;
  description: string;
  extended: string;
  image: string;
  link: string;
  code: string;
  skills: React.ReactElement[];
}

//ProjectCard Component
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  extended,
  image,
  link,
  code,
  skills,
}) => {
  const { t } = useTranslation();
  
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Preview Card */}
      <ProjectCardPreview
        title={title}
        description={description}
        image={image}
        link={link}
        code={code}
        skills={skills}
        onOpen={handleOpenModal}
      />

      {/* Modal */}
      {isOpen && (
        <ProjectModal
          title={title}
          extended={extended}
          image={image}
          link={link}
          code={code}
          skills={skills}
          onClose={handleOpenModal}
          t={t}
        />
      )}
    </>
  );
};