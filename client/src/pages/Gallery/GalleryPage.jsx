import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import { photos } from "./GalleryData";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1 className="text-center m-5"></h1>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />
      <div className="lightbox">
        <Lightbox
          index={index}
          slides={photos}
          open={index > 0}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  );
};

export default GalleryPage;
