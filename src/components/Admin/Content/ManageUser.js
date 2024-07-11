import ModalCreateUser from "./ModalCreateUser";
import "./ManageCreateUser.scss"
import { CiSquarePlus } from "react-icons/ci";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC == 0) {
            setListUser(res.DT);
        }
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                manage user
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button 
                        className="btn btn-primary" 
                        onClick={()=> setShowModalCreateUser(!showModalCreateUser)}> 
                        <CiSquarePlus/> Add new users
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUser
                        listUser = {listUser}
                    />
                </div>
                <ModalCreateUser 
                    show = {showModalCreateUser}
                    setShow = {setShowModalCreateUser}
                    fetchListUsers = {fetchListUsers}
                />
            </div>
        </div>
    )
}
export default ManageUser;