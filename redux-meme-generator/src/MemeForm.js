import { useState } from "react";
import { useDispatch } from "react-redux";

const MemeForm = () => {

    const INITIAL_STATE = {
        imageURL: 'https://cdn.vox-cdn.com/thumbor/8rF2keXrhL8sYlEbVbtaJpIC4qs=/0x10:500x291/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/59741997/n4scgse21iuz.0.jpg',
        topText: '',
        bottomText: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD', payload: formData})
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="imageURL">Image URL (default is provided but you can change it!): </label>
            <input 
                name="imageURL"
                type="text"
                value={formData.imageURL}
                onChange={handleChange}
            />
            <label htmlFor="topText">Top Text: </label>
            <input 
                name="topText"
                type="text"
                value={formData.topText}
                onChange={handleChange}
            />
            <label htmlFor="bottomText">Bottom Text: </label>
            <input 
                name="bottomText"
                type="text"
                value={formData.bottomText}
                onChange={handleChange}
            />
            <button>Submit!</button>
        </form>
    )
}

export default MemeForm;