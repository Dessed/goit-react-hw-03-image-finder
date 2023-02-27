import React, { Component } from "react";
import { fetchArticlesWithQuery } from '../Api/Api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from "../Button/Button";
import { ModalWindow } from "../Modal/Modal";
import { Gallery } from "./ImageGallery.styled";
import { Spinner } from '../Loader/Loader'

export class ImageGallery extends Component {
    state = {
        img: [],
        totalHits: 0,
        page: 1,
        showModal: false,
        buttonLoader: false,
        spinner: false,
        modalImage: '',
    };

    async componentDidUpdate (prevProps, prevState) {
        const prevName = prevProps.nameImg;
        const nextName = this.props.nameImg; 
        const page = this.state.page;

    if (prevName !== nextName) {
        this.setState({
            page: 1,
            spinner: true,
          });
          const response = await fetchArticlesWithQuery(nextName, page);
          console.log(response);
          this.setState({
            img: response.data.hits,
            totalHits: response.data.totalHits,
            buttonLoader: true,
            page: this.state.page +=1,
            spinner: false,
          });
        };
    };

    addMoreImage = async () => {
        this.setState({
            spinner: true,
            buttonLoader: false,})
        
        await fetchArticlesWithQuery(this.props.nameImg ,this.state.page).then(response => {
            this.setState(prevState => ({
                page: prevState.page +=1,
                img: [...prevState.img, ...response.data.hits],
                spinner: false,
                buttonLoader: true,}))
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


       return (
        <>
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