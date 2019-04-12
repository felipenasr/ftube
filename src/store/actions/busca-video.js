import youtubeSearch from 'youtube-api-v3-search';
import YTApi from './../../api';

const API_KEY = YTApi;



export const buscaVideoInicio = () => {
    return {
        type: 'BUSCA_VIDEO_INICIO',
        carregando: true,
        erro: false
    }
}

export const buscaVideoSucesso = (videos) => {
    return {
        type: 'BUSCA_VIDEO_SUCESSO',
        carregando: false,
        videos,
        erro: false
    }
}

export const buscaVideoErro = () => {
    return {
        type: 'BUSCA_VIDEO_ERRO',
        carregando: false,
        erro: true
    }
}


export const buscaVideo = (termo) => {
    return dispatch => {
        dispatch(buscaVideoInicio());

        youtubeSearch(API_KEY, {q: termo})
            .then((data) => {
                console.log(data);
                dispatch(buscaVideoSucesso(data.items))
            })
            .catch(() => dispatch(buscaVideoErro()))
    }
}