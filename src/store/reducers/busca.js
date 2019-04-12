const initalState = {
    videos: [],
    carregando: false,
    erro: false
}

export default function busca(state = initalState, actions) {
    switch(actions.type) {
        case 'BUSCA_VIDEO_INICIO': 
            return{
                videos: [],
                carregando: true,
                erro: false 
            };
        case 'BUSCA_VIDEO_SUCESSO': 
            return{
                videos: actions.videos,
                carregando: false,
                erro: false 
            };
        case 'BUSCA_VIDEO_ERRO': 
            return{
                videos: [],
                carregando: false,
                erro: true 
            };
        default: return state;
    }   
}