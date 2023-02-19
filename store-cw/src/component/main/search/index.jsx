
import { useDispatch } from "react-redux";
import "./style.css"

const Search = ({ onFilterHandler }) => {

    const submitForm = (e) => {
        onFilterHandler(e)
    }
    const dispatch = useDispatch()
    return (
        <div className="d-flex justify-content-between mb-4">
            <p># products</p>
            <input type="text" placeholder="search product" onChange={(e) => submitForm(e.target.value)} />
        </div>
    )
}

export default Search;