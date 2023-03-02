import { Btn } from './Button.styled';

export const Button = ({ onClick, dataState }) => {
        const { img, totalHits } = dataState;
      
        return (
            img.length === totalHits ? 
            <Btn type="button" disabled onClick={onClick}>Loader</Btn> :
            <Btn type="button" onClick={onClick}>Loader</Btn>
          )   
        };
           
       


    