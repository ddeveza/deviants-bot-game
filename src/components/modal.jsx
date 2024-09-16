import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Modal({ title, description, triggerButton, footer, children, disabledCloseButton = false, className, open, setOpen }) {
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent
        className={cn(className)}
        disabledCloseButton={disabledCloseButton}
      >
        {title && <VisuallyHidden asChild><DialogTitle>{title}</DialogTitle></VisuallyHidden>}
        {description && <VisuallyHidden asChild><DialogDescription>{description}</DialogDescription></VisuallyHidden>}
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
