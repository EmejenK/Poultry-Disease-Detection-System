import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Diseases from '../pages/Diseases/Diseases';
import DiseaseDetails from '../pages/Diseases/DiseaseDetails';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/diseases" element={<DiseaseDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>

    )
};

export default Routers;