import { BrowserRouter,Routes, Route } from "react-router-dom";
import MasterPage from "./MasterPage";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import MasterLayout from "./MasterLayout";
import AdminHome from "./AdminHome";
import { RestApiExampe } from "./RestApiExample";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
function MasterRoute()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service" element={<Service />} />
            </Route>
            <Route path="/admin" element={<MasterPage />}>
            <Route index element={<AdminHome />} />
            <Route path="about" element={<About />} />
           
            </Route>
            <Route path="/product" element={<MasterPage />}>
            <Route index element={<RestApiExampe />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="editproduct" element={<EditProduct />} />
            <Route path="deleteproduct" element={<DeleteProduct/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default MasterRoute;