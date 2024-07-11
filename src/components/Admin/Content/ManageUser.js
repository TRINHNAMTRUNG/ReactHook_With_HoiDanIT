import ModalCreateUser from "./ModalCreateUser";
import "./ManageCreateUser.scss"
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import TableUser from "./TableUser";
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
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
                    <TableUser/>
                </div>
                <ModalCreateUser 
                    show = {showModalCreateUser}
                    setShow = {setShowModalCreateUser}
                />
            </div>
        </div>
    )
}
export default ManageUser;