import React from 'react';
import './Table.scss';
import Item from './Item/Item';
import { IUser } from '../../interfaces/user';

type Props = {
    list: IUser[];
};

const Table: React.FC = () => {
    return (
        <div className="container p-5">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Image</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Item />
                </tbody>
            </table>
        </div>
    );
};

export default Table;
