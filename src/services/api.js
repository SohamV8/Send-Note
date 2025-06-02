import config from '../config';

const API_BASE_URL = config.API_BASE_URL;

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formData,
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
    }
    
    return response.json();
};

export const getNotes = async (page = 1, perPage = 10) => {
    const response = await fetch(`${API_BASE_URL}/notes?page=${page}&per_page=${perPage}`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch notes');
    }
    return response.json();
};

export const getNote = async (noteId) => {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch note');
    }
    return response.json();
};

export const deleteNote = async (noteId) => {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete note');
    }
    return response.json();
};

export const searchNotes = async (query) => {
    const response = await fetch(`${API_BASE_URL}/notes/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Search failed');
    }
    return response.json();
};

export const exportNote = async (noteId) => {
    const response = await fetch(`${API_BASE_URL}/notes/export/${noteId}`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Export failed');
    }
    
    // Create a blob from the response
    const blob = await response.blob();
    
    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `note_${noteId}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}; 