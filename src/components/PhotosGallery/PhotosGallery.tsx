import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  isOpen: (photo: Photo) => void;
}

export default function PhotosGallery({ photos, isOpen }: PhotosGalleryProps) {
  return (
    <Grid>
  {photos.map((el: Photo) => (
    <GridItem key={el.id}>
    <PhotosGalleryItem photo={el} onOpen={isOpen} />
    </GridItem>
  ))}
</Grid>
  )
}
