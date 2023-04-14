import React, { useState } from 'react';
import styles from './BoxForm.module.scss';

function BoxForm({ onSubmit, box = null, containers }) {
    const [weight, setWeight] = useState(box ? box.weight : '');
    const [productName, setProductName] = useState(box ? box.product_name : '');
    const [productImage, setProductImage] = useState(box ? box.product_image : '');
    const [isFlammable, setIsFlammable] = useState(box ? box.is_flammable : false);
    const [isPerishable, setIsPerishable] = useState(box ? box.is_perishable : false);
    const [containerId, setContainerId] = useState(box ? box.container_id : '');

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ weight, productName, productImage, isFlammable, isPerishable, containerId });
    }

    return (
        <div className={styles['box-form']}>
            <h2>{box ? 'Edit Box' : 'Create Box'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(parseFloat(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="productImage">Product Image URL:</label>
                    <input
                        type="text"
                        id="productImage"
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isFlammable}
                            onChange={(e) => setIsFlammable(e.target.checked)}
                        />
                        Flammable
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isPerishable}
                            onChange={(e) => setIsPerishable(e.target.checked)}
                        />
                        Perishable
                    </label>
                </div>
                <div>
                    <label htmlFor="containerId">Container:</label>
                    <select id="containerId" value={containerId} onChange={(e) => setContainerId(e.target.value)} required>
                        <option value="">Select a container</option>
                        {containers.map((container) => (
                            <option key={container.id} value={container.id}>
                                {container.identifier} ({container.size})
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">{box ? 'Update Box' : 'Create Box'}</button>
            </form>
        </div>
    );
}

export default BoxForm;
