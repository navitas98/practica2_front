import destinos from "../data/destinos"
import DestinoCard from "./DestinoCard";
import styled from 'styled-components';

type destino=
{
  id: number,
  titulo: string,
  descripcion: string,
  descripcionLarga: string,
  imagen_corta: string, // URL de la imagen corta
  imagen_larga: string // URL de la imagen larga
}

const DestinosListStyled= styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;



export default function DestinosList ({ destinos }: { destinos: destino[] })  {
  return (
    <DestinosListStyled>
      {destinos.map((destino) => (
        
          <DestinoCard destino={destino} />
       
      ))}
    </DestinosListStyled>
  );
};