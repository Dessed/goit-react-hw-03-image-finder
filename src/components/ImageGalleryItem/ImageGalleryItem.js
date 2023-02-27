import { GalleryItem, Img } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({dataImg, linkImage, onClick}) => {
    return (
        dataImg.map(({id, webformatURL, largeImageURL, tags}) => (
        <GalleryItem key={id} onClick={linkImage}>
        <Img 
        src={webformatURL}
        alt={tags}
        data-large={largeImageURL}
        onClick={onClick} 
        />
        </GalleryItem>
        ))
    )
};
