// constants.js
export const SAMPLE_USER_ID = 1;
export const API_URL = import.meta.env.VITE_API_URL || "https://barnyard-buddies-e9ccf417b711.herokuapp.com/";
export const STATIC_URL = process.env.NODE_ENV === 'production' 
  ? 'https://barnyard-buddies-e9ccf417b711.herokuapp.com/static/' 
  : '/static/';

export const getImageUrl = (avatarUrl) => {
    if (!avatarUrl) return defaultImage;
    
    // Extract the filename from the full URL
    const filename = avatarUrl.split('/').pop();
    
    // Construct the new URL using MEDIA_URL
    return `${STATIC_URL}avatar/${filename}`;
};