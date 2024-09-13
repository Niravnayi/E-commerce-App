import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FormItem, FormLabel, FormMessage } from "../ui/form";

const FileUpload = ({ field, label, className, ...rest }) => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      field.onChange(file);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    },
    [field]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <FormItem className={className}>
      <FormLabel>{label}</FormLabel>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} {...rest} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag 'n' drop a file here, or click to select a file</p>
        )}
      </div>
      {field.value && (
        <div className="mt-2">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="max-w-full h-auto max-h-48"
            />
          ) : (
            <p>{field.value.name}</p>
          )}
        </div>
      )}
      <FormMessage />
    </FormItem>
  );
};

export default FileUpload;
