import { useState, useEffect } from 'react';
import { Upload, Button, message, List, Card, Input, Space, Typography, Spin, Modal } from 'antd';
import { UploadOutlined, SearchOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import { uploadFile, getNotes, searchNotes, exportNote, deleteNote } from '../services/api';
import NoteAnalysis from './NoteAnalysis';

const { Search } = Input;
const { Title, Text } = Typography;

const FileUpload = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0
    });

    const fetchNotes = async (page = 1) => {
        try {
            setLoading(true);
            const response = await getNotes(page, pagination.pageSize);
            setNotes(response.notes);
            setPagination({
                ...pagination,
                current: page,
                total: response.total
            });
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleUpload = async (file) => {
        try {
            setLoading(true);
            await uploadFile(file);
            message.success('File uploaded and processed successfully');
            fetchNotes();
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
        return false;
    };

    const handleSearch = async (value) => {
        if (!value.trim()) {
            fetchNotes();
            return;
        }
        try {
            setLoading(true);
            const response = await searchNotes(value);
            setNotes(response.notes);
            setPagination({
                ...pagination,
                current: 1,
                total: response.notes.length
            });
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleExport = async (noteId) => {
        try {
            await exportNote(noteId);
            message.success('Note exported successfully');
        } catch (error) {
            message.error(error.message);
        }
    };

    const handleDelete = async (noteId) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this note?',
            content: 'This action cannot be undone.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                try {
                    await deleteNote(noteId);
                    message.success('Note deleted successfully');
                    fetchNotes();
                } catch (error) {
                    message.error(error.message);
                }
            }
        });
    };

    return (
        <div className="file-upload-container">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Card>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Title level={4}>Upload Document</Title>
                        <Upload
                            beforeUpload={handleUpload}
                            showUploadList={false}
                            accept=".pdf,.png,.jpg,.jpeg"
                        >
                            <Button icon={<UploadOutlined />}>Upload File</Button>
                        </Upload>
                    </Space>
                </Card>

                <Card>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Title level={4}>Search Notes</Title>
                        <Search
                            placeholder="Search notes..."
                            onSearch={handleSearch}
                            enterButton={<SearchOutlined />}
                            style={{ width: '100%' }}
                        />
                    </Space>
                </Card>

                {loading ? (
                    <Spin size="large" />
                ) : (
                    <>
                        <List
                            grid={{ gutter: 16, column: 1 }}
                            dataSource={notes}
                            renderItem={note => (
                                <List.Item>
                                    <Card
                                        title={note.filename}
                                        extra={
                                            <Space>
                                                <Button 
                                                    icon={<ExportOutlined />} 
                                                    onClick={() => handleExport(note._id)}
                                                >
                                                    Export
                                                </Button>
                                                <Button 
                                                    icon={<DeleteOutlined />} 
                                                    onClick={() => handleDelete(note._id)}
                                                    danger
                                                >
                                                    Delete
                                                </Button>
                                            </Space>
                                        }
                                    >
                                        <Space direction="vertical" style={{ width: '100%' }}>
                                            <Text>{note.summary}</Text>
                                            <Text type="secondary">
                                                Created: {new Date(note.timestamp).toLocaleString()}
                                            </Text>
                                            <Button 
                                                type="link" 
                                                onClick={() => setSelectedNote(note)}
                                            >
                                                View Analysis
                                            </Button>
                                        </Space>
                                    </Card>
                                </List.Item>
                            )}
                            pagination={{
                                ...pagination,
                                onChange: fetchNotes
                            }}
                        />

                        {selectedNote && (
                            <Modal
                                title="Note Analysis"
                                open={!!selectedNote}
                                onCancel={() => setSelectedNote(null)}
                                footer={null}
                                width={800}
                            >
                                <NoteAnalysis
                                    note={selectedNote}
                                    onExport={handleExport}
                                />
                            </Modal>
                        )}
                    </>
                )}
            </Space>
        </div>
    );
};

export default FileUpload; 