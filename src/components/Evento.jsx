import React from 'react';

const Evento = ({evento}) => {
    //extraer texto

    let {text} = evento.description;

    if(text){
        if (text.length >= 250) {
            text = text.substr(0,200);
        }
    }else {
        text = null
    }

    return(
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {evento.logo  ? <img src={evento.logo.url} alt={evento.name.text}/> : null}
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>
                    <p>{text}</p>
                </div>
                <div className="uk-card-footer">
                    <a href={evento.url} target="_blank" rel="noopener noreferrer" className="uk-button uk-button-secondary">
                        Más info
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Evento;
