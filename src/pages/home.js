import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:8080/home', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setMessage(response.data);
            } catch (error) {
                console.error('Failed to fetch message', error);
            }
        };

        fetchMessage();
    }, []);

    return <h1>{message}</h1>;
}
