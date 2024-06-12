"use client"

import React, { useEffect, useState } from 'react';
import { Table, Button } from '@mantine/core';
import classes from './TableScrollArea.module.css';

export default function Page() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const commentsResponse = await fetch('http://localhost:3001/comments');
      if (!commentsResponse.ok) {
        throw new Error('Failed to fetch data');
      }
      const commentsData = await commentsResponse.json();
      setComments(commentsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const commentRows = comments.map((comment) => (
    <tr key={comment.id} style={{ border: '1px solid #e0e0e0' }}>
      <td style={{ textAlign: 'center' }}>{comment.id}</td>
      <td style={{ textAlign: 'center' }}>{comment.text}</td>
      <td style={{ textAlign: 'center' }}>{comment.postId}</td>
      <td style={{ textAlign: 'center', display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <Button className={`${classes.lightButton} ${classes.button}`} style={{ width: '100px' }}>Edit</Button>
        <Button className={`${classes.redOutlineButton} ${classes.button}`} style={{ width: '100px' }}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Table style={{ width: '100%' }} miw={700}>
        <Table.Thead className={`${classes.header}`}>
          <Table.Tr>
            <Table.Th style={{ width: '20%' }}>ID</Table.Th>
            <Table.Th style={{ width: '50%' }}>Text</Table.Th>
            <Table.Th style={{ width: '30%' }}>Post ID</Table.Th>
            <Table.Th style={{ textAlign: 'center' }}>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody style={{ border: '1px solid #e0e0e0' }}>{commentRows}</Table.Tbody>
      </Table>
    </div>
  );
}
