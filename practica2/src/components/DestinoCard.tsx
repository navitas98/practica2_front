import Link from 'next/link';
import styled from 'styled-components';
//import destino from "../data/destinos"

type destino=
{
  id: number,
  titulo: string,
  descripcion: string,
  descripcionLarga: string,
  imagen_corta: string, // URL de la imagen corta
  imagen_larga: string // URL de la imagen larga
}


const DestinoCardSyted = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 10px;
  margin-top: 60px;
  padding: 10px;
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
  cursor: pointer;
  &:hover {
    background-color:rgba(255, 255, 255, 0.5) ;
   
  }
  box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5);
`;

const DestinoImage = styled.img`
  width: 300px;
  height: 300px;
  
  padding: 10px;
  border-radius: 20px;

`;
const DestinoCardStyted_Interior=styled.div`
  width: 75%;
  margin: auto;
`
const DestinoTitle = styled.h2`
  align-items: center;
  font-size: 30px;
  margin-bottom: 10px;
  font-weight:bold;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 30px;
`;

const DestinoDescription = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
`;


export default function DestinoCard({ destino }: { destino: destino }) {
  return (
   
      <Link href={`/viaje_detallado/${destino.id}`}>
         <DestinoCardSyted>
          <DestinoImage src={destino.imagen_corta} alt={destino.titulo} />
          <DestinoCardStyted_Interior>
            <DestinoTitle>{destino.titulo}</DestinoTitle>
            <DestinoDescription>{destino.descripcion}</DestinoDescription>
          </DestinoCardStyted_Interior>
          </DestinoCardSyted>
      </Link>
  );
}