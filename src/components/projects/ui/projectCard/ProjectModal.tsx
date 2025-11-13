import { Fragment, memo } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';

interface ProjectModalProps {
  title: string;
  extended: string;
  image: string;
  link: string;
  code: string;
  skills: React.ReactElement[];
  onClose: () => void;
  t: (key: string) => string;
}

// Memoize the modal to avoid unnecessary re-renders
export const ProjectModal: React.FC<ProjectModalProps> = memo(
  ({ title, extended, image, link, code, skills, onClose, t }) => {
    return (
      <Transition appear show as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 transition-opacity duration-300" />
          </Transition.Child>

          {/* Modal panel */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-xl transition-transform duration-300">
                  {/* Header */}
                  <ModalHeader title={title} image={image} onClose={onClose} />

                  {/* Content */}
                  <ModalContent extended={extended} link={link} code={code} skills={skills} t={t} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
);

export default ProjectModal;
