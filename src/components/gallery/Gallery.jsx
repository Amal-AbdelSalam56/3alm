import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import "./Gallery.scss";

export default function Gallery({ data, target }) {
  const navigate = useNavigate();
  const params = useParams();
  const [isInSinglePostPath, setIsInSinglePostPath] = useState(false);

  const handelClick = () => {
    navigate(`/singlePost/${target.id}`);
  };

  useEffect(() => {
    setIsInSinglePostPath(
      params.id && window.location.pathname.includes("/singlePost")
    );
  }, [params.id]);

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const galleryItems = data.map((image) => ({
    original: `${URL}/storage/${image.image.path}`,
    thumbnail: `${URL}/storage/${image.image.path}`,
  }));

  return (
    <>
      {isInSinglePostPath ? (
        <SlideshowLightbox className="grid gap-4 rounded-xl">
          {data.map((image, index) => (
            <img
              key={index}
              className="w-100 rounded-xl"
              src={`${URL}/storage/${image.image.path}`}
              alt=""
            />
          ))}
        </SlideshowLightbox>
      ) : (
        <>
          <div className={`gallery with${data.length}`}>
            {data.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className={`image imageNo${index + 1}`}
                onClick={handelClick}
              >
                <img src={`${URL}/storage/${image.image.path}`} alt="" />

                {data.length > 5 && (
                  <>
                    {index === 4 && (
                      <p onClick={handelClick} className="gallery__indicator">
                        +{data.length - 5}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
