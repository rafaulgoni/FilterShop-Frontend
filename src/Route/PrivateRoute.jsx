import { Navigate, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
            return <span className="loading loading-bars loading-lg text-[#ff1111] text-center"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}