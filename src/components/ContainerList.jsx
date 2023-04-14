import React from 'react';
import styles from './ContainerList.module.scss';

function ContainerList({ containers, onContainerClick }) {
    return (
        <div className={styles['container-list']}>
            <h2>Containers</h2>
            <ul>
                {containers.map((container) => (
                    <li key={container.id} onClick={() => onContainerClick(container)}>
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
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContainerList;
