import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
export default function Protected({ Cmp }: any) {
    const navigate = useNavigate();
    // useEffect(() => {
    //     let login = localStorage.getItem('login');
    //     if (!login) {
    //         navigate('/login')
    //     }
    // })
    return (
        <div>
            <Cmp />
        </div>
    )
}
