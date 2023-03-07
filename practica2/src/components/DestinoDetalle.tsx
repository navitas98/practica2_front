import Link from "next/link";
import styled from "styled-components";

type destino=
{
  id: number,
  titulo: string,
  descripcion: string,
  descripcionLarga: string,
  imagen_corta: string, // URL de la imagen corta
  imagen_larga: string // URL de la imagen larga
}


const Contenedor=styled.div`
display: flex;
flex-direction: column;
  align-items: center;
`
const Polaroid=styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
padding: 10px;
`
const BackLink = styled(Link)`
color:#000;
background-color: #fff;
border:4px solid #06b5e0;
margin:20px;

font-size: 1.2rem;
padding: 10px;
border-radius: 10px;
cursor: pointer;
align-items: center;
&:hover {
  background-color: #06b5e0;
}
`;
const Chincheta=styled.div`
border-radius: 50%;
width: 15px;
height: 15px;
background: radial-gradient(circle, #4672eb, #4a5172);
border: solid 3px #010a24;
`


const DestinoImage = styled.img`
border: 10px solid white;
border-radius: 15px;
max-width: 100%;
width: 500px;
height: 380px;

`;
const DestinoTitle = styled.h1`
font-size: 2rem;

color: #000;
`;
const Cuaderno_izquierda=styled.div`
padding: 15px;
text-align: justify;
width: 90%;
background-color: #fff;
margin: auto;
margin-top: 1em;
color: #000;
border: 5px solid #06b5e0;
line-height: 45px
`
const Texto=styled.p`
color: #000;
font-size: 15px;
`;


export default function DestinoDetalle({ destino }: { destino: destino }) {
  return (
    <Contenedor>

        <Polaroid>
          <Chincheta></Chincheta>
          <DestinoImage src={destino.imagen_larga} alt={destino.titulo} />
         
        </Polaroid>
        <Cuaderno_izquierda>
          <DestinoTitle>{destino.titulo}</DestinoTitle>
          <Texto>{destino.descripcionLarga}</Texto> 
        </Cuaderno_izquierda>
        <BackLink href="/">Ver más viajes</BackLink>
      
      
    </Contenedor>
  );
}