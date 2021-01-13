import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
//import { useHistory } from "react-router-dom"

const PostForm = (props) => {

    const [post, setPost] = useState({})

    //const history = useHistory()

    const handleChange = (e) => {
        const newPost = { ...post }
        newPost[e.target.name] = e.target.value
        console.log(newPost)
        setPost(newPost)
    }

    const savePostObj = () => {
        AddNewPost(post)
        //.then(() => history.pushState('/'))

    }

    const AddNewPost = (post) => {
        return fetch('/api/post', {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify(post)
        })
    }

    return (
        <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Title of Post" onChange={(e) => handleChange(e)} />
            </FormGroup>
            <FormGroup>
                <Label for="imageUrl">Image URL</Label>
                <Input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" onChange={(e) => handleChange(e)} />
            </FormGroup>
            <FormGroup>
                <Label for="caption">Caption</Label>
                <Input type="text" name="caption" id="caption" placeholder="Caption" onChange={(e) => handleChange(e)} />
            </FormGroup>
            <FormGroup>
                <Label for="userProfileId">User</Label>
                <Input type="text" name="userProfileId" id="userProfileId" placeholder="User Id" onChange={(e) => handleChange(e)} />
            </FormGroup>
            <Button
                onClick={e => {
                    e.preventDefault()
                    savePostObj()
                }}>Submit</Button>
        </Form>
    );
}

export default PostForm