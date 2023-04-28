import React from 'react'
import { Form , Uploader, Button, ButtonToolbar, Panel} from 'rsuite'
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';

const ImageInput = () => {
  return (
    <div>
        <Panel shaded bordered style={{ display: 'inline-block', margin:'40px' }}>
            <Form>
                <h3>UPLOAD SECTION</h3>
                <Form.Group controlId="input">
                <Form.Control name="input" placeholder='name'/>
                <Form.HelpText tooltip>Enter the image name.</Form.HelpText>
                </Form.Group>

                <Form.Group controlId="input">
                <Form.Control name="input" placeholder='description'/>
                <Form.HelpText tooltip>Briefly describe it</Form.HelpText>
                </Form.Group>

                <Uploader multiple listType="picture" action="//jsonplaceholder.typicode.com/posts/">
                    <button>
                    <CameraRetroIcon />
                    </button>
                </Uploader>
                
                <ButtonToolbar>
                    <Button appearance="ghost">Submit</Button>
                </ButtonToolbar>
            </Form>
        </Panel>
    </div>
  )
}

export default ImageInput