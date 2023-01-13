import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';
import { IUser } from '../../interfaces/user';

const fakeListUser: IUser[] = [
    {
        id: 1,
        username: 'admin',
        fullname: 'admin',
        email: '19T1021186@husc.edu.vn',
        avatar: 'image/user_avatar_default.jpg',
        is_email_verified: 0,
        email_verified_at: null,
        created_at: '2023-01-03 10:18:23',
        updated_at: '2023-01-03 10:18:23',
    },
    {
        id: 2,
        username: 'phuoc1',
        fullname: 'phuoc1',
        email: 'nguyendonphuochusc@gmail.com',
        avatar: 'image/user_avatar_default.jpg',
        is_email_verified: 0,
        email_verified_at: null,
        created_at: '2023-01-03 10:18:23',
        updated_at: '2023-01-03 10:18:23',
    },
    {
        id: 3,
        username: 'phuoc2',
        fullname: 'phuoc2',
        email: 'hamburger153258@gmail.com',
        avatar: 'image/user_avatar_default.jpg',
        is_email_verified: 0,
        email_verified_at: null,
        created_at: '2023-01-03 10:18:23',
        updated_at: '2023-01-03 10:18:23',
    },
];

const Home: React.FC = () => {
    const [users, setUsers] = useState(fakeListUser as IUser[]);

    return (
        <>
            <Navbar />
            <Table />
        </>
    );
};

export default Home;
