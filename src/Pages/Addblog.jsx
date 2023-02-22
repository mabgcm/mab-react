import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import { db, auth } from "../firebase";
import {
    addDoc,
    collection,
    serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from 'react-router';
import { Editor } from '@tinymce/tinymce-react';

const initialState = {
    title: "",
    category: [],
};

const categoryOption = [
    "Business",
    "Career",
    "Cinema",
    "Cooking",
    "Design",
    "Ecology",
    "EdTech",
    "Education",
    "Entertainment",
    "Health",
    "History",
    "Music",
    "Personal Development",
    "Politics",
    "Programming",
    "Shopping",
    "Sprituality",
    "Technology",
    "Travel",
];

const notify = () =>
    toast.success("Blog posted successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT
    });

const Addblog = () => {

    const user = auth.currentUser

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const [numParagraphs, setNumParagraphs] = useState(1);
    const [numPhotos, setNumPhotos] = useState(1);
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();

    const { title, category } = form;


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user && category && title) {
            try {
                await addDoc(collection(db, "blogpost"), {
                    ...form,
                    timestamp: serverTimestamp(),
                    author: auth.currentUser.displayName,
                    userId: auth.currentUser.uid,
                    profile: auth.currentUser.photoURL,
                    likes: [],
                    comments: []
                });
                // toast.success("Blog posted successfully!");
            } catch (err) {
                console.log(err);
            }
        } else {
            // return toast.error("Please fill all required fields!");
        }

        navigate("/account");
    };

    return (
        <div>
            <section className='mx-2 my-5 pt-5 text-center row'>
                <h1 className='mb-5'>Create Your Blog Post</h1>

                <div className="col-8 m-auto">
                    <Paper elevation={3} className='paper-contact pb-3 pt-3 px-2'>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '90%' },
                            }}
                            noValidate
                            onSubmit={handleSubmit}
                            autoComplete="off"
                        // ref={form} onSubmit={sendEmail}
                        >
                            <div>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    label="Your Main Title"
                                    value={title}
                                    onChange={handleChange}
                                    placeholder="Enter the main title here.."
                                />
                                <FormControl sx={{ width: '90%' }}>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Select the blogpost category"
                                        onChange={onCategoryChange}
                                    >
                                        {categoryOption.map((option, index) => (
                                            <MenuItem value={option || ""} key={index}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                {Array.from({ length: numParagraphs }, (_, i) => (
                                    <div key={i} className=' pt-2'>
                                        <TextField
                                            id={`parag${i + 1}`}
                                            name={`parag${i + 1}`}
                                            label={`Paragraph${i + 1}`}
                                            // value={`parag${i + 1}`}
                                            onChange={handleChange}
                                            multiline
                                            rows={4}
                                            placeholder="Enter your paragraph here.."
                                        />
                                    </div>
                                ))}

                                {Array.from({ length: numPhotos }, (_, i) => (
                                    <div key={i}>
                                        <TextField
                                            id={`image${i + 1}`}
                                            name={`image${i + 1}`}
                                            label={`Photo${i + 1} link`}
                                            // value={`image${i + 1}`}
                                            onChange={handleChange}
                                            placeholder="Paste your photo link here.."
                                        />
                                        <TextField
                                            id={`caption${i + 1}`}
                                            name={`caption${i + 1}`}
                                            label={`Add a caption for Photo${i + 1}`}
                                            // value={`caption${i + 1}`}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder={`Type your caption for Photo${i + 1} here`}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button type='button' className='btn btn-secondary m-1' onClick={() => setNumParagraphs(numParagraphs + 1)}>Add another paragraph</button>

                            <button type='button' className='btn btn-secondary m-1' onClick={() => setNumPhotos(numPhotos + 1)}>Add another Photo URL</button>

                            <button id='signin' onClick={notify} variant="success" type="submit" className='btn btn-success'>Send</button>
                            <ToastContainer />
                        </Box>
                    </Paper>
                </div>
            </section>
        </div>
    )
}

export default Addblog