import React from 'react'
import { Form , Uploader, Button, ButtonToolbar, Panel} from 'rsuite'
import { useDispatch } from 'react-redux';
import { postImage } from '../features/imageSlice';
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';

const ImageInput = () => {
    const dispatch = useDispatch();
    const [imageData, setImageData] = React.useState(null);
    const [description, setDescription] = React.useState(''); 
    const [name, setName] = React.useState(''); 

        const handleNameChange = event => {
            setName(event.target.value);
        };
    
        const handleDescriptionChange = event => {
            setDescription(event.target.value);
        };

        const handleImageChange = event => {
            setImageData(event.target.files[0]);
        };
    
      const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', imageData);
        formData.append('description', description);
        formData.append('title', name);
        dispatch(postImage(formData));
      };

  return (
    <div>
        <Panel shaded bordered style={{ display: 'inline-block', margin:'40px' }}>
            <Form>
                <h3>UPLOAD SECTION</h3>
                <Form.Group controlId="input">
                <Form.Control name="input" id='name' placeholder='name' onChange={handleNameChange}/>
                <Form.HelpText tooltip>Enter the image name.</Form.HelpText>
                </Form.Group>

                <Form.Group controlId="input">
                <Form.Control name="input" id='description' placeholder='description' onChange={handleDescriptionChange}/>
                <Form.HelpText tooltip>Briefly describe it</Form.HelpText>
                </Form.Group>

                <Uploader multiple listType="picture" id='image' onChange={handleImageChange}>
                    <button>
                    <CameraRetroIcon />
                    </button>   
                </Uploader>
                
                <ButtonToolbar>
                    <Button type='submit' onClick={handleSubmit} appearance="ghost">Submit</Button>
                </ButtonToolbar>
            </Form>
        </Panel>
    </div>
  )
}

export default ImageInput