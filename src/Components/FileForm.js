import React from 'react'
import { useForm } from 'react-hook-form'
import FileButton from './FileButton'
import './FileForm.css'

function FileForm ({onChange, onSubmit, name, type}) {
  const { register, errors, handleSubmit } = useForm();


  return (
    <form className="documentformcontainer" onSubmit={handleSubmit(onSubmit)}>
      <div className="documentboxtitleform">
        <p className="documenttitleform">Nuevo  {type === "certificado" ? "certificado" : "documento"}</p>
      </div>
      <fieldset className="documentformfieldset">
        <div className="documentinput-full-container">
            <label className="documentformlabel" htmlFor='documentname'>Título: </label>
            <input
              id='titledocument'
              name='title'
              type='text'
              className="document-input-title"
              ref={register({ required: { value:true, message: 'El campo titulo es requerido' }})}
            />
        </div>
        <div className="error-input-container-document">
          <span style={{color: "red"}}>
            {errors.title?.message}
          </span>
        </div>
      </fieldset>
      <fieldset className="documentformfieldset">
        <div className="documentinput-full-container">
            <label className="documentformlabel" htmlFor='documentcompany'>{type === "certificado" ? "Empresa emisora:" : "Entidad:"} </label>
            <input
              id='documentcompany'
              name='company'
              type='text'
              className="document-input-title"
              ref={register({ required: { value:true, message: 'El campo empresa emisora es requerido' }})}
            />
        </div>
        <div className="error-input-container-document">
          <span style={{color: "red"}}>
            {errors.company?.message}
          </span>
        </div>
      </fieldset>
      <fieldset className="documentformfieldset">
        { type === "certificado" ? 
          <>
            <div className="documentinput-full-container">
              <label className="documentformlabel" htmlFor='documentid'>ID de la credencial:</label>
              <input
                id='documentid'
                name='credential'
                type='text'
                className="document-input-title"
                ref={register({ required: { value:true, message: 'El campo credencial es requerido' }})}
              />
            </div>
            <div className="error-input-container-certificate">
              <span style={{color: "red"}}>
                {errors.credential?.message}
              </span>
            </div>
          </>
          :
          <>
            <div className="documentinput-full-container">
              <label className="documentformlabel" htmlFor='documenttextareaid'>Descripción: </label>
              <textarea
                id='documenttextareaid'
                name='description'
                type='text'
                className="document-inputtextarea"
                ref={register({ required: { value:true, message: 'El campo descripción es requerido' }})}
              />
            </div>
            <div className="error-input-container-document">
              <span style={{color: "red"}}>
                {errors.credential?.message}
              </span>
            </div>
          </>
        }
      </fieldset>
      <fieldset className="documentformfieldset">
        <div className="certicateinputcontainer">
          <FileButton onChange={onChange} name={name} number={1} type="document" onSubmit={onSubmit}/>
        </div>
      </fieldset>
      <button className="formbuttondocument">Añadir</button>
    </form>
  )
}

export default FileForm