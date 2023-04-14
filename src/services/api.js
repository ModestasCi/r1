import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const loginAdmin = (email, password) =>
    api.post("/auth/login", { email, password });

export const fetchContainers = () => api.get("/containers");

export const fetchContainer = (id) => api.get(`/containers/${id}`);

export const createContainer = (identifier, size) =>
    api.post("/containers", { identifier, size });

export const deleteContainer = (id) => api.delete(`/containers/${id}`);

export const fetchBoxes = (containerId) =>
    api.get(`/containers/${containerId}/boxes`);

export const createBox = (
    weight,
    productName,
    productImage,
    isFlammable,
    isPerishable,
    containerId
) =>
    api.post("/boxes", {
        weight,
        product_name: productName,
        product_image: productImage,
        is_flammable: isFlammable,
        is_perishable: isPerishable,
        container_id: containerId,
    });

export const updateBox = (
    id,
    weight,
    productName,
    productImage,
    isFlammable,
    isPerishable,
    containerId
) =>
    api.put(`/boxes/${id}`, {
        weight,
        product_name: productName,
        product_image: productImage,
        is_flammable: isFlammable,
        is_perishable: isPerishable,
        container_id: containerId,
    });

export const deleteBox = (id) => api.delete(`/boxes/${id}`);

export default api;
