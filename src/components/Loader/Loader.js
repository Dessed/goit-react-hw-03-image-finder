import { ThreeDots } from  'react-loader-spinner';
import { DIV } from './Loader.styled';

export const Spinner = () => {
    return (
        <DIV>
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#4fa94d" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName="loader.css"
            visible={true}
            />
        </DIV>
    )
}


