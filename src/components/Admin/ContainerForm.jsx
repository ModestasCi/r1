import React, { useState } from 'react';
import styles from './ContainerForm.module.scss';

function ContainerForm({ onSubmit, container = null }) {
    const [identifier, setIdentifier] = useState(container ? container.identifier : '');
    const [size, setSize] = useState(container ? container.size : '');

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ identifier, size });
    }

    return (
        <div className={styles['container-form']}>
            <h2>{container ? 'Edit Container' : 'Create Container'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="identifier">Identifier:</label>
                    <input
                        type="text"
                        id="identifier"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="size">Size:</label>
                    <select id="size" value={size} onChange={(e) => setSize(e.target.value)} required>
                        <option value="">Select a size</option>
                        <option value="S">S (2 boxes)</option>
                        <option value="M">M (4 boxes)</option>
                        <option value="L">L (6 boxes)</option>
                    </select>
                </div>
                <button type="submit">{container ? 'Update Container' : 'Create Container'}</button>
            </form>
        </div>
    );
}

export default ContainerForm;
