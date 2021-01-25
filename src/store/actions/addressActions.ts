const ADD_ADDRESS = "addressActions/ADD_ADDRESS" as const;
const DELETE_ADDRESS = "addressActions/DELETE_ADDRESS" as const;

const addAddress = (data: any) => ({ type: ADD_ADDRESS, payload: data });
const deleteAdress = () => ({ type: DELETE_ADDRESS, payload: [] });

export default { addAddress, deleteAdress };
