import React from 'react';
import { Card, List, Tag, Typography, Space, Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const NoteAnalysis = ({ note, onExport }) => {
    const getSentimentColor = (sentiment) => {
        switch (sentiment.toLowerCase()) {
            case 'positive':
                return 'green';
            case 'negative':
                return 'red';
            default:
                return 'blue';
        }
    };

    return (
        <div className="note-analysis">
            <Card title="Analysis Results" extra={
                <Button 
                    icon={<ExportOutlined />} 
                    onClick={() => onExport(note._id)}
                >
                    Export
                </Button>
            }>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    {/* Summary Section */}
                    <div>
                        <Title level={4}>Summary</Title>
                        <Paragraph>{note.summary}</Paragraph>
                    </div>

                    {/* Sentiment Section */}
                    <div>
                        <Title level={4}>Sentiment</Title>
                        <Tag color={getSentimentColor(note.sentiment)}>
                            {note.sentiment}
                        </Tag>
                    </div>

                    {/* Keywords Section */}
                    <div>
                        <Title level={4}>Keywords</Title>
                        <Space wrap>
                            {note.keywords.map((keyword, index) => (
                                <Tag key={index}>{keyword}</Tag>
                            ))}
                        </Space>
                    </div>

                    {/* Entities Section */}
                    <div>
                        <Title level={4}>Named Entities</Title>
                        <List
                            size="small"
                            dataSource={note.entities}
                            renderItem={entity => (
                                <List.Item>
                                    <Text strong>{entity.text}</Text>
                                    <Tag>{entity.label}</Tag>
                                </List.Item>
                            )}
                        />
                    </div>

                    {/* Highlights Section */}
                    <div>
                        <Title level={4}>Key Highlights</Title>
                        <List
                            size="small"
                            dataSource={note.highlights}
                            renderItem={highlight => (
                                <List.Item>
                                    <Text>{highlight}</Text>
                                </List.Item>
                            )}
                        />
                    </div>
                </Space>
            </Card>
        </div>
    );
};

export default NoteAnalysis; 