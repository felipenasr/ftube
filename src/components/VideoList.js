import React, {Component} from 'react';
import { List, Image, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';


class VideoList extends Component {

    renderVideo(video) {
        return(
            <List.Item key={video.etag}>
                <Image src={video.snippet.thumbnails.default.url}></Image>
                <List.Content>
                    <List.Header>{video.snippet.title}</List.Header>
                </List.Content>
            </List.Item>
        )
    }

    render() {
        return(
            <div className='video-list'>
                <List animated verticalAlign='middle'>
                    {
                        this.props.carregando && (
                            <Dimmer active inverted>
                                <Loader size='medium'>Loader</Loader>
                            </Dimmer>
                        )
                    }
                    {
                        this.props.videos.map(video => {
                            console.log(video);
                            return this.renderVideo(video);
                        })
                    }
                </List>
            </div>
        )

    }
}

const mapStateProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro,
    }
}

export default connect(mapStateProps, null)(VideoList);