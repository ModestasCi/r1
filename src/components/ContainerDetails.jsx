import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ContainerDetails.module.scss';

function ContainerDetails({ container, onBack }) {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        fetchBoxes();
    }, [container]);

    async function fetchBoxes() {
        const response = await axios.get(`/containers/${container.id}/boxes`);
        setBoxes(response.data);
    }

    return (
        <div className={styles['container-details']}>
            <h2>Container Details</h2>
            <div>
                <strong>ID:</strong> {container.identifier}
            </div>
            <div>
                <strong>Size:</strong> {container.size}
            </div>
            <div>
                <strong>Number of boxes:</strong> {container.boxes_count}
            </div>
            <div>
                <strong>Total weight:</strong> {container.total_weight}
            </div>
            {container.is_full && <span className="full-tag">FULL</span>}
            <h3>Boxes</h3>
            <ul>
                {boxes.map((box) => (
                    <li key={box.id}>
                        <div>
                            <strong>Weight:</strong> {box.weight}
                        </div>
                        <div>
                            <strong>Product Name:</strong> {box.product_name}
                        </div>
                        <div>
                            <strong>Product Image:</strong> <img src={box.product_image} alt={box.product_name} />
                        </div>
                        <div>
                            <strong>Flammable:</strong> {box.is_flammable ? 'Yes' : 'No'}
                        </div>
                        <div>
                            <strong>Perishable:</strong> {box.is_perishable ? 'Yes' : 'No'}
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={onBack}>Back</button>
        </div>
    );
}

export default ContainerDetails;
