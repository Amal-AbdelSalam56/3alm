import { Fragment, useState } from "react";
import { Modal } from "../ui";

export default function Files({ data, hasCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  return (
    <>
      {data?.length > 0 && (
        <>
          {hasCategory ? (
            <>{image.file.path}</>
          ) : (
            <>
              <div
                className={`grid gap-3 py-4 relative 
                 ${
                   data.length === 2 || data.length === 4
                     ? "sm:grid-cols-2  grid-cols-2"
                     : data.length === 3 || data.length > 4
                     ? "sm:grid-cols-2  grid-cols-2"
                     : "grid-cols-1"
                 } `}
              >
                {data.slice(0, 4).map((image, index) => (
                  <>{image.file.path}</>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
