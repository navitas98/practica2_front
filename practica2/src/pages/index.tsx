import Link from 'next/link';
import DestinoCard from '../components/DestinoCard';
import destinos from '../data/destinos';

export default function IndexPage() {
  return (
    <div>
      <h1>LOS VIAJES DE SERGIO Y JAVIER</h1>
      {destinos.map((destino) => (
        <Link key={destino.id} href={`/viaje_detallado/${destino.id}`}>
          <div>
            <DestinoCard destino={destino} />
          </div>
        </Link>
      ))}
    </div>
  );
}