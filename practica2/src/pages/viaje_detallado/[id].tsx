import { useRouter } from 'next/router';
import DestinoDetalle from '../../components/DestinoDetalle';
import destinos from '../../data/destinos';

const ViajeDetallado = () => {
  const router = useRouter();
  const { id } = router.query;
  const destino = destinos.find(d => d.id === Number(id));

  if (!destino) {
    return <div>Destino no encontrado</div>;
  }

  return (
    <div>
      <DestinoDetalle destino={destino} />
    </div>
  );
};

export default ViajeDetallado