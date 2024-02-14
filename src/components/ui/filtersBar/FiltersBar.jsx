import { useRef, useState } from "react";
import { Button, Modal, Select } from "../";
import { filter } from "../../../assets/images/icons";
import { t } from "i18next";

export default function FiltersBar({ filters, width }) {
  const [filteringBy, setFilteringBy] = useState("All");

  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    setStartX(event.clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (event) => {
    if (!isMouseDown) return;
    event.preventDefault();
    const x = event.clientX - containerRef.current.offsetLeft;
    const scrollX = x - startX;
    containerRef.current.scrollLeft = scrollLeft - scrollX;
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <nav
        className={`hidden md:flex gap-2 overflow-x-scroll no-scrollbar ${
          width ? width : "md:max-w-4xl"
        }`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {filters.map((filter, index) => (
          <Button
            key={index}
            children={t(filter)}
            className="w-fit whitespace-nowrap capitalize"
            isReverse={filter !== filteringBy}
            onClick={() => {
              setFilteringBy(filter);
            }}
          />
        ))}
      </nav>

      <nav className="md:hidden flex justify-between items-center w-full px-4">
        <div className="flex justify-center items-center gap-4">
          <p className="text-black">
            {t("Sort by")}
            {" : "}
          </p>

          <Select
            className="gap-4 bg-white p-0 capitalize font-black text-[#0099A8]"
            selectLabels={[t("new")]}
            preSelect
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            className="flex font-black justify-center items-center"
            onClick={openModal}
          >
            <p>{t("Filters")}</p>

            <img src={filter} alt="" />
          </button>

          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            title="Filters"
            children={
              <div className="grid grid-cols-2 gap-4">
                {filters.map((filter, index) => (
                  <Button
                    key={index}
                    children={t(filter)}
                    className="w-full truncate capitalize"
                    isReverse={filter !== filteringBy}
                    onClick={() => {
                      setFilteringBy(filter);
                      closeModal();
                    }}
                  />
                ))}
              </div>
            }
          />
        </div>
      </nav>
    </>
  );
}
