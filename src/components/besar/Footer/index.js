import React from 'react';
import { Col, Container, Image, Row, Nav } from 'react-bootstrap';
import { colors, weight } from '../../../random';
import moment from 'moment'
const dateTime = new Date()

const Footer = () => {
    return (
        <div>
            <Container fluid style={container}>
                <Row xs={1} md={1}>
                    <Col>
                        <Nav className="justify-content-center">
                            <Nav.Link href='https://www.facebook.com/Gekari%20Haleluya'>
                                <Image
                                    style={img}
                                    alt='facebook gekari'
                                    src="https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/fb.svg?alt=media&token=fc323efc-1710-42eb-956f-03604cf323c5"
                                    roundedCircle />
                            </Nav.Link>
                            <Nav.Link href='https://www.instagram.com/gekarihaleluya'>
                                <Image
                                    style={img}
                                    alt='instagram gekari'
                                    src="https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/ig.svg?alt=media&token=b89d6e9a-af7f-4df4-b58a-70883e1e92cb" roundedCircle />
                            </Nav.Link>
                            <Nav.Link href='https://wa.me/6281311246570?text=Shalom%20Admin%20Gekari%20Haleluya%20...%20'>
                                <Image
                                    style={img}
                                    alt='whatsapp gekari'
                                    src="https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/wa.svg?alt=media&token=b08bc6e6-52d0-4226-ab92-d91d9a567663" roundedCircle />
                            </Nav.Link>
                            <Nav.Link href='https://www.tiktok.com/@gekarihaleluya2021?'>
                                <Image
                                    style={img}
                                    alt='tiktok gekari'
                                    src="https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/tiktok.svg?alt=media&token=57efab24-79ba-4e21-881c-d2128305171d" roundedCircle />
                            </Nav.Link>
                            <Nav.Link href='https://www.youtube.com/channel/UCIrAwsqcpHsYhQ9YBJbhhtA'>
                                <Image
                                    alt='youtube gekari'
                                    src='https://firebasestorage.googleapis.com/v0/b/ghweb-a3148.appspot.com/o/yt.svg?alt=media&token=2ed7629e-99d9-4867-a6a7-6d1e9727b4bb'
                                    roundedCircle />
                            </Nav.Link>
                        </Nav>
                    </Col>

                </Row>
                <Row style={row}>
                    <p> &copy; {moment(dateTime).format('YYYY')}. Gekari Haleluya. Privacy Policy</p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
const container = {
    backgroundColor: colors.background.headerFooter
}
const img = {
    marginRight: '6px'
}

const row = {
    textAlign: 'center',
    paddingTop: '20px',
    color: colors.text.secondary,
    fontFamily: 'Poppins',
    fontWeight: weight.font.light,
    fontSize: '13px'
}