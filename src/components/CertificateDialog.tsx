import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CertificateDialog = ({ title, src, alt }: { title: string; src: string; alt: string }) => (
  <Dialog>
    <DialogTrigger className="link text-sm text-muted-foreground">
      View certificate<span className="sr-only">: {title}</span>
    </DialogTrigger>
    <DialogContent className="max-w-4xl p-4 sm:p-6">
      <DialogTitle className="pr-8 text-base font-medium">{title}</DialogTitle>
      <DialogDescription className="sr-only">{alt}</DialogDescription>
      <img src={src} alt={alt} loading="lazy" className="h-auto max-h-[75vh] w-full rounded-sm object-contain" />
    </DialogContent>
  </Dialog>
);

export default CertificateDialog;
