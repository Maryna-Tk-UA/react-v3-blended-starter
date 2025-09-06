import type { Photo } from "../../types/photo";
// import GridItem from "../GridItem/GridItem";

import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photo: Photo;
  onOpen: (photo: Photo) => void;
}

export default function PhotosGalleryItem({ photo, onOpen }: PhotosGalleryItemProps) {
  const { avg_color, alt, src } = photo
  return (
    // <GridItem>
      <div
      onClick={()=> onOpen(photo)}
        className={styles.thumb}
        style={{
          backgroundColor: avg_color,
          borderColor: avg_color,
        }}
      >
        <img src={src.original} alt={alt} />
      </div>
    // </GridItem>
  );
}
