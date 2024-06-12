
"use client"
import React, { useEffect, useState } from 'react';
import { Table, Button } from '@mantine/core';
import classes from './TableScrollArea.module.css';

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const postsResponse = await fetch('http://localhost:3001/Customers');
      if (!postsResponse.ok) {
        throw new Error('Failed to fetch data');
      }
      const postsData = await postsResponse.json();
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Display an error message to the user
    }
  };

  const handleButtonClick = (id) => {
    // Handle button click event here
    console.log(`Button clicked for post with ID: ${id}`);
  };

  const postRows = posts.map((post) => (
    <tr key={post.id}>
      <td style={{ textAlign: 'center' }}>{post.id}</td>
      <td style={{ textAlign: 'center' }}>{post.title}</td>
      <td style={{ textAlign: 'center' }}>{post.views}</td>
      <td style={{ textAlign: 'center', display: 'flex', gap: '8px', justifyContent: 'center' }}>
      <Button className={`${classes.lightButton} ${classes.button}`} style={{ width: '100px' }}>Edit</Button>
      <Button className={`${classes.redOutlineButton} ${classes.button}`} style={{ width: '100px' }}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Table style={{ width: '100%' }} miw={700}>
        <Table.Thead className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
          <Table.Tr>
            <Table.Th style={{ width: '20%' }}>ID</Table.Th>
            <Table.Th style={{ width: '50%' }}>Title</Table.Th>
            <Table.Th style={{ width: '30%' }}>Views</Table.Th>
            <Table.Th style={{ textAlign: 'center' }}>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{postRows}</Table.Tbody>
      </Table>
    </div>
  );
}
