import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FotoFoto, Info, InfoPKS } from '../../components/besar';
import { colors } from '../../random';

class Taruna extends Component {
    render() {
        return (
            <div>
                <Container style={container} fluid>
                    <div>
                        <FotoFoto
                            foto1='https://live.staticflickr.com/65535/51633040975_1455138117_z.jpg'
                            foto2='https://live.staticflickr.com/65535/51631364697_a962098b27_z.jpg'
                            foto3='https://live.staticflickr.com/65535/51632837819_e6810e9a95_z.jpg'
                            foto4='https://live.staticflickr.com/65535/51631364757_d306569ecc_z.jpg'
                            foto5='https://live.staticflickr.com/65535/51631364792_ca80724900_z.jpg'
                            foto6='https://live.staticflickr.com/65535/51631364842_d810512671_z.jpg' />
                    </div>

                    <Info
                        teks='Teens Gekari'
                        gambar="https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg" />
                </Container >
                <br />
                <InfoPKS
                    gambarPks='https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg'
                    teksNamaPks='Nama PKS'
                    teksKontakPks='Kontak PKS' />
                <InfoPKS
                    gambarPks='https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg'
                    teksNamaPks='Nama PKS'
                    teksKontakPks='Kontak PKS' />
                <InfoPKS
                    gambarPks='https://live.staticflickr.com/65535/51632853894_a65955c254_z.jpg'
                    teksNamaPks='Nama PKS'
                    teksKontakPks='Kontak PKS' />
            </div>

        )
    }
}

export default Taruna;
const container = {
    backgroundColor: colors.background.grey,
}
