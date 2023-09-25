import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddArticle(){
    
    const navigate = useNavigate();

    const add = async (values)=>{

        try{
            const {data} = await axios.post(`http://localhost:3001/articles`, values);
            navigate('/blog');
            console.log(data);

        } catch(error){
            console.error(error)
        }
    }

    const formik = useFormik({
        initialValues:{
            title:'',
            description:'',
            image:''

        },
        //onSubmit = onSubmit =>replaced by :
        onSubmit : add
    });
    console.log(formik);
   

    return(
        <>
        <div>
            <div>
                <h1>Add a new article</h1>

            </div>
            <div>
                <Link to = "/blog" className="btn btn-primary">
                <FaArrowLeft/> <span></span>
                    Back to list
                </Link>
            </div>
        </div>

        <div className="row my-5">
            <div className="col-md-6 mx-auto">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group my-3">
                        <label htmlFor="">Title</label>
                    <input type="text" name="title" id="title" className="form-control" placeholder="yourtitle" 
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="">Description</label>
                    <textarea name="description" id="description" rows="5" className="form-control" placeholder="Yourdescription"
                    onChange={formik.handleChange}> 
                    {formik.values.description}
                    </textarea>
                        </div>
                    <div className="form-group my-3">
                        <label htmlFor="">Image</label>
                        <input type="url" name="image" id="image" className="form-control" placeholder="Yourimage"
                         onChange={formik.handleChange} value={formik.values.image}
                         />
                         </div>
                    <div className="d-grid my-3">
                        <button className="btn btn-primary" >
                            
                            <span className="ms-2">Add an article</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )

}
export default AddArticle;