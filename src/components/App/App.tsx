import { useState } from "react";
import Form from "../Form/Form";
import Section from "../Section/Section";
import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";
import { Toaster } from "react-hot-toast";
import Container from "../Container/Container";
// import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Text from "../Text/Text";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async (searchValue: string) => {
    try {
      setPhotos([]);
      setError(null);
      setIsLoading(true);
      const newPhotos = await getPhotos(searchValue);
      setPhotos(newPhotos);
    } catch {
      // toast.error('Please enter your search query.')
      setError("Something went wrong, Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Section>
        <Toaster position="top-center" />

        <Container>
          <Form onSubmit={handleSubmit} />
          {error && (
            <Text textAlign="center" marginBottom="20">
              {error}
            </Text>
          )}
          {isLoading && <Loader />}
          {photos.length > 0 && (
            <PhotosGallery photos={photos} isOpen={openModal} />
          )}
          {isModalOpen && selectedPhoto && (
            <Modal onClose={closeModal}>
              <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
            </Modal>
          )}
        </Container>
      </Section>
    </>
  );
}
