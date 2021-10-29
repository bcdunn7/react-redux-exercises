import { useDispatch } from 'react-redux';
import './Meme.css';

const Meme = ({ data }) => {

    const dispatch = useDispatch();

    const removeMeme = () => {
        dispatch({ type: 'REMOVE', payload: data})
    }

    return (
        <div className='Meme'>
            <p className='Meme-topText'>{data.topText}</p>
            <img className='Meme-img' src={data.imageURL} alt='Meme'/>
            <p className='Meme-bottomText'>{data.bottomText}</p>
            <button onClick={removeMeme}>Remove</button>
        </div>
    )
}

export default Meme;