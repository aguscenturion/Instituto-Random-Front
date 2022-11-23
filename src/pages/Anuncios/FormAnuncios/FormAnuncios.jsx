import React, { useEffect, useState } from "react";
import LayoutContainer from "../../../components/layout/LayoutContainer";
import { crearAnuncio, limpiarAnuncios } from "../../../redux/actions/anuncios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {  useNavigate } from "react-router-dom";
import './FormAnuncios.css'

const FormAnuncios = ({ crearAnuncio, limpiarAnuncios }) => {
  const [contenido, setContenido] = useState("");
  const [tipo, setTipo] = useState("Global");
  const [fotoPortada, setfotoPortada] = useState("");
  const [isSend, setIsSend] = useState(false)

  const navigate = useNavigate()

  useEffect(()=> {
    if (!isSend) return;
    navigate("/anuncios");
  }, [isSend])

  const history = useNavigate()
   
  return (
    <LayoutContainer>
      <br></br>
      <div className="container-fluid">
        <div className="container">
          <div className="containerLogin"></div>
          <div className="profile-env">
          <section className="profile-feed"> 
          <form 
                    className="profile-post-form" 
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      crearAnuncio({ contenido,tipo,fotoPortada });
                      setContenido("");
                      setIsSend(true)
                      history.goBack()
                      limpiarAnuncios()
                      
                    }}
                    >
                    <textarea
                      className="form-control autogrow"
                      placeholder="Que quieres publicar?"
                      style={{
                        overflow: "hidden",
                        wordWrap: "break-word",
                        resize: "horizontal",
                        height: "80px",
                      }}
                      name="contenido"
                      required
                      value={contenido}
                      onChange={(e)=>setContenido(e.target.value)}
                    ></textarea>
                    <div className="form-options">
                      <div className="post-submit">
                        <button type="submit" className="btn btn-success text-white">
                          Publicar
                        </button>
                      </div>
                    </div>
                  </form>
          </section>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

FormAnuncios.propTypes = {
    crearAnuncio: PropTypes.func.isRequired,
    limpiarAnuncios: PropTypes.func.isRequired,
}

export default connect(null, {crearAnuncio,limpiarAnuncios})(FormAnuncios)