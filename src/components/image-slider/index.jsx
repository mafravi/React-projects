import { useEffect, useState } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./styles.css";

export default function ImageSlider({ url, page = 1, limit = 10 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.massage);
      setLoading(false);
    }
  }
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(
      currentSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);
  if (loading) {
    return <div>loading plz wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurd {errorMsg}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={()=>handlePrevious()} className="arrow left" />

      {images && images.length
        ? images.map((imageItem,index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index ? "current-image" :"hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill onClick={()=>handleNext()} className="arrow right" />
      <span className="circle">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} onClick={()=>setCurrentSlide(index)}className={
                currentSlide === index ? "current-circle" : "current-circle inactive"
              }></button>
            ))
          : null}
      </span>
    </div>
  );
}
