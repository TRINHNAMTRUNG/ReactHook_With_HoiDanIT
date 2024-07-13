import ModalCreateUser from "./ModalCreateUser";
import "./ManageCreateUser.scss"
import { CiSquarePlus } from "react-icons/ci";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC == 0) {
            setListUser(res.DT);
        }
    }
    const handleClickBtnUpdate = (user)=> {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }
    const handleClickBtnView = (user)=> {
        setShowModalViewUser(true);
        setDataUpdate(user);
    }
    const handleClickBtnDelete = (user)=> {
        setShowModalDeleteUser(true);
        setDataDelete(user);
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
                        onClick={() => setShowModalCreateUser(!showModalCreateUser)}>
                        <CiSquarePlus /> Add new users
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate = {handleClickBtnUpdate}
                        handleClickBtnView = {handleClickBtnView}
                        handleClickBtnDelete = {handleClickBtnDelete}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate = {dataUpdate}
                    fetchListUsers={fetchListUsers}
                    setDataUpdate = {setDataUpdate}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataUpdate = {dataUpdate}
                    setDataUpdate = {setDataUpdate}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete = {dataDelete}
                    setDataUpdate = {setDataUpdate}
                />
            </div>
        </div>
    )
}
export default ManageUser;