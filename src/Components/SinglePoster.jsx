import React from 'react'
import {
    Col, Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import {Link} from 'react-router-dom'

class SinglePoster extends React.Component{
    render(){
        return(
            <Col md="3">
                <Card>
                    <CardImg top width="100%" src={this.props.music.album.cover_medium} alt="Card image cap" />
                    <CardBody>
                    <Link to={"/album-page" + this.props.music.album.id}>
                    <CardTitle className="text-truncate">{this.props.music.title}</CardTitle>
                    </Link>
                    <CardSubtitle>{this.props.music.artist.name}</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default SinglePoster