import config from '../config';

const API_BASE_URL = config.API_BASE_URL;

export const uploadPDF = async (file) => {
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

export const getPDFContent = async (pdfId) => {
    const response = await fetch(`${API_BASE_URL}/pdf/${pdfId}`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch PDF content');
    }
    return response.json();
};

export const generateAINotes = async (pdfId) => {
    const response = await fetch(`${API_BASE_URL}/pdf/${pdfId}/notes`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate AI notes');
    }
    return response.json();
};

export const generateQuiz = async (pdfId) => {
    const response = await fetch(`${API_BASE_URL}/pdf/${pdfId}/quiz`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate quiz');
    }
    return response.json();
};

export const generateFlashcards = async (pdfId) => {
    const response = await fetch(`${API_BASE_URL}/pdf/${pdfId}/flashcards`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate flashcards');
    }
    return response.json();
};

export const chatWithAI = async (pdfId, message) => {
    const response = await fetch(`${API_BASE_URL}/pdf/${pdfId}/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to get AI response');
    }
    
    return response.json();
}; 