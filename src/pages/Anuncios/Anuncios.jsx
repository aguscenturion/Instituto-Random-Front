import LayoutContainer from '../../components/layout/LayoutContainer'
import './Anuncios.css'
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import { getPosts, eliminarAnuncio } from "../../redux/actions/anuncios";


const Anuncios = ({getPosts, eliminarAnuncio, auth, anuncio: { anuncios,loading }}) => {

  useEffect(()=>{
    getPosts()
  },[])
    
  return (
    <>
    <LayoutContainer>
      <div className="container">
<br></br><br></br><br></br>
<div className="container bootstrap snippets bootdey">
  {
    auth?.user?.perfiles[0]?.tipo[0]?.admin == true ?
    <Link to="/form-anuncios" class="btn btn-success text-white">
                  Subir Anuncio
    </Link>
    : null
  }
  
  <br></br><br></br>
{
      anuncios?.map((item)=>{
        return(
       <>
          <div className="col-sm-8">
        <div className="panel panel-white post panel-shadow">
          { !auth?.loading && item?.autorNombre?._id === auth?.user?._id &&
                <div class="m-1">
                <div className='text-end upgrade-btn'>
                <buttom
                  class="btn btn-danger text-white"
                  onClick={(e) => { 
                    eliminarAnuncio(item?._id)
                    getPosts();
                  }}
                >
                  <i class="m-r-10 mdi mdi-delete-forever"></i> Eliminar
                </buttom>
                </div>
            </div>
              }
            <div className="post-heading">
                <div className="pull-left image">
                    <img src="https://bootdey.com/img/Content/user_1.jpg" className="img-circle avatar" alt="user profile image"/>
                </div>
                
                <div className="pull-left meta">
                    <div className="title h5">
                        <a href="#"><b>{item?.autorNombre?.nombre} {/* {item?.autorNombre?.apellido}  */}</b></a>
                        
                    </div>
                    
                    
                    {/* <h6 className="text-muted time">1 minute ago</h6> */}
                </div>
            </div>
            <br></br> 
            <div className="post-description"> 
                <p>{item?.contenido}</p>
                
            </div>
            
        </div>
    </div>
    <br></br>
       </>
        )
      })
    }

    
</div>
      </div>
    </LayoutContainer>
    </>
  )
}
Anuncios.propTypes = {
  getPosts: PropTypes.func.isRequired,
  anuncios: PropTypes.object.isRequired,
  auth: PropTypes.func.isRequired,
  eliminarAnuncio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anuncio: state.anuncios,
  auth: state.auth
});

export default connect(mapStateToProps, { getPosts, eliminarAnuncio})(Anuncios);

