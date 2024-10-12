import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";

interface Model {
  isOpen: boolean;
  close: () => void;
  children?: ReactNode;
  title?: string;
}

const Model = ({ isOpen, close, title, children }: Model) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />

        {/* The modal content */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-md bg-white shadow-black shadow-md p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {/* Title */}
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-base font-medium text-black text-center"
                >
                  {title}
                </DialogTitle>
              )}

              {/* Modal content */}
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Model;
