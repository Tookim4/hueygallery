const express = require('express')
const Image = require('../models/imageModel');
const multer = require('multer');

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Initialize Multer upload object
const upload = multer({ storage : storage });

// const upload = multer({ dest: 'uploads/' })

const createImage = async (req, res) => {
    console.log(req.file) // add this line for debugging purposes
    try {
        const { name, description } = req.body;
    
        const imageUrl = req.file.path;
    
        const image = new Image({
          name,
          description,
          imageUrl,
        });
    
        await image.save();
    
        res.status(201).json({
          success: true,
          message: 'Image created successfully',
          data: image,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Something went wrong',
          error: error.message,
        });
      }
  };

  
const getImages = async(req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteImage = async(req, res) => {
    try {
        const image = await Image.findByIdAndDelete(req.params.id);
        if (!image) {
          return res.status(404).json({ success: false, message: 'Image not found' });
        }
        res.status(200).json({ success: true, message: 'Image deleted' });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error', error });
      }
}

module.exports = { createImage, getImages, deleteImage, upload };