import React from 'react';
import Button from '../../Button/Button';

const Item: React.FC = () => {
    return (
        <tr>
            <th scope="row">1</th>
            <td>Admin</td>
            <td>Otto</td>
            <td>DSA</td>
            <td>
                <Button />
            </td>
        </tr>
    );
};

export default Item;
