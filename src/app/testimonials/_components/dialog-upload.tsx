import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileUploader } from "./file-uploader"
import { cn } from "@/utils/utils"
// import ShareForm from "./share-form"
// import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"

type DialogUploaderProps = React.HTMLAttributes<HTMLDivElement>

export function DialogUploader({ className }: DialogUploaderProps) {
  const [files, setFiles] = React.useState<File[]>([])

  const handleUpload = async (files: File[]) => {
    // Upload logic, e.g., API call
    console.log("Uploading files:", files);
    // Simulate upload delay
    return new Promise<void>((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={cn(className)}>
          Upload files {files.length > 0 && `(${files.length})`}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Upload files</DialogTitle>
          <DialogDescription>
            Drag and drop your files here or click to browse.
          </DialogDescription>
        </DialogHeader>
        <FileUploader
          maxFileCount={8}
          maxSize={12 * 1024 * 1024}
          onValueChange={setFiles}
          onUpload={handleUpload}
        />
      </DialogContent>
    </Dialog>
  )
}

/*

*/