import React from "react";
import { Dialog, DialogContent } from "@components/shadcn-ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

type ModalProps = {
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  width?: number;
  hideCloseIcon?: boolean;
};

const ModalWrapper = ({
  isOpen,
  onOpenChange,
  children,
  width,
  hideCloseIcon,
}: ModalProps) => {
  const maxWidth = width ? `${width}px` : `500px`;

  return (
    <Dialog open={isOpen} modal onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        className={`${
          hideCloseIcon && "[&>button]:hidden"
        }  shadow-none border-none bg-transparent min-w-[930px] max-lg:min-w-full lg:h-[534px]`}
        style={{ maxWidth }}
      >
        <DialogTitle className="sr-only"></DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
