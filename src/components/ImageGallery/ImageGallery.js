import React, { Component } from "react";
import { SearchbarHeader } from "../Searchbar/Searchbar";
import { fetchArticlesWithQuery } from '../Api/Api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from "../Button/Button";
import { ModalWindow } from "../Modal/Modal";
import { Gallery } from "./ImageGallery.styled";
import { Spinner } from '../Loader/Loader';
import PropTypes from 'prop-types';


export class ImageGallery extends Component {
    state = {
        name: '',
        img: [],
        totalHits: 0,
        page: 1,
        showModal: false,
        buttonLoader: false,
        spinner: false,
        modalImage: '',
    };

    async componentDidUpdate (prevProps, prevState) {
        const prevName = prevState.name;
        const nextName = this.state.name; 

    if (prevName !== nextName) {
          this.addMoreImage ()
        };
    };

    handleChange = name => {
        this.setState({
            name: name,
            page: 1,
            img: [],
            spinner: true,
            });
      }; 

    addMoreImage = async () => {
        const { name, page } = this.state;
        this.setState({
            buttonLoader: false,
            spinner: true,
        })
        
        await fetchArticlesWithQuery(name, page).then(response => {
            try {
                this.setState(prevState => ({
                    page: prevState.page +=1,
                    totalHits: response.data.totalHits,
                    img: [...prevState.img, ...response.data.hits],
                    spinner: false,
                    buttonLoader: true,}))
            }
           catch {
                console.log('Error');
           }
        }); 
    };

    getLinkImage = (e) => {
        this.setState({modalImage: e.target.dataset.large});
    };

    toggleModal = (e) => {
        this.setState(({showModal}) => (
          {showModal: !showModal})
        );
    };
    
    render () {
        const { img, showModal, modalImage } = this.state;
        const toggleModal = this.toggleModal;
        const getLinkImage = this.getLinkImage;
        const addMoreImage = this.addMoreImage;
        const handleChange = this.handleChange;

       return (
        <>
        <SearchbarHeader onSubmit={handleChange}/>

        <Gallery>
            <ImageGalleryItem dataImg={img} linkImage={getLinkImage} onClick={toggleModal}/>
         </Gallery>

        {this.state.buttonLoader && <Button onClick={addMoreImage} dataState={this.state}/>}
        {this.state.spinner && <Spinner/>} 
        {<Spinner/> && !<Button onClick={addMoreImage} dataState={this.state}/>}
        
        
        {showModal && <ModalWindow onClose={toggleModal}>
            {modalImage}
        </ModalWindow>}
        
        </>
        ); 
    };
};

ImageGallery.propTypes = {
    name: PropTypes.string,
    img: PropTypes.array,
    totalHits: PropTypes.number,
    page: PropTypes.number,
    showModal: PropTypes.bool,
    buttonLoader: PropTypes.bool,
    spinner: PropTypes.bool,
    modalImage: PropTypes.string,
};
